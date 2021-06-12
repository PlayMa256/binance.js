import {
  Connector,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
} from "../Binance";

export class BLVT {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }

  blvtGetBLVTInfo(params: IBLVTGetBLVTInfoParameters = {}) {
    return this.connector<IBLVTGetBLVTInfoParameters, IBLVTGetBLVTInfo[]>(
      "/sapi/v1/blvt/tokenInfo",
      params,
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  blvtSubscribeBLVT(params: IBLVTSubscribeBLVTParameters) {
    return this.connector<IBLVTSubscribeBLVTParameters, IBLVTSubscribeBLVT>(
      "/sapi/v1/blvt/subscribe",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  blvtQuerySubscriptionRecord(
    params: IBLVTQuerySubscriptionRecordParameters = {}
  ) {
    return this.connector<
      IBLVTQuerySubscriptionRecordParameters,
      IBLVTQuerySubscriptionRecord[]
    >(
      "/sapi/v1/blvt/subscribe/record",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  blvtRedeemBLVT(params: IBLVTRedeemBLVTParameters) {
    return this.connector<IBLVTRedeemBLVTParameters, IBLVTRedeemBLVT>(
      "/sapi/v1/blvt/redeem",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  blvtQueryRedemptionRecord(params: IBLVTQueryRedemptionRecordParameters = {}) {
    return this.connector<
      IBLVTQueryRedemptionRecordParameters,
      IBLVTQueryRedemptionRecord[]
    >(
      "/sapi/v1/blvt/redeem/record",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }
}

export interface IBLVTGetBLVTInfoParameters extends IRequestParameters {
  tokenName?: string;
}

export interface IBLVTGetBLVTInfo {
  tokenName: string;
  description: string;
  underlying: string;
  tokenIssued: string;
  basket: string;
  nav: string;
  realLeverage: string;
  fundingRate: string;
  dailyManagementFee: string;
  timestamp: number;
}

export interface IBLVTSubscribeBLVTParameters extends IRequestParameters {
  tokenName: string;
  cost: number;
}

export interface IBLVTSubscribeBLVT {
  id: number;
  status: string;
  tokenName: string;
  amount: string;
  cost: string;
  timestamp: number;
}

export interface IBLVTQuerySubscriptionRecordParameters
  extends IRequestParameters {
  tokenName?: string;
  id?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IBLVTQuerySubscriptionRecord {
  id: number;
  tokenName: string;
  amount: string;
  nav: string;
  fee: string;
  totalCharge: string;
  timestamp: number;
}

export interface IBLVTRedeemBLVTParameters extends IRequestParameters {
  tokenName: string;
  amount: number;
}

export interface IBLVTRedeemBLVT {
  id: number;
  status: string;
  tokenName: string;
  redeemAmount: string;
  amount: string;
  timestamp: number;
}

export interface IBLVTQueryRedemptionRecordParameters
  extends IRequestParameters {
  tokenName?: string;
  id?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IBLVTQueryRedemptionRecord {
  id: number;
  tokenName: string;
  amount: string;
  nav: string;
  fee: string;
  netProceed: string;
  timestamp: number;
}
