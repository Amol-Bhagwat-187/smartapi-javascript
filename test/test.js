let { SmartAPI, WebSocketV2 } = require("../lib");
var chai = require("chai");
var expect = chai.expect;

let smart_api = new SmartAPI({
  api_key: "VG2s34Cq",
  // OPTIONAL : If user has valid access token and refresh token then it can be directly passed to the constructor
  access_token:
    "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkE1MjE2MzEzNCIsInJvbGVzIjowLCJ1c2VydHlwZSI6IlVTRVIiLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp6ZFdJaU9pSkJOVEl4TmpNeE16UWlMQ0psZUhBaU9qRTJPVGMzT0Rrd05EZ3NJbWxoZENJNk1UWTVOelk1TWpjMk5Td2lhblJwSWpvaU5qRmpORFpoTWpVdE9EUTRPQzAwWmprNExXRTBNREl0TmpsalpHSmpOalEyTkdRNElpd2liMjF1WlcxaGJtRm5aWEpwWkNJNk9Dd2ljMjkxY21ObGFXUWlPaUl6SWl3aWRYTmxjbDkwZVhCbElqb2lZMnhwWlc1MElpd2lkRzlyWlc1ZmRIbHdaU0k2SW5SeVlXUmxYMkZqWTJWemMxOTBiMnRsYmlJc0ltZHRYMmxrSWpvNExDSnpiM1Z5WTJVaU9pSXpJbjAubmJNZW9GMGNtNEQ4aW1VM2F1X0dqak0yYVltbnptdFR5NzRaMnpZbG4tTVRMa0E2MnFfdHQzSGt4S1RzVTFaaDkzT19UX3lFUUM0bEpTaE1sQVBlX0EiLCJBUEktS0VZIjoiVkcyczM0Q3EiLCJpYXQiOjE2OTc2OTI4MjUsImV4cCI6MTY5Nzc4OTA0OH0.iuJJ_QMQ_BMwKAA4YnbqI_L18LctwY95kp2_NbdBYfTGByfGdOo3XsHO0vfvQqXS76Y3n8stqrIip_Q4Om56cQ",
  refresh_token:
    "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlJFRlJFU0gtVE9LRU4iLCJSRUZSRVNILVRPS0VOIjoiZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lKQk5USXhOak14TXpRaUxDSmxlSEFpT2pFMk9UYzNNell3TWpVc0ltbGhkQ0k2TVRZNU56WTVNamMyTlN3aWFuUnBJam9pWlRjeFpHTXlaR1l0T1RSbE1pMDBaR05sTFdFek5HRXRZakJrWVRnNU56WTFZVFZpSWl3aWRHOXJaVzRpT2lKU1JVWlNSVk5JTFZSUFMwVk9JaXdpZFhObGNsOTBlWEJsSWpvaVkyeHBaVzUwSWl3aWRHOXJaVzVmZEhsd1pTSTZJblJ5WVdSbFgzSmxabkpsYzJoZmRHOXJaVzRpZlEucURXWlRqcWd6QlM1S3BOTVlsQ054ZnZveFZieGgxRmR6OFlPRkszTG5FcU9zVlAydWR1OFlfbDFJbjc5ZXU0Y3RJeXJBSVNrU0tNeXZya2szZG9nclEiLCJpYXQiOjE2OTc2OTI4MjV9.EoWC5AssEE1DJHES7tZST_BzNxgdfvB5tMxg_jH3T3tPYij-ypjX2qTvP6qzwzmdmKMVzGPRUT5QtHzqHd84Bg",
});

// // generateSession api
// describe("generateSession", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.generateSession("A52163134", "4321", "378315");
//     if (res.status) {
//       const { jwtToken, refreshToken } = res.data;

//       // Directly assign tokens if accessible
//       smart_api.access_token = jwtToken;
//       smart_api.refresh_token = refreshToken;
//     }
//   });

//   it("Generate session successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Generate session failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data", null);
//     }
//   });
// });

// // getProfile api
// describe("getProfile", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getProfile();
//   });

//   it("Get Profile successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get Profile failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // getRMS 
// describe("getRMS", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getRMS();
//   });

//   it("Get RMS successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get RMS failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // placeOrder api
// describe("placeOrder", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.placeOrder({
//       variety: "NORMAL",
//       tradingsymbol: "SBIN-EQ",
//       symboltoken: "3045",
//       transactiontype: "BUY",
//       exchange: "NSE",
//       ordertype: "LIMIT",
//       producttype: "INTRADAY",
//       duration: "DAY",
//       price: "19500",
//       squareoff: "0",
//       stoploss: "0",
//       quantity: "1",
//     });
//   });

//   it("Place Order successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Place order failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data", null);
//     }
//   });
// });

// // modifyOrder api
// describe("modifyOrder", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.modifyOrder({
//       orderid: "231016000616769",
//       variety: "NORMAL",
//       tradingsymbol: "SBIN-EQ",
//       symboltoken: "3045",
//       transactiontype: "BUY",
//       exchange: "NSE",
//       ordertype: "LIMIT",
//       producttype: "INTRADAY",
//       duration: "DAY",
//       price: "19500",
//       squareoff: "0",
//       stoploss: "0",
//       quantity: "2",
//     });
//   });

//   it("Modify Order successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Modify order failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data", null);
//     }
//   });
// });

// // cancelOrder api
// describe("cancelOrder", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.cancelOrder({
//       variety: "NORMAL",
//       orderid: "231016000616769",
//     });
//   });

//   it("Cancel Order successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Cancel order failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data", null);
//     }
//   });
// });

// // getOrderBook api
// describe("getOrderBook", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getOrderBook();
//   });

//   it("Get order book successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get order book failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data", null);
//     }
//   });
// });

// // getTradeBook api
// describe("getTradeBook", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getTradeBook();
//   });

//   it("Get trade book successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get trade book failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // getHolding api
// describe("getHolding", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getHolding();
//   });

//   it("Get holding successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get holding failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // getPosition api
// describe("getPosition", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getPosition();
//   });

//   it("Get position successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get position failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // convertPosition api
// describe("convertPosition", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.convertPosition({
//       exchange: "NSE",
//       oldproducttype: "DELIVERY",
//       newproducttype: "MARGIN",
//       tradingsymbol: "SBIN-EQ",
//       transactiontype: "BUY",
//       quantity: 1,
//       type: "DAY",
//     });
//   });

//   it("Convert position successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Convert position failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });


// // createRule api
// describe("createRule", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.createRule({
//       tradingsymbol: "SBIN-EQ",
//       symboltoken: "3045",
//       exchange: "NSE",
//       producttype: "MARGIN",
//       transactiontype: "BUY",
//       price: 100000,
//       qty: 10,
//       disclosedqty: 10,
//       triggerprice: 200000,
//       timeperiod: 365,
//     });
//   });

//   it("Create rule successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Create rule failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // modifyRule api
// describe("modifyRule", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.modifyRule({
//       id: 1440101,
//       symboltoken: "3045",
//       exchange: "NSE",
//       qty: 10,
//     });
//   });

//   it("Modify rule successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Modify rule failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // cancelRule api
// describe("cancelRule", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.cancelRule({
//       id: 1440101,
//       symboltoken: "3045",
//       exchange: "NSE",
//     });
//   });

//   it("Cancel rule successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Cancel rule failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // ruleDetails api
// describe("ruleDetails", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.ruleDetails({
//       id: 1440395,
//     });
//   });

//   it("Rule details successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Rule details failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // ruleList api
// describe("ruleList", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.ruleList({
//       status: ["NEW", "CANCELLED"],
//       page: 1,
//       count: 10,
//     });
//   });

//   it("Rule list successful", function () {
//     if (res.status === true) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Rule list failed", function () {
//     if (res.status === 500) {
//       expect(res).to.have.property("status", 500);
//       expect(res).to.have.property("message");
//     }
//   });
// });

// // getCandleData api
// describe("getCandleData", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getCandleData({
//       exchange: "NSE",
//       symboltoken: "3045",
//       interval: "ONE_MINUTE",
//       fromdate: "2021-02-10 09:00",
//       todate: "2021-02-10 09:20",
//     });
//   });

//   it("Get candle data successful", function () {
//     if (res.status === true) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get candle data failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // marketData api
// describe("marketData", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.marketData({
//       mode: "FULL",
//       exchangeTokens: {
//         NSE: ["3045"],
//       },
//     });
//   });

//   it("Market data successful", function () {
//     if (res.status === true) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Market data failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // searchScrip api
// describe("searchScrip", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.searchScrip({
//       exchange: "BSE",
//       searchscrip: "Titan",
//     });
//   });

//   it("Search scrip successful", function () {
//     if (res) {
//       expect(res)
//     }
//   });

//   it("Search scrip failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // getAllHolding api
// describe("getAllHolding", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.getAllHolding();
//   });

//   it("Get all holding successful", function () {
//     if (res.status === true) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Get all holding failed", function () {
//     if (res.success === false) {
//       expect(res).to.have.property("success", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorCode");
//       expect(res).to.have.property("data");
//     }
//   });
// });

// // logout api
// describe("logout", function () {
//   let res;
//   before(async function () {
//     res = await smart_api.logout();
//   });

//   it("Logout successful", function () {
//     if (res.status) {
//       expect(res).to.have.property("status", true);
//       expect(res).to.have.property("message", "SUCCESS");
//       expect(res).to.have.property("errorcode", "");
//       expect(res).to.have.property("data");
//     }
//   });

//   it("Logout failed", function () {
//     if (res.status === false) {
//       expect(res).to.have.property("status", false);
//       expect(res).to.have.property("message");
//       expect(res).to.have.property("errorcode");
//       expect(res).to.have.property("data");
//     }
//   });
// });


// // WebSocketV2
// describe("WebSocketV2", function () {
//   let web_socket;
//   let websocketConnection = false;

//   before(function () {
//     web_socket = new WebSocketV2({
//       jwttoken:
//         "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkE1MjE2MzEzNCIsInJvbGVzIjowLCJ1c2VydHlwZSI6IlVTRVIiLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp6ZFdJaU9pSkJOVEl4TmpNeE16UWlMQ0psZUhBaU9qRTJPVGMzT0Rrd05EZ3NJbWxoZENJNk1UWTVOelk1TWpjMk5Td2lhblJwSWpvaU5qRmpORFpoTWpVdE9EUTRPQzAwWmprNExXRTBNREl0TmpsalpHSmpOalEyTkdRNElpd2liMjF1WlcxaGJtRm5aWEpwWkNJNk9Dd2ljMjkxY21ObGFXUWlPaUl6SWl3aWRYTmxjbDkwZVhCbElqb2lZMnhwWlc1MElpd2lkRzlyWlc1ZmRIbHdaU0k2SW5SeVlXUmxYMkZqWTJWemMxOTBiMnRsYmlJc0ltZHRYMmxrSWpvNExDSnpiM1Z5WTJVaU9pSXpJbjAubmJNZW9GMGNtNEQ4aW1VM2F1X0dqak0yYVltbnptdFR5NzRaMnpZbG4tTVRMa0E2MnFfdHQzSGt4S1RzVTFaaDkzT19UX3lFUUM0bEpTaE1sQVBlX0EiLCJBUEktS0VZIjoiVkcyczM0Q3EiLCJpYXQiOjE2OTc2OTI4MjUsImV4cCI6MTY5Nzc4OTA0OH0.iuJJ_QMQ_BMwKAA4YnbqI_L18LctwY95kp2_NbdBYfTGByfGdOo3XsHO0vfvQqXS76Y3n8stqrIip_Q4Om56cQ",
//       apikey: "VG2s34Cq",
//       clientcode: "A52163134",
//       feedtype:
//         "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkE1MjE2MzEzNCIsImlhdCI6MTY5NzY5MjgyNSwiZXhwIjoxNjk3Nzc5MjI1fQ.ZGmie7MDMi8QTUcA3IdUZ5qb-4ZAO3KM7FWg3AUAF8h0nj68X8UxrxtY-gqXtsicKjTXTizpqGYA6bAvsD4ioQ",
//     });
//   });
   
//   it("Websocket connection successful", function () {
//     return web_socket.connect().then((connected) => {
//       if (connected) {
//         websocketConnection = true;
//         expect(connected).to.equal(true);
//         setTimeout(() => {
//         	web_socket.close();
//         }, 3000);
//       }
//     });
//   });

//   it("Websocket connection failed", function () {
//       if(websocketConnection === false){
//         console.log('Connection failed')
//       }
//   });

// });


