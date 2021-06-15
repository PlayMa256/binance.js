
import { Binance } from "../src/Binance";

let binance: Binance;

describe("test all BSwap endpoints", () => {
  beforeAll(() => {
    binance = new Binance(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it("should GET #ListAllSwapPools", async () => {
    expect.assertions(4);

    const res = await binance.bswap.bSwapListAllSwapPools();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty("assets");
    expect(res[0]).toHaveProperty("poolId");
    expect(res[0]).toHaveProperty("poolName");
  });

  it("should GET #GetLiquidityInformationOfPool", async () => {
    expect.assertions(5);

    const res = await binance.bswap.bSwapGetLiquidityInformationOfPool();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty("liquidity");
    expect(res[0]).toHaveProperty("share");
    expect(res[0]).toHaveProperty("poolId");
    expect(res[0]).toHaveProperty("poolName");
  });

  it("should GET #GetLiquidityOperationRecord", async () => {
    expect.assertions(5);

    const res = await binance.bswap.bSwapGetLiquidityOperationRecord();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty("operation");
    expect(res[0]).toHaveProperty("operationId");
    expect(res[0]).toHaveProperty("poolId");
    expect(res[0]).toHaveProperty("poolName");
  });

  it("should GET #RequestQuote", async () => {
    expect.assertions(5);

    const res = await binance.bswap.bSwapRequestQuote({
      baseAsset: "BUSD",
      quoteAsset: "USDT",
      quoteQty: 100,
    });

    expect(res).toHaveProperty("baseAsset", "BUSD");
    expect(res).toHaveProperty("quoteAsset", "USDT");
    expect(res).toHaveProperty("price");
    expect(res).toHaveProperty("fee");
    expect(res).toHaveProperty("slippage");
  });

  it("should GET #GetSwapHistory", async () => {
    expect.assertions(1);

    const res = await binance.bswap.bSwapGetSwapHistory({
      baseAsset: "BUSD",
      quoteAsset: "USDT",
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});
