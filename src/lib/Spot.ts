import {
  Connector,
  EOrderResponseType,
  EOrderSide,
  EOrderStatus,
  EOrderTimeInForce,
  EOrderType,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
  IResponseEmpty,
} from "../Binance";

export class Spot {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }

  spotTestNewOrder(params: ISpotNewOrderParameters) {
    return this.connector<ISpotNewOrderParameters, IResponseEmpty>(
      "/api/v3/order/test",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  spotNewOrder(params: ISpotNewOrderParameters) {
    return this.connector<ISpotNewOrderParameters, ISpotNewOrder>(
      "/api/v3/order",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  spotCancelOrder(params: ISpotCancelOrderParameters) {
    return this.connector<ISpotCancelOrderParameters, ISpotCancelOrder>(
      "/api/v3/order",
      params,
      ERequestMethod.DELETE,
      ESecurityType.TRADE
    );
  }

  spotCancelAllOrdersOnSymbol(params: ISpotCancelAllOrdersOnSymbolParameters) {
    return this.connector<
      ISpotCancelAllOrdersOnSymbolParameters,
      ISpotCancelAllOrdersOnSymbol[]
    >("/api/v3/openOrders", params, ERequestMethod.DELETE, ESecurityType.TRADE);
  }

  spotQueryOrder(params: ISpotQueryOrderParameters) {
    return this.connector<ISpotQueryOrderParameters, ISpotQueryOrder>(
      "/api/v3/order",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotCurrentOpenOrders(params: ISpotCurrentOpenOrdersParameters) {
    return this.connector<
      ISpotCurrentOpenOrdersParameters,
      ISpotCurrentOpenOrders[]
    >(
      "/api/v3/openOrders",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotAllOrders(params: ISpotAllOrdersParameters) {
    return this.connector<ISpotAllOrdersParameters, ISpotAllOrders[]>(
      "/api/v3/allOrders",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotNewOCO(params: ISpotNewOCOParameters) {
    return this.connector<ISpotNewOCOParameters, ISpotNewOCO>(
      "/api/v3/order/oco",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  spotCancelOCO(params: ISpotCancelOCOParameters) {
    return this.connector<ISpotCancelOCOParameters, ISpotCancelOCO>(
      "/api/v3/orderList",
      params,
      ERequestMethod.DELETE,
      ESecurityType.TRADE
    );
  }

  spotQueryOCO(params: ISpotQueryOCOParameters) {
    return this.connector<ISpotQueryOCOParameters, ISpotQueryOCO>(
      "/api/v3/orderList",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotQueryAllOCO(params: ISpotQueryAllOCOParameters = {}) {
    return this.connector<ISpotQueryAllOCOParameters, ISpotQueryAllOCO[]>(
      "/api/v3/allOrderList",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotQueryOpenOCO(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, ISpotQueryOrder[]>(
      "/api/v3/openOrderList",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotAccountInformation(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, ISpotAccountInformation>(
      "/api/v3/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  spotAccountTradeList(params: ISpotAccountTradeListParameters) {
    return this.connector<
      ISpotAccountTradeListParameters,
      ISpotAccountTradeList[]
    >("/api/v3/myTrades", params, ERequestMethod.GET, ESecurityType.USER_DATA);
  }
}

export interface ISpotNewOrderParameters extends IRequestParameters {
  symbol: string;
  side: EOrderSide;
  type: EOrderType;
  timeInForce?: EOrderTimeInForce;
  quantity?: number;
  quoteOrderQty?: number;
  price?: number;
  newClientOrderId?: string;
  stopPrice?: number;
  icebergQty?: number;
  newOrderRespType?: EOrderResponseType;
}

export interface ISpotNewOrder {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
  price: string;

  origQty?: string;
  executedQty?: string;
  cummulativeQuoteQty?: string;
  status?: EOrderStatus;
  timeInForce?: EOrderTimeInForce;
  type?: EOrderType;
  side?: EOrderSide;
  fills?: ISpotNewOrderFill[];
}

export interface ISpotNewOrderFill {
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
}

export interface ISpotCancelOrderParameters extends IRequestParameters {
  symbol: string;
  orderId?: number;
  origClientOrderId?: number;
  newClientOrderId?: number;
}

export interface ISpotCancelOrder {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: EOrderStatus;
  timeInForce: EOrderTimeInForce;
  type: EOrderType;
  side: EOrderSide;
}

export interface ISpotCancelAllOrdersOnSymbolParameters
  extends IRequestParameters {
  symbol: string;
}

export interface ISpotCancelAllOrdersOnSymbol extends ISpotCancelOrder {
  contingencyType: string;
  listStatusType: string;
  listOrderType: string;
  listClientOrderId: string;
  transactionTime: number;
  orders: ISpotCancelAllOrdersOnSymbolOrder[];
  orderReports: ISpotCancelAllOrdersOnSymbolOrderReport[];
}

export interface ISpotCancelAllOrdersOnSymbolOrder {
  symbol: string;
  orderId: number;
  clientOrderId: string;
}

export interface ISpotCancelAllOrdersOnSymbolOrderReport {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: EOrderStatus;
  timeInForce: EOrderTimeInForce;
  type: EOrderType;
  side: EOrderSide;
  stopPrice: string;
  icebergQty: string;
}

export interface ISpotQueryOrderParameters extends IRequestParameters {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
}

export interface ISpotQueryOrder {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: EOrderStatus;
  timeInForce: EOrderTimeInForce;
  type: EOrderType;
  side: EOrderSide;
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  origQuoteOrderQty: string;
}

export interface ISpotCurrentOpenOrdersParameters extends IRequestParameters {
  symbol?: string;
}

export type ISpotCurrentOpenOrders = ISpotQueryOrder;

export interface ISpotAllOrdersParameters extends IRequestParameters {
  symbol: string;
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export type ISpotAllOrders = ISpotCurrentOpenOrders;

export interface ISpotNewOCOParameters extends IRequestParameters {
  symbol: string;
  listClientOrderId?: string;
  side: EOrderSide;
  quantity: number;
  limitClientOrderId?: string;
  price: number;
  limitIcebergQty?: number;
  stopClientOrderId?: string;
  stopPrice: number;
  stopLimitPrice?: number;
  stopIcebergQty?: number;
  stopLimitTimeInForce?: EOrderTimeInForce;
  newOrderRespType?: EOrderResponseType;
}

export interface ISpotNewOCO {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderType: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: ISpotNewOCOOrder[];
  orderReports: ISpotNewOCOOrderReport[];
}

export type ISpotNewOCOOrder = ISpotCancelAllOrdersOnSymbolOrder;
export type ISpotNewOCOOrderReport = ISpotCancelAllOrdersOnSymbolOrderReport;

export interface ISpotCancelOCOParameters extends IRequestParameters {
  symbol: string;
  orderListId?: number;
  listClientorderId?: string;
  newClientOrderId?: string;
}

export type ISpotCancelOCO = ISpotNewOCO;
export type ISpotCancelOCOOrder = ISpotNewOCOOrder;
export type ISpotCancelOCOOrderReport = ISpotNewOCOOrderReport;

export interface ISpotQueryOCOParameters extends IRequestParameters {
  orderListId?: number;
  origClientOrderId?: string;
}

export interface ISpotQueryOCO {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderType: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: ISpotQueryOCOOrder[];
}

export type ISpotQueryOCOOrder = ISpotCancelOCOOrder;

export interface ISpotQueryAllOCOParameters extends IRequestParameters {
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export type ISpotQueryAllOCO = ISpotQueryOCO;

export type ISpotQueryOpenOCO = ISpotQueryAllOCO;

export interface ISpotAccountInformation {
  makerCommission: number;
  takerCommission: number;
  buyerCommission: number;
  sellerCommission: number;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  updateTime: number;
  accountType: string;
  balances: ISpotAccountInformationBalance[];
  permissions: string[];
}

export interface ISpotAccountInformationBalance {
  asset: string;
  free: string;
  locked: string;
}

export interface ISpotAccountTradeListParameters extends IRequestParameters {
  symbol: string;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
}

export interface ISpotAccountTradeList {
  symbol: string;
  id: number;
  orderId: number;
  orderListId: number;
  price: string;
  qty: string;
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isBestMatch: boolean;
}
