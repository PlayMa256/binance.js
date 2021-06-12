import {
  Connector,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
  IResponseEmpty,
} from "../Binance";
export class Wallet {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }

  walletDepositHistory(params: IWalletDepositHistoryParameters = {}) {
    return this.connector<
      IWalletDepositHistoryParameters,
      IWalletDepositHistory
    >(
      "/wapi/v3/depositHistory.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletWithdrawHistory(params: IWalletWithdrawHistoryParameters = {}) {
    return this.connector<
      IWalletWithdrawHistoryParameters,
      IWalletWithdrawHistory
    >(
      "/wapi/v3/withdrawHistory.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletDepositAddress(params: IWalletDepositAddressParameters) {
    return this.connector<
      IWalletDepositAddressParameters,
      IWalletDepositAddress
    >(
      "/wapi/v3/depositAddress.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletAccountStatus(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, IWalletAccountStatus>(
      "/wapi/v3/accountStatus.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletSystemStatus() {
    return this.connector<IRequestParameters, IWalletSystemStatus>(
      "/wapi/v3/systemStatus.html",
      {},
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletApiTradingStatus(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, IWalletApiTradingStatus>(
      "/wapi/v3/apiTradingStatus.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletDustLog(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, IWalletDustLog>(
      "/wapi/v3/userAssetDribbletLog.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletDustTransfer(params: IWalletDustTransferParameters) {
    return this.connector<IWalletDustTransferParameters, IWalletDustTransfer>(
      "/sapi/v1/asset/dust",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  walletTradeFee(params: IWalletTradeFeeParameters = {}) {
    return this.connector<IWalletTradeFeeParameters, IWalletTradeFee>(
      "/wapi/v3/tradeFee.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletAssetDetail(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, IWalletAssetDetail>(
      "/wapi/v3/assetDetail.html",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletAllCoins(params: IRequestParameters = {}) {
    return this.connector<IRequestParameters, IWalletAllCoins[]>(
      "/sapi/v1/capital/config/getall",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletDailyAccountSnapshot(params: IWalletDailyAccountSnapshotParameters) {
    return this.connector<
      IWalletDailyAccountSnapshotParameters,
      IWalletDailyAccountSnapshot
    >(
      "/sapi/v1/accountSnapshot",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  walletAssetDividend(params: IWalletAssetDividendParameters = {}) {
    return this.connector<IWalletAssetDividendParameters, IWalletAssetDividend>(
      "/sapi/v1/asset/assetDividend",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletWithdraw(params: IWalletWithdrawParameters) {
    return this.connector<IWalletWithdrawParameters, IWalletWithdraw>(
      "/sapi/v1/asset/assetDividend",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletDisableFastWithdrawSwitch(params: IRequestParameters) {
    return this.connector<IRequestParameters, IResponseEmpty>(
      "/sapi/v1/account/disableFastWithdrawSwitch",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }

  walletAccountInfo(params = {}) {
    return this.connector<IRequestParameters, any>(
      "/api/v3/account",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletEnableFastWithdrawSwitch(params: IRequestParameters) {
    return this.connector<IRequestParameters, IResponseEmpty>(
      "/sapi/v1/account/enableFastWithdrawSwitch",
      params,
      ERequestMethod.POST,
      ESecurityType.USER_DATA
    );
  }
}

export interface IWalletDepositHistoryParameters extends IRequestParameters {
  asset?: string;
  status?: number;
  startTime?: number;
  endTime?: number;
}

export interface IWalletDepositHistory {
  success: boolean;
  depositList: IWalletDepositHistoryItem[];
}

export interface IWalletDepositHistoryItem {
  insertTime: number;
  amount: number;
  asset: string;
  address: string;
  txId: string;
  status: number;
}

export interface IWalletWithdrawHistoryParameters extends IRequestParameters {
  asset?: string;
  status?: number;
  startTime?: number;
  endTime?: number;
}

export interface IWalletWithdrawHistory {
  success: boolean;
  withdrawList: IWalletWithdrawHistoryItem[];
}

export interface IWalletWithdrawHistoryItem {
  id: string;
  amount: number;
  transactionFee: number;
  address: string;
  addressTag: string;
  txId: string;
  asset: string;
  applyTime: number;
  status: number;
}

export interface IWalletDepositAddressParameters extends IRequestParameters {
  asset: string;
  status?: boolean;
}

export interface IWalletDepositAddress {
  success: boolean;
  address: string;
  addressTag: string;
  asset: string;
}

export interface IWalletAccountStatus {
  success: boolean;
  msg: string;
  objs?: string[];
}

export interface IWalletSystemStatus {
  status: number;
  msg: string;
}

export interface IWalletApiTradingStatus {
  success: boolean;
  status: IWalletApiTradingStatusDetails;
}

export interface IWalletApiTradingStatusDetails {
  isLocked: boolean;
  plannedRecoverTime: number;
  triggerCondition: Record<string, number>;
  indicators: Record<string, IWalletApiTradingStatusDetailsIndicator>;
  updateTime: number;
}

export interface IWalletApiTradingStatusDetailsIndicator {
  i: string;
  c: number;
  v: number;
  t: number;
}

export interface IWalletDustLog {
  success: boolean;
  results: IWalletDustLogResult;
}
export interface IWalletDustTransferParameters extends IRequestParameters {
  asset: string;
}

export interface IWalletDustTransfer {
  totalServiceCharge: string;
  totalTransfered: string;
  transferResult: IWalletDustTransferResult[];
}

export interface IWalletDustTransferResult {
  amount: string;
  fromAsset: string;
  operateTime: number;
  serviceChargeAmount: string;
  tranId: number;
  transferedAmount: string;
}

export interface IWalletDustLogResult {
  total: number;
  rows: IWalletDustLogResultRow[];
}

export interface IWalletDustLogResultRow {
  transfered_total: string;
  service_charge_total: string;
  tran_id: number;
  logs: IWalletDustLogResultLog[];
  operate_time: string;
}

export interface IWalletDustLogResultLog {
  tranId: number;
  serviceChargeAmount: string;
  uid: string;
  amount: string;
  operateTime: string;
  transferedAmount: string;
  fromAsset: string;
}

export interface IWalletTradeFeeParameters extends IRequestParameters {
  symbol?: string;
}

export interface IWalletTradeFee {
  success: boolean;
  tradeFee: IWalletTradeFeeDetails[];
}

export interface IWalletTradeFeeDetails {
  symbol: string;
  maker: number;
  taker: number;
}

export interface IWalletAssetDetail {
  success: boolean;
  assetDetail: Record<string, IWalletAssetDetailDetails>;
}

export interface IWalletAssetDetailDetails {
  minWithdrawAmount: string;
  depositStatus: boolean;
  withdrawFee: number;
  withdrawStatus: boolean;
  depositTip?: string;
}

export interface IWalletAllCoins {
  coin: string;
  depositAllEnable: boolean;
  free: string;
  freeze: string;
  ipoable: string;
  ipoing: string;
  isLegalMoney: boolean;
  locked: string;
  name: string;
  networkList: IWalletAllCoinsNetwork[];
  storage: string;
  trading: boolean;
  withdrawAllEnable: boolean;
  withdrawing: string;
}

export interface IWalletAllCoinsNetwork {
  addressRegex: string;
  coin: string;
  depositDesc: string;
  depositEnable: boolean;
  isDefault: boolean;
  memoRegex: string;
  minConfirm: number;
  name: string;
  network: string;
  resetAddressStatus: boolean;
  specialTips: string;
  unLockConfirm: number;
  withdrawDesc: string;
  withdrawEnable: boolean;
  withdrawFee: string;
  withdrawIntegerMultiple: string;
  withdrawMin: string;
}

export interface IWalletDailyAccountSnapshotParameters
  extends IRequestParameters {
  type: "SPOT" | "MARGIN" | "FUTURES";
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IWalletDailyAccountSnapshot {
  code: number;
  msg: string;
  snapshotVos: IWalletDailyAccountSnapshotDetails[];
}

export interface IWalletDailyAccountSnapshotDetails {
  data: IWalletDailyAccountSnapshotDetailsData;
  type: string;
  updateTime: number;
}

export interface IWalletDailyAccountSnapshotDetailsData {
  balances: IWalletDailyAccountSnapshotDetailsDataBalance[];
  totalAssetOfBtc: string;
}

export interface IWalletDailyAccountSnapshotDetailsDataBalance {
  asset: string;
  free: string;
  locked: string;
}

export interface IWalletAssetDividendParameters extends IRequestParameters {
  asset?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IWalletAssetDividend {
  total: number;
  rows: IWalletAssetDividendItem[];
}

export interface IWalletAssetDividendItem {
  amount: string;
  asset: string;
  divTime: number;
  endInfo: string;
  tranId: number;
}

export interface IWalletWithdrawParameters extends IRequestParameters {
  asset: string;
  withdrawOrderId?: string;
  network?: string;
  address: string;
  addressTag?: string;
  amount: number;
  transactionFeeFlag?: boolean;
  name?: string;
}

export interface IWalletWithdraw {
  success: boolean;
  id: string;
  msg: string;
}
