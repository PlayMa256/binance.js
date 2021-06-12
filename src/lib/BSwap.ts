import {
  Binance,
  Connector,
  ERequestMethod,
  ESecurityType,
  IRequestParameters,
  IResponseEmpty,
} from "../Binance";

export class BSwap {
  connector: Connector;

  constructor(connector: Connector) {
    this.connector = connector;
  }
  bSwapListAllSwapPools() {
    return this.connector<IResponseEmpty, IBSwapListAllSwapPools[]>(
      "/sapi/v1/bswap/pools",
      {},
      ERequestMethod.GET,
      ESecurityType.MARKET_DATA,
      true
    );
  }

  bSwapGetLiquidityInformationOfPool(
    params: IBSwapGetLiquidityInformationOfPoolParameters = {}
  ) {
    return this.connector<
      IBSwapGetLiquidityInformationOfPoolParameters,
      IBSwapGetLiquidityInformationOfPool[]
    >(
      "/sapi/v1/bswap/liquidity",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  bSwapAddLiquIBSwapAddLiquidity(params: IBSwapAddLiquidityParameters) {
    return this.connector<IBSwapAddLiquidityParameters, IBSwapAddLiquidity>(
      "/sapi/v1/bswap/liquidityAdd",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  bSwapRemoveLiquidity(params: IBSwapRemoveLiquidityParameters) {
    return this.connector<
      IBSwapRemoveLiquidityParameters,
      IBSwapRemoveLiquidity
    >(
      "/sapi/v1/bswap/liquidityRemove",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  bSwapGetLiquidityOperationRecord(
    params: IBSwapGetLiquidityOperationRecordParameters = {}
  ) {
    return this.connector<
      IBSwapGetLiquidityOperationRecordParameters,
      IBSwapGetLiquidityOperationRecord[]
    >(
      "/sapi/v1/bswap/liquidityOps",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  bSwapRequestQuote(params: IBSwapRequestQuoteParameters) {
    return this.connector<IBSwapRequestQuoteParameters, IBSwapRequestQuote>(
      "/sapi/v1/bswap/quote",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  bSwapSwap(params: IBSwapSwapParameters) {
    return this.connector<IBSwapSwapParameters, IBSwapSwap>(
      "/sapi/v1/bswap/swap",
      params,
      ERequestMethod.POST,
      ESecurityType.TRADE
    );
  }

  bSwapGetSwapHistory(params: IBSwapGetSwapHistoryParameters = {}) {
    return this.connector<
      IBSwapGetSwapHistoryParameters,
      IBSwapGetSwapHistory[]
    >(
      "/sapi/v1/bswap/swap",
      params,
      ERequestMethod.GET,
      ESecurityType.USER_DATA
    );
  }
}

export interface IBSwapListAllSwapPools {
  poolId: number;
  poolName: number;
  assets: string[];
}

export interface IBSwapGetLiquidityInformationOfPoolParameters
  extends IRequestParameters {
  poolId?: number;
}

export interface IBSwapGetLiquidityInformationOfPool {
  poolId: number;
  poolName: string;
  updateTime: number;
  liquidity: Record<string, number>;
  share: IBSwapGetLiquidityInformationOfPoolShare;
}

export interface IBSwapGetLiquidityInformationOfPoolShare {
  shareAmount: number;
  sharePercentage: number;
  asset: Record<string, number>;
}

export interface IBSwapAddLiquidityParameters extends IRequestParameters {
  poolId: number;
  asset: string;
  quantity: number;
}

export interface IBSwapAddLiquidity {
  operationId: number;
}

export interface IBSwapRemoveLiquidityParameters extends IRequestParameters {
  poolId: number;
  type: string;
  asset: any[];
  shareAmount: number;
}

export interface IBSwapRemoveLiquidity {
  operationId: number;
}

export interface IBSwapGetLiquidityOperationRecordParameters
  extends IRequestParameters {
  operationId?: number;
  poolId?: number;
  operation?: "ADD" | "REMOVE";
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IBSwapGetLiquidityOperationRecord {
  operationId: number;
  poolId: number;
  poolName: string;
  operation: string;
  status: number;
  updateTime: number;
  shareAmount: string;
}

export interface IBSwapRequestQuoteParameters extends IRequestParameters {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
}

export interface IBSwapRequestQuote {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: string;
  baseQty: string;
  price: string;
  slippage: string;
  fee: string;
}

export interface IBSwapSwapParameters extends IRequestParameters {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
}

export interface IBSwapSwap {
  swapId: number;
}

export interface IBSwapGetSwapHistoryParameters extends IRequestParameters {
  swapId?: number;
  startTime?: number;
  endTime?: number;
  status?: 0 | 1 | 2;
  quoteAsset?: string;
  baseAsset?: string;
  limit?: number;
}

export interface IBSwapGetSwapHistory {
  swapId: number;
  swapTime: number;
  status: number;
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
  baseQty: number;
  price: number;
  fee: number;
}
