require("dotenv").config();

import { Binance } from "../src/Binance";

let binance: Binance;

describe("test all BLVT endpoints", () => {
  beforeAll(() => {
    binance = new Binance(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it("should GET #GetBLVTInfo", async () => {
    expect.assertions(4);

    const res = await binance.blvt.blvtGetBLVTInfo();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty("dailyManagementFee");
    expect(res[0]).toHaveProperty("fundingRate");
    expect(res[0]).toHaveProperty("realLeverage");
  });

  it("should GET #QuerySubscriptionRecord", async () => {
    expect.assertions(1);

    const res = await binance.blvt.blvtQuerySubscriptionRecord();

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it("should GET #QueryRedemptionRecord", async () => {
    expect.assertions(1);

    const res = await binance.blvt.blvtQueryRedemptionRecord({});

    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});
