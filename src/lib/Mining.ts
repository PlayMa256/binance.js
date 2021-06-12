import {
  Connector,
  ERequestMethod,
  ESecurityType,
  IResponseEmpty,
} from "../Binance";

export class Mining {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }
  miningAcquiringAlgorithm() {
    return this.connector<IResponseEmpty, IMiningAcquiringAlgorithm>(
      "/sapi/v1/mining/pub/algoList",
      {},
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  miningAcquiringCoinName() {
    return this.connector<IResponseEmpty, IMiningAcquiringCoinName>(
      "/sapi/v1/mining/pub/coinList",
      {},
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA
    );
  }

  miningRequestDetailMinerList(
    params: IMiningRequestDetailMinerListParameters
  ) {
    return this.connector<
      IMiningRequestDetailMinerListParameters,
      IMiningRequestDetailMinerList
    >(
      "/sapi/v1/mining/worker/detail",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  miningRequestMinerList(params: IMiningRequestMinerListParameters) {
    return this.connector<
      IMiningRequestMinerListParameters,
      IMiningRequestMinerList
    >(
      "/sapi/v1/mining/worker/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  miningRevenueList(params: IMiningRevenueListParameters) {
    return this.connector<IMiningRevenueListParameters, IMiningRevenueList>(
      "/sapi/v1/mining/payment/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  miningStatisticList(params: IMiningStatisticListParameters) {
    return this.connector<IMiningStatisticListParameters, IMiningStatisticList>(
      "/sapi/v1/mining/statistics/user/status",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  miningAccountList(params: IMiningAccountListParameters) {
    return this.connector<IMiningAccountListParameters, IMiningAccountList>(
      "/sapi/v1/mining/statistics/user/list",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }
}

export interface IMiningAcquiringAlgorithm {
  code: number;
  msg: string;
  data: IMiningAcquiringAlgorithmData[];
}

export interface IMiningAcquiringAlgorithmData {
  algoName: string;
  algoId: number;
  poolIndex: number;
  unit: string;
}

export interface IMiningAcquiringCoinName {
  code: number;
  msg: string;
  data: IMiningAcquiringCoinNameData[];
}

export interface IMiningAcquiringCoinNameData {
  coinName: string;
  coinId: number;
  poolIndex: number;
  algoId: number;
  algoName: string;
}

export interface IMiningRequestDetailMinerListParameters {
  algo: string;
  userName: string;
  workerName: string;
}

export interface IMiningRequestDetailMinerList {
  code: number;
  msg: string;
  data: IMiningRequestDetailMinerListData[];
}

export interface IMiningRequestDetailMinerListData {
  workerName: string;
  type: string;
  hashrateDatas: IMiningRequestDetailMinerListDataHashrate[];
}

export interface IMiningRequestDetailMinerListDataHashrate {
  time: number;
  hashrate: string;
  reject: number;
}

export interface IMiningRequestMinerListParameters {
  algo: string;
  userName: string;
  pageIndex?: number;
  sort?: 0 | 1;
  sortColumn?: 0 | 1;
  workerStatus?: 0 | 1 | 2 | 3;
}

export interface IMiningRequestMinerList {
  code: number;
  msg: string;
  data: IMiningRequestMinerListData;
}

export interface IMiningRequestMinerListData {
  workerDatas?: IMiningRequestMinerListDataWorker[];
  totalNum: number;
  pageSize: number;
}

export interface IMiningRequestMinerListDataWorker {
  workerId: string;
  workerName: string;
  status: number;
  hashRate: number;
  dayHashRate: number;
  rejectRate: number;
  lastShareTime: number;
}

export interface IMiningRevenueListParameters {
  algo: string;
  userName: string;
  coin?: string;
  startDate?: number;
  endDate?: number;
  pageIndex?: number;
}

export interface IMiningRevenueList {
  code: number;
  msg: string;
  data: IMiningRevenueListData;
}

export interface IMiningRevenueListData {
  accountProfits?: IMiningRevenueListDataAccountProfit[];
  totalNum: number;
  pageSize: number;
}

export interface IMiningRevenueListDataAccountProfit {
  time: number;
  dayHashRate: number;
  profitAmount: number;
  coinName: string;
  status: number;
}

export interface IMiningStatisticListParameters {
  algo: string;
  userName: string;
}

export interface IMiningStatisticList {
  code: number;
  msg: string;
  data: IMiningStatisticListData;
}

export interface IMiningStatisticListData {
  fifteenMinHashRate: string;
  dayHashRate: string;
  validNum: number;
  invalidNum: number;
  profitToday: IMiningStatisticListDataProfit;
  profitYesterday: IMiningStatisticListDataProfit;
  userName: string;
  unit: string;
  algo: string;
}

export interface IMiningStatisticListDataProfit {
  BTC: string;
  BSV: string;
  BCH: string;
}

export type IMiningAccountListParameters = IMiningStatisticListParameters;

export interface IMiningAccountList {
  code: number;
  msg: string;
  data: IMiningAccountListData;
}

export interface IMiningAccountListData {
  type: string;
  userName: string;
  list: IMiningAccountListDataList[];
}

export type IMiningAccountListDataList =
  IMiningRequestDetailMinerListDataHashrate;
