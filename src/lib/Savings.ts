import {
  Connector,
  ERequestMethod,
  ESavingsSortBy,
  ESavingsStatus,
  ESavingsType,
  ESecurityType,
  IRequestParameters,
} from "../Binance";

export class Savings {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }

  savingsGetFlexibleProductList(
    params: ISavingsGetFlexibleProductListParameters = {}
  ) {
    return this.connector<
      ISavingsGetFlexibleProductListParameters,
      ISavingsGetFlexibleProductList[]
    >(
      "/sapi/v1/lending/daily/product/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  savingsGetLeftDailyPurchaseQuotaFlexibleProduct(
    params: ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters
  ) {
    return this.connector<
      ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters,
      ISavingsGetLeftDailyPurchaseQuotaFlexibleProduct
    >(
      "/sapi/v1/lending/daily/userLeftQuota",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  savingsPurchaseFlexibleProduct(
    params: ISavingsPurchaseFlexibleProductParameters
  ) {
    return this.connector<
      ISavingsPurchaseFlexibleProductParameters,
      ISavingsPurchaseFlexibleProduct
    >(
      "/sapi/v1/lending/daily/purchase",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  savingsGetLeftDailyRedemptionQuotaFlexibleProduct(
    params: ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters
  ) {
    return this.connector<
      ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters,
      ISavingsGetLeftDailyRedemptionQuotaFlexibleProduct
    >(
      "/sapi/v1/lending/daily/userRedemptionQuota",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  savingsRedeemFlexibleProduct(
    params: ISavingsRedeemFlexibleProductParameters
  ) {
    return this.connector<
      ISavingsRedeemFlexibleProductParameters,
      ISavingsRedeemFlexibleProduct
    >(
      "/sapi/v1/lending/daily/redeem",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  savingsGetFlexibleProductPosition(
    params: ISavingsGetFlexibleProductPositionParameters
  ) {
    return this.connector<
      ISavingsGetFlexibleProductPositionParameters,
      ISavingsGetFlexibleProductPosition[]
    >(
      "/sapi/v1/lending/daily/token/position",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  savingsGetFixedActivityProjectList(
    params: ISavingsGetFixedActivityProjectListParameters
  ) {
    return this.connector<
      ISavingsGetFixedActivityProjectListParameters,
      ISavingsGetFixedActivityProjectList[]
    >(
      "/sapi/v1/lending/project/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  savingsPurchaseFixedActivityProject(
    params: ISavingsPurchaseFixedActivityProjectParameters
  ) {
    return this.connector<
      ISavingsPurchaseFixedActivityProjectParameters,
      ISavingsPurchaseFixedActivityProject
    >(
      "/sapi/v1/lending/customizedFixed/purchase",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  savingsGetFixedActivityProjectPosition(
    params: ISavingsGetFixedActivityProjectPositionParameters
  ) {
    return this.connector<
      ISavingsGetFixedActivityProjectPositionParameters,
      ISavingsGetFixedActivityProjectPosition[]
    >(
      "/sapi/v1/lending/project/position/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  savingsLendingAccount(params: ISavingsLendingAccountParameters = {}) {
    return this.connector<
      ISavingsLendingAccountParameters,
      ISavingsLendingAccount
    >(
      "/sapi/v1/lending/union/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  savingsGetPurchaseRecord(params: ISavingsGetPurchaseRecordParameters) {
    return this.connector<
      ISavingsGetPurchaseRecordParameters,
      ISavingsGetPurchaseRecord[]
    >(
      "/sapi/v1/lending/union/purchaseRecord",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  savingsGetRedemptionRecord(params: ISavingsGetRedemptionRecordParameters) {
    return this.connector<
      ISavingsGetRedemptionRecordParameters,
      ISavingsGetRedemptionRecord[]
    >(
      "/sapi/v1/lending/union/redemptionRecord",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  savingsGetInterestHistory(params: ISavingsGetInterestHistoryParameters) {
    return this.connector<
      ISavingsGetInterestHistoryParameters,
      ISavingsGetInterestHistory[]
    >(
      "/sapi/v1/lending/union/interestHistory",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  savingsChangeFixedActivityPositionToDailyPosition(
    params: ISavingsChangeFixedActivityPositionToDailyPositionParameters
  ) {
    return this.connector<
      ISavingsChangeFixedActivityPositionToDailyPositionParameters,
      ISavingsChangeFixedActivityPositionToDailyPosition
    >(
      "/sapi/v1/lending/positionChanged",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }
}

export interface ISavingsGetFlexibleProductListParameters
  extends IRequestParameters {
  status?: ESavingsStatus;
  features?: "ALL" | "true";
}

export interface ISavingsGetFlexibleProductList {
  asset: string;
  avgAnnualInterestRate: string;
  canPurchase: boolean;
  canRedeem: boolean;
  dailyInterestPerThousand: string;
  featured: boolean;
  minPurchaseAmount: string;
  productId: string;
  purchasedAmount: string;
  status: string;
  upLimit: string;
  upLimitPerUser: string;
}

export interface ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters
  extends IRequestParameters {
  productId: string;
}

export interface ISavingsGetLeftDailyPurchaseQuotaFlexibleProduct {
  asset: string;
  leftQuota: string;
}

export interface ISavingsPurchaseFlexibleProductParameters
  extends IRequestParameters {
  productId: string;
  amount: number;
}

export interface ISavingsPurchaseFlexibleProduct {
  purchaseId: number;
}

export interface ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters
  extends IRequestParameters {
  productId: string;
  type: ESavingsType;
}

export interface ISavingsGetLeftDailyRedemptionQuotaFlexibleProduct {
  asset: string;
  dailyQuota: string;
  leftQuota: string;
  minRedemptionAmount: string;
}

export interface ISavingsRedeemFlexibleProductParameters
  extends IRequestParameters {
  productId: string;
  amount: number;
  type: ESavingsType;
}

export interface ISavingsRedeemFlexibleProduct {}

export interface ISavingsGetFlexibleProductPositionParameters
  extends IRequestParameters {
  asset: string;
}

export interface ISavingsGetFlexibleProductPosition {
  annualInterestRate: string;
  asset: string;
  avgAnnualInterestRate: string;
  canRedeem: boolean;
  dailyInterestRate: string;
  freeAmount: string;
  freezeAmount: string;
  lockedAmount: string;
  productId: string;
  productName: string;
  redeemingAmount: string;
  todayPurchasedAmount: string;
  totalAmount: string;
  totalInterest: string;
}

export interface ISavingsGetFixedActivityProjectListParameters
  extends IRequestParameters {
  asset?: string;
  type: "ACTIVITY" | "CUSTOMIZED_FIXED";
  status?: ESavingsStatus;
  isSortAsc?: boolean;
  sortBy?: ESavingsSortBy;
  current?: number;
  size?: number;
}

export interface ISavingsGetFixedActivityProjectList {
  asset: string;
  displayPriority: number;
  duration: number;
  interestPerLot: string;
  interestRate: string;
  lotSize: string;
  lotsLowLimit: number;
  lotsPurchased: number;
  lotsUpLimit: number;
  maxLotsPerUser: number;
  needKyc: boolean;
  projectId: string;
  projectName: string;
  status: string;
  type: string;
  withAreaLimitation: boolean;
}

export interface ISavingsPurchaseFixedActivityProjectParameters
  extends IRequestParameters {
  projectId: string;
  lot: number;
}

export interface ISavingsPurchaseFixedActivityProject {
  purchaseId: string;
}

export interface ISavingsGetFixedActivityProjectPositionParameters
  extends IRequestParameters {
  asset: string;
  projectId?: string;
  status?: "HOLDING" | "REDEEMED";
}

export interface ISavingsGetFixedActivityProjectPosition {
  asset: string;
  canTransfer: boolean;
  createTimestamp: number;
  duration: number;
  endTime: number;
  interest: string;
  interestRate: string;
  lot: number;
  positionId: number;
  principal: string;
  projectId: string;
  projectName: string;
  purchaseTime: number;
  redeemDate: string;
  startTime: number;
  status: string;
  type: string;
}

export interface ISavingsLendingAccountParameters extends IRequestParameters {}

export interface ISavingsLendingAccount {
  positionAmountVos: ISavingsLendingAccountPosition[];
  totalAmountInBTC: string;
  totalAmountInUSDT: string;
  totalFixedAmountInBTC: string;
  totalFixedAmountInUSDT: string;
  totalFlexibleInBTC: string;
  totalFlexibleInUSDT: string;
}

export interface ISavingsLendingAccountPosition {
  amount: string;
  amountInBTC: string;
  amountInUSDT: string;
  asset: string;
}

export interface ISavingsGetPurchaseRecordParameters
  extends IRequestParameters {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface ISavingsGetPurchaseRecord {
  amount: string;
  asset: string;
  createTime: number;
  lendingType: string;
  productName: string;
  purchaseId: number;
  status: string;
  lot?: number;
}

export interface ISavingsGetRedemptionRecordParameters
  extends IRequestParameters {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface ISavingsGetRedemptionRecord {
  amount: string;
  asset: string;
  createTime: number;
  interest?: string;
  principal: string;
  projectId: string;
  projectName: string;
  startTime?: number;
  status: string;
  type?: string;
}

export interface ISavingsGetInterestHistoryParameters
  extends IRequestParameters {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface ISavingsGetInterestHistory {
  asset: string;
  interest: string;
  lendingType: string;
  productName: string;
  time: number;
}

export interface ISavingsChangeFixedActivityPositionToDailyPositionParameters
  extends IRequestParameters {
  projectId: string;
  lot: number;
  positionId?: number;
}

export interface ISavingsChangeFixedActivityPositionToDailyPosition {
  dailyPurchaseId: number;
  success: boolean;
  time: number;
}
