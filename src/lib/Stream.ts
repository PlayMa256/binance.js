import { EInterval, GenerateStream } from "../Binance";

export class Stream {
  stream: GenerateStream;

  constructor(stream: GenerateStream) {
    this.stream = stream;
  }

  streamAggregateTrade(params: IStreamAggregateTradeParameters) {
    return this.stream(`/ws/${params.symbol.toLowerCase()}@aggTrade`);
  }

  streamTrade(params: IStreamTradeParameters) {
    return this.stream(`/ws/${params.symbol.toLowerCase()}@trade`);
  }

  streamCandlestick(params: IStreamCandlestickParameters) {
    return this.stream(
      `/ws/${params.symbol.toLowerCase()}@kline_${params.interval}`
    );
  }

  streamIndividualSymbolMiniTicker(params: IStreamSymbolMiniTicker) {
    return this.stream(`/ws/${params.symbol.toLowerCase()}@miniTicker`);
  }

  streamAllMarketMiniTickers() {
    return this.stream(`/ws/!miniTicker@arr`);
  }

  streamIndividualSymbolTicker(params: IStreamSymbolTicker) {
    return this.stream(`/ws/${params.symbol.toLowerCase()}@ticker`);
  }

  streamAllMarketTickers() {
    return this.stream(`/ws/!ticker@arr`);
  }

  streamIndividualSymbolBookTicker(params: IStreamSymbolBookTicker) {
    return this.stream(`/ws/${params.symbol.toLowerCase()}@bookTicker`);
  }

  streamAllBookTickers() {
    return this.stream(`/ws/!bookTicker`);
  }

  streamPartialBookDepth(params: IStreamPartialBookDepth) {
    return this.stream(
      `/ws/${params.symbol.toLowerCase()}@depth${params.levels}${
        params.updateSpeed ? `@${params.updateSpeed}ms` : ""
      }`
    );
  }
}

export interface IStreamAggregateTradeParameters {
  symbol: string;
}

export type IStreamTradeParameters = IStreamAggregateTradeParameters;

export interface IStreamCandlestickParameters {
  symbol: string;
  interval: EInterval;
}

export type IStreamSymbolMiniTicker = IStreamAggregateTradeParameters;

export type IStreamSymbolTicker = IStreamSymbolMiniTicker;

export type IStreamSymbolBookTicker = IStreamSymbolTicker;

export interface IStreamPartialBookDepth {
  symbol: string;
  levels: 5 | 10 | 20;
  updateSpeed?: 100 | 1000;
}
