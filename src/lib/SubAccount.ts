import {
  Connector,
  EAccountType,
  EFuturesType,
  ERequestMethod,
  ESecurityType,
  ESubAccountFuturesType,
  IRequestParameters,
} from "../Binance";

export class SubAccounts {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsList() {
    return this.connector<IRequestParameters, ISubAccountsList>(
      "/wapi/v3/sub-account/list.html",
      {},
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsTransferHistory() {
    return this.connector<IRequestParameters, ISubAccountsList>(
      "/wapi/v3/sub-account/transfer/history.html",
      {},
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsAssets() {
    return this.connector<IRequestParameters, ISubAccountsAssets>(
      "/wapi/v3/sub-account/assets.html",
      {},
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsCreateVirtualSubAccount(
    params: ISubAccountsCreateVirtualSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsCreateVirtualSubAccountParameters,
      ISubAccountsCreateVirtualSubAccount
    >(
      "/sapi/v1/sub-account/virtualSubAccount",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountListSAPI(
    params: ISubAccountsQuerySubAccountListSAPIParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountListSAPIParameters,
      ISubAccountsQuerySubAccountListSAPI
    >(
      "/sapi/v1/sub-account/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountList(
    params: ISubAccountsQuerySubAccountListParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountListParameters,
      ISubAccountsQuerySubAccountList
    >(
      "/wapi/v3/sub-account/list.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountSpotAssetTransferHistory(
    params: ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters,
      ISubAccountsQuerySubAccountSpotAssetTransferHistory
    >(
      "/wapi/v3/sub-account/transfer/history.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountSpotAssetTransferHistorySAPI(
    params: ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters,
      ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPI[]
    >(
      "/sapi/v1/sub-account/sub/transfer/history",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsSubAccountSpotAssetTransfer(
    params: ISubAccountsSubAccountSpotAssetTransferParameters
  ) {
    return this.connector<
      ISubAccountsSubAccountSpotAssetTransferParameters,
      ISubAccountsSubAccountSpotAssetTransfer
    >(
      "/wapi/v3/sub-account/transfer.html",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountFuturesAssetTransferHistory(
    params: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters,
      ISubAccountsQuerySubAccountFuturesAssetTransferHistory
    >(
      "/sapi/v1/sub-account/futures/internalTransfer",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsSubAccountFuturesAssetTransfer(
    params: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters,
      ISubAccountsQuerySubAccountFuturesAssetTransferHistory
    >(
      "/sapi/v1/sub-account/futures/internalTransfer",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountsAssets(
    params: ISubAccountsQuerySubAccountAssetsParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountAssetsParameters,
      ISubAccountsQuerySubAccountAssets
    >(
      "/wapi/v3/sub-account/assets.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountsAssetsSAPI(
    params: ISubAccountsQuerySubAccountAssetsSAPIParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountAssetsSAPIParameters,
      ISubAccountsQuerySubAccountAssetsSAPI
    >(
      "/sapi/v3/sub-account/assets",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountSpotAssetsSummary(
    params: ISubAccountsQuerySubAccountSpotAssetsSummaryParameters
  ) {
    return this.connector<
      ISubAccountsQuerySubAccountSpotAssetsSummaryParameters,
      ISubAccountsQuerySubAccountSpotAssetsSummary
    >(
      "/sapi/v1/sub-account/spotSummary",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSubAccountDepositAddress(
    params: ISubAccountsGetSubAccountDepositAddressParameters
  ) {
    return this.connector<
      ISubAccountsGetSubAccountDepositAddressParameters,
      ISubAccountsGetSubAccountDepositAddress
    >(
      "/sapi/v1/capital/deposit/subAddress",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSubAccountDepositHistory(
    params: ISubAccountsGetSubAccountDepositAddressHistoryParameters
  ) {
    return this.connector<
      ISubAccountsGetSubAccountDepositAddressHistoryParameters,
      ISubAccountsGetSubAccountDepositAddressHistory[]
    >(
      "/sapi/v1/capital/deposit/subHisrec",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSubAccountStatusMarginFutures(
    params: ISubAccountsGetSubAccountStatusMarginFuturesParameters
  ) {
    return this.connector<
      ISubAccountsGetSubAccountStatusMarginFuturesParameters,
      ISubAccountsGetSubAccountStatusMarginFutures[]
    >(
      "/sapi/v1/sub-account/status",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsEnableMarginSubAccount(
    params: ISubAccountsEnableMarginSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsEnableMarginSubAccountParameters,
      ISubAccountsEnableMarginSubAccount
    >(
      "/sapi/v1/sub-account/margin/enable",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetDetailSubAccountMarginAccount(
    params: ISubAccountsGetDetailSubAccountMarginAccountParameters
  ) {
    return this.connector<
      ISubAccountsGetDetailSubAccountMarginAccountParameters,
      ISubAccountsGetDetailSubAccountMarginAccount
    >(
      "/sapi/v1/sub-account/margin/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSummarySubAccountMarginAccount(
    params: ISubAccountsGetSummarySubAccountMarginAccountParameters
  ) {
    return this.connector<
      ISubAccountsGetSummarySubAccountMarginAccountParameters,
      ISubAccountsGetSummarySubAccountMarginAccount
    >(
      "/sapi/v1/sub-account/margin/accountSummary",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsEnableFuturesSubAccount(
    params: ISubAccountsEnableFuturesSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsEnableFuturesSubAccountParameters,
      ISubAccountsEnableFuturesSubAccount
    >(
      "/sapi/v1/sub-account/futures/enable",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetDetailSubAccountFuturesAccount(
    params: ISubAccountsGetDetailSubAccountFuturesAccountParameters
  ) {
    return this.connector<
      ISubAccountsGetDetailSubAccountFuturesAccountParameters,
      ISubAccountsGetDetailSubAccountFuturesAccount
    >(
      "/sapi/v1/sub-account/futures/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSummarySubAccountFuturesAccount(
    params: ISubAccountsGetSummarySubAccountFuturesAccountParameters
  ) {
    return this.connector<
      ISubAccountsGetSummarySubAccountFuturesAccountParameters,
      ISubAccountsGetSummarySubAccountFuturesAccount
    >(
      "/sapi/v1/sub-account/futures/accountSummary",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetFuturesPositionRiskSubAccount(
    params: ISubAccountsGetFuturesPositionRiskSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsGetFuturesPositionRiskSubAccountParameters,
      ISubAccountsGetFuturesPositionRiskSubAccount[]
    >(
      "/sapi/v1/sub-account/futures/positionRisk",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsFuturesTransferSubAccount(
    params: ISubAccountsFuturesTransferSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsFuturesTransferSubAccountParameters,
      ISubAccountsFuturesTransferSubAccount
    >(
      "/sapi/v1/sub-account/futures/transfer",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsMarginTransferSubAccount(
    params: ISubAccountsMarginTransferSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsMarginTransferSubAccountParameters,
      ISubAccountsMarginTransferSubAccount
    >(
      "/sapi/v1/sub-account/margin/transfer",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsTransferSubAccountSameMaster(
    params: ISubAccountsTransferSubAccountSameMasterParameters
  ) {
    return this.connector<
      ISubAccountsTransferSubAccountSameMasterParameters,
      ISubAccountsTransferSubAccountSameMaster
    >(
      "/sapi/v1/sub-account/transfer/subToSub",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsTransferToMaster(params: ISubAccountsTransferToMasterParameters) {
    return this.connector<
      ISubAccountsTransferToMasterParameters,
      ISubAccountsTransferToMaster
    >(
      "/sapi/v1/sub-account/transfer/subToMaster",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsSubAccountTransferHistory(
    params: ISubAccountsSubAccountTransferHistoryParameters
  ) {
    return this.connector<
      ISubAccountsSubAccountTransferHistoryParameters,
      ISubAccountsSubAccountTransferHistory[]
    >(
      "/sapi/v1/sub-account/transfer/subUserHistory",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsUniversalTransfer(
    params: ISubAccountsUniversalTransferParameters
  ) {
    return this.connector<
      ISubAccountsUniversalTransferParameters,
      ISubAccountsUniversalTransfer
    >(
      "/sapi/v1/sub-account/universalTransfer",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQueryUniversalTransferHistory(
    params: ISubAccountsQueryUniversalTransferHistoryParameters
  ) {
    return this.connector<
      ISubAccountsQueryUniversalTransferHistoryParameters,
      ISubAccountsQueryUniversalTransferHistory[]
    >(
      "/sapi/v1/sub-account/universalTransfer",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetDetailSubAccountFuturesAccountV2(
    params: ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters
  ) {
    return this.connector<
      ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters,
      ISubAccountsGetDetailSubAccountFuturesAccountV2
    >(
      "/sapi/v2/sub-account/futures/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSummarySubAccountFuturesAccountV2(
    params: ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters
  ) {
    return this.connector<
      ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters,
      ISubAccountsGetSummarySubAccountFuturesAccountV2
    >(
      "/sapi/v2/sub-account/futures/accountSummary",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetFuturesPositionRiskSubAccountV2(
    params: ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters
  ) {
    return this.connector<
      ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters,
      ISubAccountsGetFuturesPositionRiskSubAccountV2
    >(
      "/sapi/v2/sub-account/futures/positionRisk",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsEnableLeverageTokenSubAccount(
    params: ISubAccountsEnableLeverageTokenSubAccountParameters
  ) {
    return this.connector<
      ISubAccountsEnableLeverageTokenSubAccountParameters,
      ISubAccountsEnableLeverageTokenSubAccount
    >(
      "/sapi/v1/sub-account/blvt/enable",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }
}

export interface ISubAccountsList {
  success: boolean;
  subAccounts: ISubAccountsListItem[];
}

export interface ISubAccountsListItem {
  email: string;
  status: string;
  activated: boolean;
  mobile: string;
  gAuth: boolean;
  createTime: number;
}

export interface ISubAccountsTransferHistory {
  success: boolean;
  transfers: ISubAccountsTransferHistoryItem[];
}

export interface ISubAccountsTransferHistoryItem {
  from: string;
  to: string;
  asset: string;
  qty: string;
  time: number;
}

export interface ISubAccountsAssets {
  success: boolean;
  balances: ISubAccountsAssetsBalance[];
}

export interface ISubAccountsAssetsBalance {
  asset: string;
  free: number;
  locked: number;
}

export interface ISubAccountsCreateVirtualSubAccountParameters
  extends IRequestParameters {
  subAccountString: string;
}

export interface ISubAccountsCreateVirtualSubAccount {
  email: string;
}

export interface ISubAccountsQuerySubAccountListSAPIParameters
  extends IRequestParameters {
  email?: string;
  isFreeze?: string;
  page?: number;
  limit?: number;
}

export interface ISubAccountsQuerySubAccountListSAPI {
  subAccounts: ISubAccountsQuerySubAccountListSAPIItem[];
}

export interface ISubAccountsQuerySubAccountListSAPIItem {
  email: string;
  isFreeze: boolean;
  createTime: number;
}

export interface ISubAccountsQuerySubAccountListParameters
  extends IRequestParameters {
  email?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export interface ISubAccountsQuerySubAccountList {
  subAccounts: ISubAccountsQuerySubAccountListItem[];
  success: boolean;
}

export interface ISubAccountsQuerySubAccountListItem {
  email: string;
  status: string;
  activated: boolean;
  mobile: string;
  gAuth: boolean;
  createTime: number;
}

export interface ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters
  extends IRequestParameters {
  fromEmail?: string;
  toEmail?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
}

export interface ISubAccountsQuerySubAccountSpotAssetTransferHistory {
  transfers: ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem[];
  success: boolean;
}

export interface ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem {
  from: string;
  to: string;
  asset: string;
  qty: string;
  status: string;
  tranId: number;
  time: number;
}

export interface ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters
  extends IRequestParameters {
  fromEmail?: string;
  toEmail?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
}

export type ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPI =
  ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem;

export interface ISubAccountsSubAccountSpotAssetTransferParameters
  extends IRequestParameters {
  fromEmail: string;
  toEmail: string;
  asset: string;
  amount: number;
}

export interface ISubAccountsSubAccountSpotAssetTransfer {
  txnId: string;
  success: boolean;
}

export interface ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters
  extends IRequestParameters {
  email: string;
  futuresType: EFuturesType;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
}

export interface ISubAccountsQuerySubAccountFuturesAssetTransferHistory {
  futuresType: EFuturesType;
  success: boolean;
  transfers: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryItem[];
}

export interface ISubAccountsQuerySubAccountFuturesAssetTransferHistoryItem {
  from: string;
  to: string;
  asset: string;
  qty: string;
  tranId: number;
  time: number;
}

export interface ISubAccountsSubAccountFuturesAssetTransferParameters
  extends IRequestParameters {
  fromEmail: string;
  toEmail: string;
  asset: string;
  amount: number;
  futuresType: EFuturesType;
}

export interface ISubAccountsSubAccountFuturesAssetTransfer {
  txnId: string;
  success: boolean;
}

export interface ISubAccountsQuerySubAccountAssetsParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsQuerySubAccountAssets {
  success: boolean;
  balances: ISubAccountsQuerySubAccountAssetsItem[];
}

export interface ISubAccountsQuerySubAccountAssetsItem {
  asset: string;
  free: number;
  locked: number;
}

export interface ISubAccountsQuerySubAccountAssetsSAPIParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsQuerySubAccountAssetsSAPI {
  balances: ISubAccountsQuerySubAccountAssetsItem[];
}

export interface ISubAccountsQuerySubAccountAssetsSAPIItem {
  asset: string;
  free: number;
  locked: number;
}

export interface ISubAccountsQuerySubAccountSpotAssetsSummaryParameters
  extends IRequestParameters {
  email?: string;
  page?: number;
  size?: number;
}

export interface ISubAccountsQuerySubAccountSpotAssetsSummary {
  totalCount: number;
  masterAccountTotalAsset: string;
  spotSubUserAssetBtcVoList: ISubAccountsQuerySubAccountSpotAssetsSummaryItem[];
}

export interface ISubAccountsQuerySubAccountSpotAssetsSummaryItem {
  email: string;
  totalAsset: string;
}

export interface ISubAccountsGetSubAccountDepositAddressParameters
  extends IRequestParameters {
  email: string;
  coin: string;
  network?: string;
}

export interface ISubAccountsGetSubAccountDepositAddress {
  address: string;
  coin: string;
  tag: string;
  url: string;
}

export interface ISubAccountsGetSubAccountDepositAddressHistoryParameters
  extends IRequestParameters {
  email: string;
  coin?: string;
  status?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  offset?: number;
}

export interface ISubAccountsGetSubAccountDepositAddressHistory {
  amount: string;
  coin: string;
  network: string;
  status: number;
  address: string;
  addressTag: string;
  txId: string;
  insertTime: number;
  transferType: number;
  confirmTimes: string;
}

export interface ISubAccountsGetSubAccountStatusMarginFuturesParameters
  extends IRequestParameters {
  email?: string;
}

export interface ISubAccountsGetSubAccountStatusMarginFutures {
  email: string;
  isSubUserEnabled: boolean;
  isUserActive: boolean;
  insertTime: number;
  isMarginEnabled: boolean;
  isFutureEnabled: boolean;
  mobile: number;
}

export interface ISubAccountsEnableMarginSubAccountParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsEnableMarginSubAccount {
  email: string;
  isMarginEnabled: boolean;
}

export interface ISubAccountsGetDetailSubAccountMarginAccountParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsGetDetailSubAccountMarginAccount {
  email: string;
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  marginTradeCoeffVo: {
    forceLiquidationBar: string;
    marginCallBar: string;
    normalBar: string;
  };
  marginUserAssetVoList: ISubAccountsGetDetailSubAccountMarginAccountAsset[];
}

export interface ISubAccountsGetDetailSubAccountMarginAccountAsset {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
}

export interface ISubAccountsGetSummarySubAccountMarginAccountParameters
  extends IRequestParameters {}

export interface ISubAccountsGetSummarySubAccountMarginAccount {
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  subAccountList: ISubAccountsGetSummarySubAccountMarginAccountItem[];
}

export interface ISubAccountsGetSummarySubAccountMarginAccountItem {
  email: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
}

export interface ISubAccountsEnableFuturesSubAccountParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsEnableFuturesSubAccount {
  email: string;
  isFuturesEnabled: boolean;
}

export interface ISubAccountsGetDetailSubAccountFuturesAccountParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsGetDetailSubAccountFuturesAccount {
  email: string;
  asset: string;
  assets: ISubAccountsGetDetailSubAccountFuturesAccountItem[];
  canDeposit: boolean;
  canTrade: boolean;
  canWithdraw: boolean;
  feeTier: number;
  maxWithdrawAmount: string;
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  updateTime: number;
}

export interface ISubAccountsGetDetailSubAccountFuturesAccountItem {
  asset: string;
  initialMargin: string;
  maintenanceMargin: string;
  marginBalance: string;
  maxWithdrawAmount: string;
  openOrderInitialMargin: string;
  positionInitialMargin: string;
  unrealizedProfit: string;
  walletBalance: string;
}

export interface ISubAccountsGetSummarySubAccountFuturesAccountParameters
  extends IRequestParameters {}

export interface ISubAccountsGetSummarySubAccountFuturesAccount {
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
  subAccountList: ISubAccountsGetSummarySubAccountFuturesAccountItem[];
}

export interface ISubAccountsGetSummarySubAccountFuturesAccountItem {
  email: string;
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
}

export interface ISubAccountsGetFuturesPositionRiskSubAccountParameters
  extends IRequestParameters {
  email: string;
}

export interface ISubAccountsGetFuturesPositionRiskSubAccount {
  entryPrice: string;
  leverage: string;
  maxNotional: string;
  liquidationPrice: string;
  markPrice: string;
  positionAmount: string;
  symbol: string;
  unrealizedProfit: string;
}

export interface ISubAccountsFuturesTransferSubAccountParameters
  extends IRequestParameters {
  email: string;
  asset: string;
  amount: number;
  type: number;
}

export interface ISubAccountsFuturesTransferSubAccount {
  txnId: string;
}

export interface ISubAccountsMarginTransferSubAccountParameters
  extends IRequestParameters {
  email: string;
  asset: string;
  amount: number;
  type: number;
}

export interface ISubAccountsMarginTransferSubAccount {
  txnId: string;
}

export interface ISubAccountsTransferSubAccountSameMasterParameters
  extends IRequestParameters {
  toEmail: string;
  asset: string;
  amount: number;
  type: number;
}

export interface ISubAccountsTransferSubAccountSameMaster {
  txnId: string;
}

export interface ISubAccountsTransferToMasterParameters
  extends IRequestParameters {
  asset: string;
  amount: number;
  type: number;
}

export interface ISubAccountsTransferToMaster {
  txnId: string;
}

export interface ISubAccountsSubAccountTransferHistoryParameters
  extends IRequestParameters {
  asset?: string;
  type?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface ISubAccountsSubAccountTransferHistory {
  counterParty: string;
  email: string;
  type: number;
  asset: string;
  qty: string;
  fromAccountType: string;
  toAccountType: string;
  status: string;
  tranId: number;
  time: number;
}

export interface ISubAccountsUniversalTransferParameters
  extends IRequestParameters {
  fromEmail?: string;
  toEmail?: string;
  fromAccountType: EAccountType;
  toAccountType: EAccountType;
  asset: string;
  amount: number;
}

export interface ISubAccountsUniversalTransfer {
  txnId: string;
}

export interface ISubAccountsQueryUniversalTransferHistoryParameters
  extends IRequestParameters {
  fromEmail?: string;
  toEmail?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
}

export interface ISubAccountsQueryUniversalTransferHistory {
  tranId: number;
  fromEmail: string;
  toEmail: string;
  asset: string;
  amount: string;
  fromAccountType: EAccountType;
  toAccountType: EAccountType;
  status: string;
  createTimeStamp: number;
}

export interface ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters
  extends IRequestParameters {
  email: string;
  futuresType: ESubAccountFuturesType;
}

export interface ISubAccountsGetDetailSubAccountFuturesAccountV2 {
  email: string;
  assets: ISubAccountsGetDetailSubAccountFuturesAccountV2Item[];
  canDeposit: boolean;
  canTrade: boolean;
  canWithdraw: boolean;
  feeTier: number;
  maxWithdrawAmount?: string;
  totalInitialMargin?: string;
  totalMaintenanceMargin?: string;
  totalMarginBalance?: string;
  totalOpenOrderInitialMargin?: string;
  totalPositionInitialMargin?: string;
  totalUnrealizedProfit?: string;
  totalWalletBalance?: string;
  updateTime: number;
}

export interface ISubAccountsGetDetailSubAccountFuturesAccountV2Item {
  asset: string;
  initialMargin: string;
  maintenanceMargin: string;
  marginBalance: string;
  maxWithdrawAmount: string;
  openOrderInitialMargin: string;
  positionInitialMargin: string;
  unrealizedProfit: string;
  walletBalance: string;
}

export interface ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters
  extends IRequestParameters {
  futuresTypes: ESubAccountFuturesType;
  page?: number;
  limit?: number;
}

export interface ISubAccountsGetSummarySubAccountFuturesAccountV2 {
  totalInitialMargin?: string;
  totalMaintenanceMargin?: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin?: string;
  totalPositionInitialMargin?: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
  subAccountList: ISubAccountsGetSummarySubAccountFuturesAccountV2Item[];
}

export interface ISubAccountsGetSummarySubAccountFuturesAccountV2Item {
  email: string;
  totalInitialMargin?: string;
  totalMaintenanceMargin?: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin?: string;
  totalPositionInitialMargin?: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
}

export interface ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters
  extends IRequestParameters {
  futuresTypes: ESubAccountFuturesType;
  page?: number;
  limit?: number;
}

export interface ISubAccountsGetFuturesPositionRiskSubAccountV2 {
  futurePositionRiskVos?: ISubAccountsGetFuturesPositionRiskSubAccountV2ItemUSDT[];
  deliveryPositionRiskVos?: ISubAccountsGetFuturesPositionRiskSubAccountV2ItemCOIN[];
}

export interface ISubAccountsGetFuturesPositionRiskSubAccountV2ItemUSDT {
  entryPrice: string;
  leverage: string;
  maxNotional: string;
  liquidationPrice: string;
  markPrice: string;
  positionAmount: string;
  symbol: string;
  unrealizedProfit: string;
}

export interface ISubAccountsGetFuturesPositionRiskSubAccountV2ItemCOIN {
  entryPrice: string;
  markPrice: string;
  leverage: string;
  isolated: string;
  isolatedWallet: string;
  isolatedMargin: string;
  isAutoAddMargin: string;
  positionSide: string;
  positionAmount: string;
  symbol: string;
  unrealizedProfit: string;
}

export interface ISubAccountsEnableLeverageTokenSubAccountParameters
  extends IRequestParameters {
  emai: string;
  enableBlvt: boolean;
}

export interface ISubAccountsEnableLeverageTokenSubAccount {
  emai: string;
  enableBlvt: boolean;
}
