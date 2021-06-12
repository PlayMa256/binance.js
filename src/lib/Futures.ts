import {
  Connector,
  EFuturesType,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
} from "../Binance";

export class Futures {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }
  /**
   * Warning: This function hasn't been tested.
   */
  futuresNewFutureAccountTransfer(
    params: IFuturesNewFutureAccountTransferParameters
  ) {
    return this.connector<
      IFuturesNewFutureAccountTransferParameters,
      IFuturesNewFutureAccountTransfer
    >(
      "/sapi/v1/futures/transfer",
      params,
      ERequestMethod.POST,
      ESecurityType.FUTURES
    );
  }

  futuresGetFutureAccountTransactionHistoryList(
    params: IFuturesGetFutureAccountTransactionHistoryListParameters
  ) {
    return this.connector<
      IFuturesGetFutureAccountTransactionHistoryListParameters,
      IFuturesGetFutureAccountTransactionHistoryList
    >(
      "/sapi/v1/futures/transfer",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresBorrowCrossCollateral(
    params: IFuturesBorrowCrossCollateralParameters
  ) {
    return this.connector<
      IFuturesBorrowCrossCollateralParameters,
      IFuturesBorrowCrossCollateral
    >(
      "/sapi/v1/futures/loan/borrow",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  futuresCrossCollateralBorrowHistory(
    params: IFuturesCrossCollateralBorrowHistoryParameters = {}
  ) {
    return this.connector<
      IFuturesCrossCollateralBorrowHistoryParameters,
      IFuturesCrossCollateralBorrowHistory
    >(
      "/sapi/v1/futures/loan/borrow/history",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresRepayCrossCollateral(params: IFuturesRepayCrossCollateralParameters) {
    return this.connector<
      IFuturesRepayCrossCollateralParameters,
      IFuturesRepayCrossCollateral
    >(
      "/sapi/v1/futures/loan/repay",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  futuresCrossCollateralRepaymentHistory(
    params: IFuturesCrossCollateralRepaymentHistoryParameters = {}
  ) {
    return this.connector<
      IFuturesCrossCollateralRepaymentHistoryParameters,
      IFuturesCrossCollateralRepaymentHistory
    >(
      "/sapi/v1/futures/loan/repay/history",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  futuresCrossCollateralWallet(
    params: IFuturesCrossCollateralWalletParameters = {}
  ) {
    return this.connector<
      IFuturesCrossCollateralWalletParameters,
      IFuturesCrossCollateralWallet
    >(
      "/sapi/v1/futures/loan/wallet",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  futuresCrossCollateralInformation(
    params: IFuturesCrossCollateralInformationParameters = {}
  ) {
    return this.connector<
      IFuturesCrossCollateralInformationParameters,
      IFuturesCrossCollateralInformation[]
    >(
      "/sapi/v1/futures/loan/configs",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCalculateRateAfterAdjustCrossCollateralLTV(
    params: IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters
  ) {
    return this.connector<
      IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters,
      IFuturesCalculateRateAfterAdjustCrossCollateralLTV
    >(
      "/sapi/v1/futures/loan/calcAdjustLevel",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  futuresGetMaxAmountAdjustCrossCollateralLTV(
    params: IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters
  ) {
    return this.connector<
      IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters,
      IFuturesGetMaxAmountAdjustCrossCollateralLTV
    >(
      "/sapi/v1/futures/loan/calcMaxAdjustAmount",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresAdjustCrossCollateralLTV(
    params: IFuturesAdjustCrossCollateralLTVParameters
  ) {
    return this.connector<
      IFuturesAdjustCrossCollateralLTVParameters,
      IFuturesAdjustCrossCollateralLTV
    >(
      "/sapi/v1/futures/loan/adjustCollateral",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  futuresAdjustCrossCollateralLTVHistory(
    params: IFuturesAdjustCrossCollateralLTVHistoryParameters = {}
  ) {
    return this.connector<
      IFuturesAdjustCrossCollateralLTVHistoryParameters,
      IFuturesAdjustCrossCollateralLTVHistory
    >(
      "/sapi/v1/futures/loan/adjustCollateral/history",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  futuresCrossCollateralLiquidationHistory(
    params: IFuturesCrossCollateralLiquidationHistoryParameters = {}
  ) {
    return this.connector<
      IFuturesCrossCollateralLiquidationHistoryParameters,
      IFuturesCrossCollateralLiquidationHistory
    >(
      "/sapi/v1/futures/loan/liquidationHistory",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }
}

export interface IFuturesNewFutureAccountTransferParameters
  extends IRequestParameters {
  asset: string;
  amount: number;
  type: EFuturesType;
}

export interface IFuturesNewFutureAccountTransfer {
  tranId: number;
}

export interface IFuturesGetFutureAccountTransactionHistoryListParameters
  extends IRequestParameters {
  asset: string;
  startTime: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface IFuturesGetFutureAccountTransactionHistoryList {
  rows: IFuturesGetFutureAccountTransactionHistoryListRow[];
  total: number;
}

export interface IFuturesGetFutureAccountTransactionHistoryListRow {
  asset: string;
  tranId: number;
  amount: string;
  type: string;
  timestamp: number;
  status: string;
}

export interface IFuturesBorrowCrossCollateralParameters
  extends IRequestParameters {
  coin: string;
  amount?: number;
  collateralCoin?: string;
  collateralAmount?: number;
}

export interface IFuturesBorrowCrossCollateral {
  coin: string;
  amount: string;
  collateralCoin: string;
  collateralAmount: string;
  time: number;
  borrowId: string;
}

export interface IFuturesCrossCollateralBorrowHistoryParameters
  extends IRequestParameters {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesCrossCollateralBorrowHistory {
  rows: IFuturesCrossCollateralBorrowHistoryRow[];
  total: number;
}

export interface IFuturesCrossCollateralBorrowHistoryRow {
  confirmedTime: number;
  coin: string;
  collateralRate: string;
  leftTotal: string;
  leftPrincipal: string;
  deadline: number;
  collateralCoin: string;
  collateralAmount: string;
  orderStatus: string;
  borrowId: string;
}

export interface IFuturesRepayCrossCollateralParameters
  extends IRequestParameters {
  coin: string;
  collateralCoin: string;
  amount: number;
}

export interface IFuturesRepayCrossCollateral {
  coin: string;
  amount: string;
  collateralCoin: string;
  repayId: string;
}

export interface IFuturesCrossCollateralRepaymentHistoryParameters
  extends IRequestParameters {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesCrossCollateralRepaymentHistory {
  rows: IFuturesCrossCollateralRepaymentHistoryRow[];
  total: number;
}

export interface IFuturesCrossCollateralRepaymentHistoryRow {
  coin: string;
  amount: string;
  collateralCoin: string;
  releasedCollateral: string;
  confirmedTime: number;
  updateTime: number;
  status: string;
  repayId: string;
}

export type IFuturesCrossCollateralWalletParameters = IRequestParameters;

export interface IFuturesCrossCollateralWallet {
  totalCrossCollateral: string;
  totalBorrowed: string;
  asset: string;
  crossCollaterals: IFuturesCrossCollateralWalletCrossCollateral[];
}

export interface IFuturesCrossCollateralWalletCrossCollateral {
  collateralCoin: string;
  locked: string;
  loanAmount: string;
  currentCollateralRate: string;
}

export interface IFuturesCrossCollateralInformationParameters
  extends IRequestParameters {
  collateralCoin?: string;
}

export interface IFuturesCrossCollateralInformation {
  collateralCoin: string;
  rate: string;
  marginCallCollateralRate: string;
  liquidationCollateralRate: string;
  currentCollateralRate: string;
}

export interface IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters
  extends IRequestParameters {
  collateralCoin: string;
  amount: number;
  direction: "ADDITIONAL" | "REDUCED";
}

export interface IFuturesCalculateRateAfterAdjustCrossCollateralLTV {
  afterCollateralRate: string;
}

export interface IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters
  extends IRequestParameters {
  collateralCoin: string;
}

export interface IFuturesGetMaxAmountAdjustCrossCollateralLTV {
  maxInAmount: string;
  maxOutAmount: string;
}

export interface IFuturesAdjustCrossCollateralLTVParameters
  extends IRequestParameters {
  collateralCoin: string;
  amount: number;
  direction: "ADDITIONAL" | "REDUCED";
}

export interface IFuturesAdjustCrossCollateralLTV {
  collateralCoin: string;
  direction: string;
  amount: string;
  time: number;
}

export interface IFuturesAdjustCrossCollateralLTVHistoryParameters
  extends IRequestParameters {
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesAdjustCrossCollateralLTVHistory {
  rows: IFuturesAdjustCrossCollateralLTVHistoryRow[];
  total: number;
}

export interface IFuturesAdjustCrossCollateralLTVHistoryRow {
  amount: string;
  collateralCoin: string;
  coin: string;
  preCollateralRate: string;
  afterCollateralRate: string;
  direction: string;
  status: string;
  adjustTime: number;
}

export interface IFuturesCrossCollateralLiquidationHistoryParameters
  extends IRequestParameters {
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesCrossCollateralLiquidationHistory {
  rows: IFuturesCrossCollateralLiquidationHistoryRow[];
  total: number;
}

export interface IFuturesCrossCollateralLiquidationHistoryRow {
  collateralAmountForLiquidation: string;
  collateralCoin: string;
  forceLiquidationStartTime: number;
  coin: string;
  restCollateralAmountAfterLiquidation: string;
  restLoanAmount: string;
  status: string;
}
