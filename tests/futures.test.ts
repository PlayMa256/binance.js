
import { Binance } from "../src/Binance";

let binance: Binance;

describe("test all Futures endpoints", () => {
  beforeAll(() => {
    binance = new Binance(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it("should GET #GetFutureAccountTransactionHistoryList", async () => {
    expect.assertions(2);

    const res =
      await binance.futures.futuresGetFutureAccountTransactionHistoryList({
        asset: "BTC",
        startTime: Date.now() - 60 * 60 * 24 * 365 * 1000,
      });

    expect(res).toHaveProperty("total");
    expect(res.total).toBeGreaterThanOrEqual(0);
  });

  it("should GET #CrossCollateralBorrowHistory", async () => {
    expect.assertions(2);

    const res = await binance.futures.futuresCrossCollateralBorrowHistory();

    expect(res).toHaveProperty("total");
    expect(res.total).toBeGreaterThanOrEqual(0);
  });

  it("should GET #CrossCollateralRepaymentHistory", async () => {
    expect.assertions(2);

    const res = await binance.futures.futuresCrossCollateralRepaymentHistory();

    expect(res).toHaveProperty("total");
    expect(res.total).toBeGreaterThanOrEqual(0);
  });

  it("should GET #CrossCollateralWallet", async () => {
    expect.assertions(3);

    const res = await binance.futures.futuresCrossCollateralWallet();

    expect(res).toHaveProperty("crossCollaterals");
    expect(res).toHaveProperty("totalBorrowed");
    expect(res).toHaveProperty("totalCrossCollateral");
  });

  it("should GET #CrossCollateralInformation", async () => {
    expect.assertions(1);

    const res = await binance.futures.futuresCrossCollateralInformation();

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it("should GET #GetMaxAmountAdjustCrossCollateralLTV", async () => {
    expect.assertions(2);

    const res =
      await binance.futures.futuresGetMaxAmountAdjustCrossCollateralLTV({
        collateralCoin: "BTC",
      });

    expect(res).toHaveProperty("maxInAmount");
    expect(res).toHaveProperty("maxOutAmount");
  });

  it("should GET #AdjustCrossCollateralLTVHistory", async () => {
    expect.assertions(2);

    const res = await binance.futures.futuresAdjustCrossCollateralLTVHistory({
      collateralCoin: "BTC",
    });

    expect(res).toHaveProperty("total");
    expect(res.total).toBeGreaterThanOrEqual(0);
  });

  it("should GET #CrossCollateralLiquidationHistory", async () => {
    expect.assertions(2);

    const res = await binance.futures.futuresCrossCollateralLiquidationHistory({
      collateralCoin: "BTC",
    });

    expect(res).toHaveProperty("total");
    expect(res.total).toBeGreaterThanOrEqual(0);
  });
});
