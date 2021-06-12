![Logo Binance](./docs/logo_binance.png)

# universal-binance-api

Original project created by @Treast (https://github.com/Treast/universal-binance-api).

An API wrapper for Binance. Build your application faster !

This fork implements correctly the `isomorphic-fetch` to be able to use this on browser or on node!

## Benefits

- Built with Typescript (autocomplete on request/response)
- Use native Promises
- Updated with the latest version

## Disclaimer

**This library is being written. Some features may be changed as updates are made. Be careful.**

**I disclaim all responsibility for any loss, injury, claim, liability, or damage of any kind resulting from, arising out of, or any way related to any errors in or omissions from this library.**

## Installation
```
	npm install -D universal-binance-api

	yarn add -D universal-binance-api
```

## Usage

### Node

```js
const { Binance } = require('universal-binance-api');

const binance = new Binance(API_KEY, TEST_SECRET_KEY, true); // 3rd parameter is testMode. Set explicitly to false if you want to use Live API.

binance
  .spotAllOrders({
    symbol: 'BTCUSDT',
  })
  .then((res) => {
    console.log(res);
  });
```

### Browser

```js
import { Binance } from 'universal-binance-api';

const binance = new Binance(API_KEY, TEST_SECRET_KEY,  true); // 3rd parameter is testMode. Set explicitly to false if you want to use Live API.

binance
.spotNewOrder({
	symbol:  'BTCUSDT',
	side: Binance.EOrderSide.BUY,
	type: Binance.EOrderType.LIMIT,
	quantity:  0.01,
	price:  1000,
	timeInForce: Binance.EOrderTimeInForce.GTC,
.then((res)  =>  {
	console.log(res);
});
```

### Functions

All functions have the same name as described on the official documentation and are prefixed by the domain: [https://binance-docs.github.io/apidocs/](https://binance-docs.github.io/apidocs/).

**Example:** _Spot > New Order_ becomes _spotNewOrder_

**Example:** _Savings > Purchase Fixed/Activity Project_ becomes _savingsPurchaseFixedActivityProject_

### Streams

Stream functions return a _Websocket_ instance from the _ws_ package. A cache is set up to prevent opening a same stream twice.

## Progress

- [x] API Structure
- [x] Wallet endpoints
- [x] Market endpoints
- [x] Spot endpoints
- [x] Margin endpoints
- [x] Saving endpoints
- [x] Futures endpoints
- [x] Streams
- [x] Mining endpoints
- [x] BLVT endpoints
- [x] BSwap endpoints
- [x] Sub-accounts endpoints
- [ ] Streams typings
- [ ] Better error handling

## License

[MIT License](LICENSE)
