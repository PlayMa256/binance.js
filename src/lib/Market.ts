import {
  Connector,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
  IResponseEmpty,
} from "../Binance";

export class Market {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }
  marketTestConnectivity() {
    return this.connector<IRequestParameters, IResponseEmpty>(
      "/api/v3/ping",
      {},
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketCheckServerTime() {
    return this.connector<IRequestParameters, IMarketCheckServerTime>(
      "/api/v3/time",
      {},
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketExchangeInformation() {
    return this.connector<IRequestParameters, IMarketExchangeInformation>(
      "/api/v3/exchangeInfo",
      {},
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketOrderBook(params: IMarketOrderBookParameters) {
    return this.connector<IMarketOrderBookParameters, IMarketOrderBook>(
      "/api/v3/depth",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketRecentTradesList(params: IMarketRecentTradesListParameters) {
    return this.connector<
      IMarketRecentTradesListParameters,
      IMarketRecentTradesList[]
    >(
      "/api/v3/trades",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketOldTradeLookup(params: IMarketOldTradeLookupParameters) {
    return this.connector<
      IMarketOldTradeLookupParameters,
      IMarketOldTradeLookup[]
    >(
      "/api/v3/historicalTrades",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketAggregateTradesList(params: IMarketAggregateTradesListParameters) {
    return this.connector<
      IMarketAggregateTradesListParameters,
      IMarketAggregateTradesList[]
    >(
      "/api/v3/aggTrades",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketKlineData(params: IMarketKlineDataParameters) {
    return this.connector<IMarketKlineDataParameters, (number | string)[][]>(
      "/api/v3/klines",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketCurrentAveragePrice(params: IMarketCurrentAveragePriceParameters) {
    return this.connector<
      IMarketCurrentAveragePriceParameters,
      IMarketCurrentAveragePrice
    >(
      "/api/v3/avgPrice",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  market24hrTickerPriceChange(
    params: IMarket24hTickerPriceChangeParameters = {}
  ) {
    return this.connector<
      IMarket24hTickerPriceChangeParameters,
      IMarket24hTickerPriceChange | IMarket24hTickerPriceChange[]
    >(
      "/api/v3/ticker/24hr",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketSymbolPriceTicker(params: IMarketSymbolPriceTickerParameters = {}) {
    return this.connector<
      IMarketSymbolPriceTickerParameters,
      IMarketSymbolPriceTicker | IMarketSymbolPriceTicker[]
    >(
      "/api/v3/ticker/price",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  marketSymbolOrderBookTicker(
    params: IMarketSymbolOrderBookTickerParameters = {}
  ) {
    return this.connector<
      IMarketSymbolOrderBookTickerParameters,
      IMarketSymbolOrderBookTicker | IMarketSymbolOrderBookTicker[]
    >(
      "/api/v3/ticker/bookTicker",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }
}

export interface IMarketCheckServerTime {
  serverTime: number;
}

export interface IMarketExchangeInformation {
  timezone: string;
  serverTime: number;
  rateLimits: [];
  exchangeFilters: [];
  symbols: IMarketExchangeInformationSymbol[];
}

export interface IMarketExchangeInformationSymbol {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  orderTypes: [];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: [];
  permissions: [];
}

export interface IMarketOrderBookParameters {
  symbol: string;
  limit?: 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000;
}

export interface IMarketOrderBook {
  lastUpdateId: number;
  bids: number[][];
  asks: number[][];
}

export interface IMarketRecentTradesListParameters {
  symbol: string;
  limit?: number;
}

export interface IMarketRecentTradesList {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export interface IMarketOldTradeLookupParameters {
  symbol: string;
  limit?: number;
  fromId?: number;
}

export interface IMarketOldTradeLookup extends IMarketRecentTradesList {}

export interface IMarketAggregateTradesListParameters {
  symbol: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IMarketAggregateTradesList {
  a: number;
  p: string;
  q: string;
  f: number;
  l: number;
  T: number;
  m: boolean;
  M: boolean;
}

export interface IMarketKlineDataParameters {
  symbol: string;
  interval: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IMarketCurrentAveragePriceParameters {
  symbol: string;
}

export interface IMarketCurrentAveragePrice {
  mins: number;
  price: string;
}

export interface IMarket24hTickerPriceChangeParameters {
  symbol?: string;
}

export interface IMarket24hTickerPriceChange {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  askPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export type IMarketSymbolPriceTickerParameters =
  IMarket24hTickerPriceChangeParameters;

export interface IMarketSymbolPriceTicker {
  symbol: string;
  price: string;
}

export type IMarketSymbolOrderBookTickerParameters =
  IMarket24hTickerPriceChangeParameters;

export interface IMarketSymbolOrderBookTicker {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
}
