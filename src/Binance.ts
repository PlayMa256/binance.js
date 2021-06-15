import fetch from "isomorphic-fetch";
import hmacSHA256 from "crypto-js/hmac-sha256";
import WebSocket from "ws";

import { Wallet } from "./lib/Wallet";
import { Market } from "./lib/Market";
import { Spot } from "./lib/Spot";
import { Margin } from "./lib/Margin";
import { Stream } from "./lib/Stream";
import { Savings } from "./lib/Savings";
import { Mining } from "./lib/Mining";
import { Futures } from "./lib/Futures";
import { BLVT } from "./lib/BLVT";
import { BSwap } from "./lib/BSwap";
import { SubAccounts } from "./lib/SubAccount";

export class Binance {
   apiKey: string;
   secretKey: string;
   testMode: boolean;

   baseUrlApiLive = "https://api.binance.com";
   baseUrlApiTest = "https://testnet.binance.vision";

   baseUrlStream = "wss://stream.binance.com:9443";
   streams: Map<string, WebSocket> = new Map<string, WebSocket>();
   securityTypeRequiringSignature: ESecurityType[] = [
    ESecurityType.TRADE,
    ESecurityType.USER_DATA,
    ESecurityType.MARGIN,
  ];

  wallet: Wallet;
  subAccounts: SubAccounts;
  stream: Stream;
  spot: Spot;
  savings: Savings;
  mining: Mining;
  futures: Futures;
  bswap: BSwap;
  blvt: BLVT;
  margin: Margin;
  market: Market;

  constructor(apiKey: string, secretKey: string, testMode: boolean = true) {
    if (!apiKey) throw new Error("A valid API key is required");
    if (!secretKey) throw new Error("A valid secret key is required");

    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.testMode = testMode;

    this.wallet = new Wallet(this.sendRequest);
    this.subAccounts = new SubAccounts(this.sendRequest);
    this.stream = new Stream(this.createStream);
    this.spot = new Spot(this.sendRequest);
    this.savings = new Savings(this.sendRequest);
    this.mining = new Mining(this.sendRequest);
    this.futures = new Futures(this.sendRequest);
    this.bswap = new BSwap(this.sendRequest);
    this.blvt = new BLVT(this.sendRequest);
    this.margin = new Margin(this.sendRequest);
    this.market = new Market(this.sendRequest);
  }

  sendRequest = <K, T>(
    url: string,
    params: K,
    method: ERequestMethod,
    securityType: ESecurityType,
    preventTimestamp: boolean = false
  ): Promise<T> => {
    const baseUrl = this.testMode ? this.baseUrlApiTest : this.baseUrlApiLive;

    let populatedParams: IRequestPopulatedParameters;

    if (preventTimestamp) {
      populatedParams = {
        ...params,
      };
    } else {
      populatedParams = {
        timestamp: Date.now(),
        ...params,
      };
    }

    let signature = null;

    const headers = this.defineSecurityType(securityType);
    const query = this.generateQuery(populatedParams);

    if (this.securityTypeRequiringSignature.includes(securityType)) {
      signature = hmacSHA256(query, this.secretKey).toString();

      populatedParams = { ...populatedParams, signature };
    }

    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${this.generateQuery(populatedParams)}`, {
        method,
        headers,
      })
        .then((res: any) => {
          if (res.status === 404) throw new Error("Endpoint not found");
          if (res.status === 401) throw new Error("Forbidden access");

          return res.json();
        })
        .then((res: any) => {
          if (res.code && res.code < 0) reject(res);

          resolve(res as T);
        });
    });
  }


  generateQuery = (params: IRequestParameters): string => {
    return (
      Object.keys(params)
        //@ts-ignore
        .map((key) => `${key}=${params[key]}`)
        .join("&")
    );
  }

  defineSecurityType = (securityType: ESecurityType): IRequestHeaders => {
    let headers: IRequestHeaders = {
      "Content-Type": "application/json;charset=UTF-8",
    };

    if (securityType !== ESecurityType.NONE) {
      headers["X-MBX-APIKEY"] = this.apiKey;
    }

    return headers;
  }

  createStream = (url: string) => {
    if (this.streams.has(url)) return this.streams.get(url);

    const ws = new WebSocket(`${this.baseUrlStream}${url}`);
    ws.on("ping", () => ws.pong());
    ws.on("close", () => this.streams.delete(url));
    ws.on("open", () => this.streams.set(url, ws));

    return ws;
  }
}
export interface IRequest {
  headers: IRequestHeaders;
  body: IRequestBody;
  urlQuery: string;
}

export interface IRequestBody {}
export interface IRequestParameters {
  recvWindow?: number;
}

export interface IResponseEmpty {}

export interface IRequestPopulatedParameters extends IRequestParameters {
  signature?: string;
  timestamp?: number;
}

export type IRequestHeaders = Record<string, string>;

export enum ERequestMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum ESecurityType {
  NONE = "NONE",
  TRADE = "TRADE",
  USER_DATA = "USER_DATA",
  MARGIN = "MARGIN",
  USER_STREAM = "USER_STREAM",
  MARKET_DATA = "MARKET_DATA",
  FUTURES = "FUTURES",
}

export enum EOrderType {
  LIMIT = "LIMIT",
  MARKET = "MARKET",
  STOP_LOSS = "STOP_LOSS",
  STOP_LOSS_LIMIT = "STOP_LOSS_LIMIT",
  TAKE_PROFIT = "TAKE_PROFIT",
  TAKE_PROFIT_LIMIT = "TAKE_PROFIT_LIMIT",
  LIMIT_MAKER = "LIMIT_MAKER",
}

export enum EOrderSide {
  BUY = "BUY",
  SELL = "SELL",
}

export enum EOrderResponseType {
  ACK = "ACK",
  RESULT = "RESULT",
  FULL = "FULL",
}

export enum EOrderTimeInForce {
  GTC = "GTC",
  IOC = "IOC",
  FOK = "FOK",
}

export enum EOrderStatus {
  NEW = "NEW",
  PARTIALLY_FILLED = "PARTIALLY_FILLED",
  FILLED = "FILLED",
  CANCELED = "CANCELED",
  PENDING_CANCEL = "PENDING_CANCEL",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
}

export enum EOrderSideEffectType {
  NO_SIDE_EFFECT = "NO_SIDE_EFFECT",
  MARGIN_BUY = "MARGIN_BUY",
  AUTO_REPAY = "AUTO_REPAY",
}

export enum EStreamType {
  AGGREGATE_TRADE = "AGGREGATE_TRADE",
  TRADE = "TRADE",
  CANDLESTICK_TRADE = "CANDLESTICK_TRADE",
  SYMBOL_MINI_TICKER = "SYMBOL_MINI_TICKER",
  SYMBOL_TICKER = "SYMBOL_TICKER",
  BOOK_TICKER = "BOOK_TICKER",
  DEPTH = "DEPTH",
}

export enum EInterval {
  INTERVAL_1m = "1m",
  INTERVAL_3m = "3m",
  INTERVAL_5m = "5m",
  INTERVAL_15m = "15m",
  INTERVAL_30m = "30m",
  INTERVAL_1h = "1h",
  INTERVAL_2h = "2h",
  INTERVAL_4h = "4h",
  INTERVAL_6h = "6h",
  INTERVAL_8h = "8h",
  INTERVAL_12h = "12h",
  INTERVAL_1d = "1d",
  INTERVAL_3d = "3d",
  INTERVAL_1w = "1w",
  INTERVAL_1M = "1M",
}

export enum ESavingsStatus {
  ALL = "ALL",
  SUBSCRIBABLE = "SUBSCRIBABLE",
  UNSUBSCRIBABLE = "UNSUBSCRIBABLE",
}

export enum ESavingsType {
  FAST = "FAST",
  NORMAL = "NORMAL",
}

export enum ESavingsSortBy {
  START_TIME = "START_TIME",
  LOT_SIZE = "LOT_SIZE",
  INTEREST_RATE = "INTEREST_RATE",
  DURATION = "DURATION",
}

export enum EFuturesType {
  FROM_SPOT_TO_USDTFUTURS = 1,
  FROM_USDTFUTURES_TO_SPOT = 2,
  FROM_SPOT_TO_COINFUTURS = 3,
  FROM_COINFUTURES_TO_SPOT = 4,
}

export enum EAccountType {
  SPOT = "SPOT",
  USDT_FUTURE = "USDT_FUTURE",
  COIN_FUTURE = "COIN_FUTURE",
}

export enum ESubAccountFuturesType {
  USDT = 1,
  COIN = 2,
}

export type Connector = <K, T>(
  url: string,
  params: K,
  method: ERequestMethod,
  securityType: ESecurityType,
  preventTimestamp?: boolean
) => Promise<T>;

export type GenerateStream = (url: string) => WebSocket | undefined;
