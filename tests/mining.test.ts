require("dotenv").config();

import { Binance } from "../src/Binance";

const USERNAME = "treast";

let binance: Binance;
let cache: Record<string, any> = [];

describe("test all Mining endpoints", () => {
  beforeAll(() => {
    binance = new Binance(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it("should GET #AcquiringAlgorithm", async () => {
    expect.assertions(3);

    const res = await binance.mining.miningAcquiringAlgorithm();

    expect(res).toHaveProperty("data");
    expect(res).toHaveProperty("code", 0);
    expect(res.data.length).toBeGreaterThanOrEqual(0);

    cache["algoName"] = res.data[0].algoName;
  });

  it("should GET #AcquiringCoinName", async () => {
    expect.assertions(3);

    const res = await binance.mining.miningAcquiringCoinName();

    expect(res).toHaveProperty("data");
    expect(res).toHaveProperty("code", 0);
    expect(res.data.length).toBeGreaterThanOrEqual(0);
  });

  it("should GET #miningRequestMinerList", async () => {
    expect.assertions(2);

    const res = await binance.mining.miningRequestMinerList({
      algo: cache["algoName"],
      userName: USERNAME,
    });

    expect(res).toHaveProperty("data");
    expect(res).toHaveProperty("code", 0);
  });

  it("should GET #RevenueList", async () => {
    expect.assertions(2);

    const res = await binance.mining.miningRevenueList({
      algo: cache["algoName"],
      userName: USERNAME,
    });

    expect(res).toHaveProperty("data");
    expect(res).toHaveProperty("code", 0);
  });

  it("should GET #StatisticList", async () => {
    expect.assertions(4);

    const res = await binance.mining.miningStatisticList({
      algo: cache["algoName"],
      userName: USERNAME,
    });

    expect(res).toHaveProperty("data");
    expect(res).toHaveProperty("code", 0);
    expect(res.data).toHaveProperty("dayHashRate");
    expect(res.data).toHaveProperty("profitToday");
  });

  it("should GET #AccountList", async () => {
    expect.assertions(2);

    const res = await binance.mining.miningAccountList({
      algo: cache["algoName"],
      userName: USERNAME,
    });

    delete cache["algoName"];

    expect(res).toHaveProperty("data");
    expect(res).toHaveProperty("code", 0);
  });
});
