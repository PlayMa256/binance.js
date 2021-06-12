require("dotenv").config();

import { Binance, EInterval } from "../src/Binance";

let binance: Binance;

const SYMBOL = "BTCUSDT";

describe("test all Streams", () => {
  beforeAll(() => {
    binance = new Binance(
      process.env.TEST_API_KEY,
      process.env.TEST_SECRET_KEY,
      true
    );
  });

  it("should stream #AggregateTrade", (done) => {
    const ws = binance.stream.streamAggregateTrade({
      symbol: SYMBOL,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("e", "aggTrade");
      expect(data).toHaveProperty("s", SYMBOL);
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #Trade", (done) => {
    const ws = binance.stream.streamTrade({
      symbol: SYMBOL,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("e", "trade");
      expect(data).toHaveProperty("s", SYMBOL);
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #Candlestick", (done) => {
    const ws = binance.stream.streamCandlestick({
      symbol: SYMBOL,
      interval: EInterval.INTERVAL_1m,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("e", "kline");
      expect(data).toHaveProperty("s", SYMBOL);
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #IndividualSymbolMiniTicker", (done) => {
    const ws = binance.stream.streamIndividualSymbolMiniTicker({
      symbol: SYMBOL,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("e", "24hrMiniTicker");
      expect(data).toHaveProperty("s", SYMBOL);
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #AllMarketMiniTickers", (done) => {
    const ws = binance.stream.streamAllMarketMiniTickers();

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty("e", "24hrMiniTicker");
      expect(data[0]).toHaveProperty("s");
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #IndividualSymbolTicker", (done) => {
    const ws = binance.stream.streamIndividualSymbolTicker({
      symbol: SYMBOL,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("e", "24hrTicker");
      expect(data).toHaveProperty("s", SYMBOL);
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #AllMarketTickers", (done) => {
    const ws = binance.stream.streamAllMarketTickers();

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty("e", "24hrTicker");
      expect(data[0]).toHaveProperty("s");
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #IndividualSymbolBookTicker", (done) => {
    const ws = binance.stream.streamIndividualSymbolBookTicker({
      symbol: SYMBOL,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("s", SYMBOL);
      expect(data).toHaveProperty("b");
      expect(data).toHaveProperty("B");
      expect(data).toHaveProperty("a");
      expect(data).toHaveProperty("A");
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #AllBookTickers", (done) => {
    const ws = binance.stream.streamAllBookTickers();

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("s");
      expect(data).toHaveProperty("b");
      expect(data).toHaveProperty("B");
      expect(data).toHaveProperty("a");
      expect(data).toHaveProperty("A");
      ws.close();
    }).on("close", () => done());
  });

  it("should stream #PartialBookDepth", (done) => {
    const ws = binance.stream.streamPartialBookDepth({
      levels: 5,
      symbol: SYMBOL,
    });

    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty("lastUpdateId");
      expect(data).toHaveProperty("bids");
      expect(data).toHaveProperty("asks");
      ws.close();
    }).on("close", () => done());
  });
});
