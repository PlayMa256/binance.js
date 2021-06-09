import { Binance } from '../Binance';

export class Wallet {
  walletDepositHistory(this: Binance.Api, params: IWalletDepositHistoryParameters = {}) {
    return this.sendRequest<IWalletDepositHistoryParameters, IWalletDepositHistory>(
      '/wapi/v3/depositHistory.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletWithdrawHistory(this: Binance.Api, params: IWalletWithdrawHistoryParameters = {}) {
    return this.sendRequest<IWalletWithdrawHistoryParameters, IWalletWithdrawHistory>(
      '/wapi/v3/withdrawHistory.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletDepositAddress(this: Binance.Api, params: IWalletDepositAddressParameters) {
    return this.sendRequest<IWalletDepositAddressParameters, IWalletDepositAddress>(
      '/wapi/v3/depositAddress.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletAccountStatus(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, IWalletAccountStatus>(
      '/wapi/v3/accountStatus.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletSystemStatus(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, IWalletSystemStatus>(
      '/wapi/v3/systemStatus.html',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletApiTradingStatus(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, IWalletApiTradingStatus>(
      '/wapi/v3/apiTradingStatus.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletDustLog(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, IWalletDustLog>(
      '/wapi/v3/userAssetDribbletLog.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletDustTransfer(this: Binance.Api, params: IWalletDustTransferParameters) {
    return this.sendRequest<IWalletDustTransferParameters, IWalletDustTransfer>(
      '/sapi/v1/asset/dust',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletTradeFee(this: Binance.Api, params: IWalletTradeFeeParameters = {}) {
    return this.sendRequest<IWalletTradeFeeParameters, IWalletTradeFee>(
      '/wapi/v3/tradeFee.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletAssetDetail(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, IWalletAssetDetail>(
      '/wapi/v3/assetDetail.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletAllCoins(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, IWalletAllCoins[]>(
      '/sapi/v1/capital/config/getall',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletDailyAccountSnapshot(this: Binance.Api, params: IWalletDailyAccountSnapshotParameters) {
    return this.sendRequest<IWalletDailyAccountSnapshotParameters, IWalletDailyAccountSnapshot>(
      '/sapi/v1/accountSnapshot',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletAssetDividend(this: Binance.Api, params: IWalletAssetDividendParameters = {}) {
    return this.sendRequest<IWalletAssetDividendParameters, IWalletAssetDividend>(
      '/sapi/v1/asset/assetDividend',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletWithdraw(this: Binance.Api, params: IWalletWithdrawParameters) {
    return this.sendRequest<IWalletWithdrawParameters, IWalletWithdraw>(
      '/sapi/v1/asset/assetDividend',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletDisableFastWithdrawSwitch(this: Binance.Api, params: Binance.IRequestParameters) {
    return this.sendRequest<Binance.IRequestParameters, Binance.IResponseEmpty>(
      '/sapi/v1/account/disableFastWithdrawSwitch',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  walletAccountInfo(this: Binance.Api, params = {}) {
    return this.sendRequest('/api/v3/account', params, Binance.ERequestMethod.GET, Binance.ESecurityType.USER_DATA)
  }

  /**
   * Warning: This function hasn't been tested.
   */
  walletEnableFastWithdrawSwitch(this: Binance.Api, params: Binance.IRequestParameters) {
    return this.sendRequest<Binance.IRequestParameters, Binance.IResponseEmpty>(
      '/sapi/v1/account/enableFastWithdrawSwitch',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export interface IWalletDepositHistoryParameters extends Binance.IRequestParameters {
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

export interface IWalletWithdrawHistoryParameters extends Binance.IRequestParameters {
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

export interface IWalletDepositAddressParameters extends Binance.IRequestParameters {
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
export interface IWalletDustTransferParameters extends Binance.IRequestParameters {
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

export interface IWalletTradeFeeParameters extends Binance.IRequestParameters {
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

export interface IWalletDailyAccountSnapshotParameters extends Binance.IRequestParameters {
  type: 'SPOT' | 'MARGIN' | 'FUTURES';
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

export interface IWalletAssetDividendParameters extends Binance.IRequestParameters {
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

export interface IWalletWithdrawParameters extends Binance.IRequestParameters {
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
