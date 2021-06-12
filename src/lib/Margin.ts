import {
  Connector,
  EOrderResponseType,
  EOrderSide,
  EOrderSideEffectType,
  EOrderStatus,
  EOrderTimeInForce,
  EOrderType,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
  IResponseEmpty,
} from "../Binance";

export class Margin {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginCrossMarginAccountTransfer(
    params: IMarginCrossMarginAccountTransferParameters
  ) {
    return this.connector<
      IMarginCrossMarginAccountTransferParameters,
      IMarginCrossMarginAccountTransfer
    >(
      "/sapi/v1/margin/transfer",
      params,
      ERequestMethod.POST,
      ESecurityType.MARGIN
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginAccountBorrow(params: IMarginAccountBorrowParameters) {
    return this.connector<IMarginAccountBorrowParameters, IMarginAccountBorrow>(
      "/sapi/v1/margin/load",
      params,
      ERequestMethod.POST,
      ESecurityType.MARGIN
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginAccountRepay(params: IMarginAccountRepayParameters) {
    return this.connector<IMarginAccountRepayParameters, IMarginAccountRepay>(
      "/sapi/v1/margin/repay",
      params,
      ERequestMethod.POST,
      ESecurityType.MARGIN
    );
  }

  marginQueryMarginAsset(params: IMarginQueryMarginAssetParameters) {
    return this.connector<
      IMarginQueryMarginAssetParameters,
      IMarginQueryMarginAsset
    >(
      "/sapi/v1/margin/asset",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  marginQueryCrossMarginPair(params: IMarginQueryCrossMarginPairParameters) {
    return this.connector<
      IMarginQueryCrossMarginPairParameters,
      IMarginQueryCrossMarginPair
    >(
      "/sapi/v1/margin/pair",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  marginGetAllCrossMarginAssets(params: IResponseEmpty = {}) {
    return this.connector<IResponseEmpty, IMarginQueryMarginAsset[]>(
      "/sapi/v1/margin/allAssets",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  marginGetAllCrossMarginPairs(params: IResponseEmpty = {}) {
    return this.connector<IResponseEmpty, IMarginQueryCrossMarginPair[]>(
      "/sapi/v1/margin/allPairs",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  marginQueryMarginPriceIndex(params: IMarginQueryMarginPriceIndexParameters) {
    return this.connector<
      IMarginQueryMarginPriceIndexParameters,
      IMarginQueryMarginPriceIndex
    >(
      "/sapi/v1/margin/priceIndex",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginAccounNewOrder(params: IMarginAccountNewOrderParameters) {
    return this.connector<
      IMarginAccountNewOrderParameters,
      IMarginAccountNewOrder
    >(
      "/sapi/v1/margin/order",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginAccounCancelOrder(params: IMarginAccountCancelOrderParameters) {
    return this.connector<
      IMarginAccountCancelOrderParameters,
      IMarginAccountCancelOrder
    >(
      "/sapi/v1/margin/order",
      params,
      ERequestMethod.DELETE,
      ESecurityType.TRADE
    );
  }

  marginGetCrossMarginTransferHistory(
    params: IMarginGetCrossMarginTransferHistoryParameters = {}
  ) {
    return this.connector<
      IMarginGetCrossMarginTransferHistoryParameters,
      IMarginGetCrossMarginTransferHistory
    >(
      "/sapi/v1/margin/transfer",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryLoanRecord(params: IMarginQueryLoanRecordParameters) {
    return this.connector<
      IMarginQueryLoanRecordParameters,
      IMarginQueryLoanRecord
    >(
      "/sapi/v1/margin/loan",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryRepayRecord(params: IMarginQueryRepayRecordParameters) {
    return this.connector<
      IMarginQueryRepayRecordParameters,
      IMarginQueryRepayRecord
    >(
      "/sapi/v1/margin/repay",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginGetInterestHistory(params: IMarginGetInterestHistoryParameters) {
    return this.connector<
      IMarginGetInterestHistoryParameters,
      IMarginGetInterestHistory
    >(
      "/sapi/v1/margin/interestHistory",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginGetForceLiquidationHistory(
    params: IMarginGetForceLiquidationHistoryParameters = {}
  ) {
    return this.connector<
      IMarginGetForceLiquidationHistoryParameters,
      IMarginGetForceLiquidationHistory
    >(
      "/sapi/v1/margin/forceLiquidationRec",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryCrossMarginAccountDetails(
    params: IMarginQueryCrossMarginAccountDetailsParameters = {}
  ) {
    return this.connector<
      IMarginQueryCrossMarginAccountDetailsParameters,
      IMarginQueryCrossMarginAccountDetails
    >(
      "/sapi/v1/margin/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginQueryMarginAccountOrder(
    params: IMarginQueryMarginAccountOrderParameters
  ) {
    return this.connector<
      IMarginQueryMarginAccountOrderParameters,
      IMarginQueryMarginAccountOrder
    >(
      "/sapi/v1/margin/order",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountOpenOrder(
    params: IMarginQueryMarginAccountOpenOrderParameters
  ) {
    return this.connector<
      IMarginQueryMarginAccountOpenOrderParameters,
      IMarginQueryMarginAccountOpenOrder[]
    >(
      "/sapi/v1/margin/openOrders",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountAllOrder(
    params: IMarginQueryMarginAccountAllOrderParameters
  ) {
    return this.connector<
      IMarginQueryMarginAccountAllOrderParameters,
      IMarginQueryMarginAccountAllOrder[]
    >(
      "/sapi/v1/margin/allOrders",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountTradeList(
    params: IMarginQueryMarginAccountTradeListParameters
  ) {
    return this.connector<
      IMarginQueryMarginAccountTradeListParameters,
      IMarginQueryMarginAccountTradeList[]
    >(
      "/sapi/v1/margin/myTrades",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryMaxBorrow(params: IMarginQueryMaxBorrowParameters) {
    return this.connector<
      IMarginQueryMaxBorrowParameters,
      IMarginQueryMaxBorrow
    >(
      "/sapi/v1/margin/maxBorrowable",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryMaxTransferOutAmount(
    params: IMarginQueryMaxTransferOutAmountParameters
  ) {
    return this.connector<
      IMarginQueryMaxTransferOutAmountParameters,
      IMarginQueryMaxTransferOutAmount
    >(
      "/sapi/v1/margin/maxTransferable",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginCreateIsolatedMarginAccount(
    params: IMarginCreateIsolatedMarginAccountParameters
  ) {
    return this.connector<
      IMarginCreateIsolatedMarginAccountParameters,
      IMarginCreateIsolatedMarginAccount
    >(
      "/sapi/v1/margin/isolated/create",
      params,
      ERequestMethod.POST,
      ESecurityType.MARGIN
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  marginIsolatedMarginAccountTransfer(
    params: IMarginIsolatedMarginAccountTransferParameters
  ) {
    return this.connector<
      IMarginIsolatedMarginAccountTransferParameters,
      IMarginIsolatedMarginAccountTransfer
    >(
      "/sapi/v1/margin/isolated/transfer",
      params,
      ERequestMethod.POST,
      ESecurityType.MARGIN
    );
  }

  marginGetIsolatedMarginTransferHistory(
    params: IMarginGetIsolatedMarginTransferHistoryParameters
  ) {
    return this.connector<
      IMarginGetIsolatedMarginTransferHistoryParameters,
      IMarginGetIsolatedMarginTransferHistory
    >(
      "/sapi/v1/margin/isolated/transfer",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryIsolatedMarginAccountInfo(
    params: IMarginQueryIsolatedMarginAccountInfoParameters = {}
  ) {
    return this.connector<
      IMarginQueryIsolatedMarginAccountInfoParameters,
      IMarginQueryIsolatedMarginAccountInfo
    >(
      "/sapi/v1/margin/isolated/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginQueryIsolatedMarginSymbol(
    params: IMarginQueryIsolatedMarginSymbolParameters
  ) {
    return this.connector<
      IMarginQueryIsolatedMarginSymbolParameters,
      IMarginQueryIsolatedMarginSymbol
    >(
      "/sapi/v1/margin/isolated/pair",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  marginGetAllIsolatedMarginSymbol(params: IResponseEmpty = {}) {
    return this.connector<IResponseEmpty, IMarginQueryIsolatedMarginSymbol[]>(
      "/sapi/v1/margin/isolated/allPairs",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }
}

export interface IMarginCrossMarginAccountTransferParameters
  extends IRequestParameters {
  asset: string;
  amount: number;
  type: 1 | 2;
}

export interface IMarginCrossMarginAccountTransfer {
  tranId: number;
}

export interface IMarginAccountBorrowParameters extends IRequestParameters {
  asset: string;
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  amount: number;
}

export type IMarginAccountBorrow = IMarginCrossMarginAccountTransfer;

export type IMarginAccountRepayParameters = IMarginAccountBorrowParameters;
export type IMarginAccountRepay = IMarginAccountBorrow;

export interface IMarginQueryMarginAssetParameters extends IRequestParameters {
  asset: string;
}

export interface IMarginQueryMarginAsset {
  assetFullName: string;
  assetName: string;
  isBorrowable: boolean;
  isMortgageable: boolean;
  userMinBorrow: string;
  userMinRepay: string;
}

export interface IMarginQueryCrossMarginPairParameters
  extends IRequestParameters {
  symbol: string;
}

export interface IMarginQueryCrossMarginPair {
  id: number;
  symbol: string;
  base: string;
  quote: string;
  isMarginTrade: boolean;
  isBuyAllowed: boolean;
  isSellAllowed: boolean;
}

export type IMarginQueryMarginPriceIndexParameters =
  IMarginQueryCrossMarginPairParameters;

export interface IMarginQueryMarginPriceIndex {
  calcTime: number;
  price: string;
  symbol: string;
}

export interface IMarginAccountNewOrderParameters extends IRequestParameters {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  side: EOrderSide;
  type: EOrderType;
  quantity: number;
  price?: number;
  stopPrice?: number;
  newClientOrderId?: string;
  icebergQty?: number;
  newOderRespType?: EOrderResponseType;
  sideEffectType?: EOrderSideEffectType;
  timeInForce?: EOrderTimeInForce;
}

export interface IMarginAccountNewOrder {
  symbol: string;
  orderId: number;
  clientOrderId: string;
  isIsolated: boolean;
  transactTime: number;
  price?: string;
  origQty?: string;
  executedQty?: string;
  cummulativeQuoteQty?: string;
  status?: EOrderStatus;
  timeInForce?: EOrderTimeInForce;
  type?: EOrderType;
  side?: EOrderSide;
  marginBuyBorrowAmount?: number;
  marginBuyBorrowAsset?: string;
  fills?: IMarginAccountNewOrderFill[];
}

export interface IMarginAccountNewOrderFill {
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
}

export interface IMarginAccountCancelOrderParameters
  extends IRequestParameters {
  symbol: string;
  isIsolated: "TRUE" | "FALSE";
  orderId?: number;
  origClientOrderId?: string;
  newClientOrderId?: string;
}

export interface IMarginAccountCancelOrder {
  symbol: string;
  isIsolated: boolean;
  orderId: number;
  origClientOrderId: string;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: EOrderStatus;
  timeInForce: EOrderTimeInForce;
  type: EOrderType;
  side: EOrderSide;
}

export interface IMarginGetCrossMarginTransferHistoryParameters
  extends IRequestParameters {
  asset?: string;
  type?: "ROLL_IN" | "ROLL_OUT";
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
}

export interface IMarginGetCrossMarginTransferHistory {
  total: number;
  rows: IMarginGetCrossMarginTransferHistoryRow[];
}

export interface IMarginGetCrossMarginTransferHistoryRow {
  amount: string;
  asset: string;
  status: string;
  timestamp: number;
  txId: number;
  type: "ROLL_IN" | "ROLL_OUT";
}

export interface IMarginQueryLoanRecordParameters extends IRequestParameters {
  asset: string;
  isolatedSymbol?: string;
  txId?: number;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface IMarginQueryLoanRecord {
  total: number;
  rows: IMarginQueryLoanRecordRow[];
}

export interface IMarginQueryLoanRecordRow {
  isolatedSymbol: string;
  asset: string;
  principal: string;
  timestamp: number;
  status: string;
}

export type IMarginQueryRepayRecordParameters =
  IMarginQueryLoanRecordParameters;

export interface IMarginQueryRepayRecord {
  total: number;
  rows: IMarginQueryRepayRecordRow[];
}

export interface IMarginQueryRepayRecordRow {
  isolatedSymbol: string;
  amount: string;
  asset: string;
  interest: string;
  principal: string;
  status: string;
  timestamp: number;
  txId: number;
}

export type IMarginGetInterestHistoryParameters =
  IMarginQueryRepayRecordParameters;

export interface IMarginGetInterestHistory {
  total: number;
  rows: IMarginGetInterestHistoryRow[];
}

export interface IMarginGetInterestHistoryRow {
  isolatedSymbol: string;
  asset: string;
  interest: string;
  interestAccuredTime: number;
  interestRate: string;
  principal: string;
  type: string;
}

export interface IMarginGetForceLiquidationHistoryParameters
  extends IRequestParameters {
  startTime?: number;
  endTime?: number;
  isolatedSymbol?: string;
  current?: number;
  size?: number;
}

export interface IMarginGetForceLiquidationHistory {
  total: number;
  rows: IMarginGetForceLiquidationHistoryRow[];
}

export interface IMarginGetForceLiquidationHistoryRow {
  avgPrice: string;
  executedQty: string;
  orderId: number;
  price: string;
  qty: string;
  side: EOrderSide;
  symbol: string;
  timeInForce: EOrderTimeInForce;
  isIsolated: boolean;
  updatedTime: number;
}

/**
 * TODO: Write functions
 */

export type IMarginQueryCrossMarginAccountDetailsParameters =
  IRequestParameters;

export interface IMarginQueryCrossMarginAccountDetails {
  borrowEnabled: boolean;
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  tradeEnabled: boolean;
  transferEnabled: boolean;
  userAssets: IMarginQueryCrossMarginAccountDetailsUserAsset[];
}

export interface IMarginQueryCrossMarginAccountDetailsUserAsset {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
}

export interface IMarginQueryMarginAccountOrderParameters
  extends IRequestParameters {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: string;
  origClientOrderId?: string;
}

export interface IMarginQueryMarginAccountOrder {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  executedQty: string;
  icebergQty: boolean;
  isWorking: boolean;
  orderId: number;
  origQty: string;
  price: string;
  side: EOrderSide;
  status: EOrderStatus;
  stopPrice: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
  timeInForce: EOrderTimeInForce;
  type: EOrderType;
  updateTime: number;
}

export interface IMarginQueryMarginAccountOpenOrderParameters
  extends IRequestParameters {
  symbol?: string;
  isIsolated?: "TRUE" | "FALSE";
}

export interface IMarginQueryMarginAccountOpenOrder {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  executedQty: string;
  icebergQty: string;
  isWorking: boolean;
  orderId: number;
  origQty: string;
  price: string;
  side: EOrderSide;
  status: EOrderStatus;
  stopPrice: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
  timeInForce: EOrderTimeInForce;
  type: EOrderType;
  updateTime: number;
}

export interface IMarginQueryMarginAccountAllOrderParameters
  extends IRequestParameters {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export type IMarginQueryMarginAccountAllOrder =
  IMarginQueryMarginAccountOpenOrder;

export interface IMarginQueryMarginAccountTradeListParameters
  extends IRequestParameters {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
}

export interface IMarginQueryMarginAccountTradeList {
  commission: string;
  commissionAsset: string;
  id: number;
  isBestMatch: boolean;
  isBuyer: boolean;
  isMaker: boolean;
  orderId: number;
  price: string;
  qty: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
}

export interface IMarginQueryMaxBorrowParameters extends IRequestParameters {
  asset: string;
  isolatedSymbol?: string;
}

export interface IMarginQueryMaxBorrow {
  amount: string;
  borrowLimit: string;
}

export type IMarginQueryMaxTransferOutAmountParameters =
  IMarginQueryMaxBorrowParameters;

export interface IMarginQueryMaxTransferOutAmount {
  amount: string;
}

export interface IMarginCreateIsolatedMarginAccountParameters
  extends IRequestParameters {
  base: string;
  quote: string;
}

export interface IMarginCreateIsolatedMarginAccount {
  success: boolean;
  symbol: string;
}

export interface IMarginIsolatedMarginAccountTransferParameters
  extends IRequestParameters {
  asset: string;
  symbol: string;
  transFrom: "SPOT" | "ISOLATED_MARGIN";
  transTo: "SPOT" | "ISOLATED_MARGIN";
  amount: number;
}

export interface IMarginIsolatedMarginAccountTransfer {
  tranId: number;
}

export interface IMarginGetIsolatedMarginTransferHistoryParameters
  extends IRequestParameters {
  asset?: string;
  symbol: string;
  transFrom?: "SPOT" | "ISOLATED_MARGIN";
  transTo?: "SPOT" | "ISOLATED_MARGIN";
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface IMarginGetIsolatedMarginTransferHistory {
  total: number;
  rows: IMarginGetIsolatedMarginTransferHistoryRow[];
}

export interface IMarginGetIsolatedMarginTransferHistoryRow {
  amount: string;
  asset: string;
  status: EOrderStatus;
  timestamp: number;
  txId: number;
  transFrom: "SPOT" | "ISOLATED_MARGIN";
  transTo: "SPOT" | "ISOLATED_MARGIN";
}

export interface IMarginQueryIsolatedMarginAccountInfoParameters
  extends IRequestParameters {
  symbols?: string;
}

export interface IMarginQueryIsolatedMarginAccountInfo {
  assets: IMarginQueryIsolatedMarginAccountInfoAsset[];
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
}

export interface IMarginQueryIsolatedMarginAccountInfoAsset {
  baseAsset: IMarginQueryIsolatedMarginAccountInfoAssetDetail;
  quoteAsset: IMarginQueryIsolatedMarginAccountInfoAssetDetail;
  symbol: string;
  isolatedCreated: boolean;
  marginLevel: string;
  marginLevelStatus:
    | "EXCESSIVE"
    | "NORMAL"
    | "MARGIN_CALL"
    | "PRE_LIQUIDATION"
    | "FORCE_LIQUIDATION";
  marginRatio: string;
  indexPrice: string;
  liquidatePrice: string;
  liquidateRate: string;
  tradeEnabled: boolean;
}

export interface IMarginQueryIsolatedMarginAccountInfoAssetDetail {
  asset: string;
  borrowEnabled: boolean;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
  netAssetOfBtc: string;
  repayEnabled: boolean;
  totalAsset: string;
}

export interface IMarginQueryIsolatedMarginSymbolParameters
  extends IRequestParameters {
  symbol: string;
}

export interface IMarginQueryIsolatedMarginSymbol {
  symbol: string;
  base: string;
  quote: string;
  isMarginTrade: boolean;
  isBuyAllowed: boolean;
  isSellAllowed: boolean;
}
