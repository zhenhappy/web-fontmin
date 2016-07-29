### request

```js
//<request>
{
  "index": 1,
  "size": 40,

  "channelId": "mi",
  "status": 1,
  "beginTime": "2015-10-10 10:10:00",
  "endTime": "2015-10-10 10:10:00",
  "tradeNos": ["111", "222", "333"],
  "roleIds": ["111", "222", "333"]
}

```


### response with 200

```js
//<response=200>
{
  "total": 9,
  "data": [
    { "tradeNo": "81000000001810000000018100000000181000000001810000000018100000000181000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "zhangqu_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "0"},
    { "tradeNo": "81000000001", "uid": "", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "360_IOS", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "0"},
    { "tradeNo": "81000000001", "uid": null, "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "360_IOS", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "-4"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "360_IOS", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "-5"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "91_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "-6"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "91_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "-7"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "91_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "-8"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "91_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": null,"stateCode": "-9"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "91_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "-98"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "zhangqu_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "2"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "zhangqu_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": "1234354365354365475687689","stateCode": "3"},
    { "tradeNo": "81000000001", "uid": "67919424", "zoneId": null, "serverId": "11", "roleId": null, "roleName": null, "roleLevel": null, "channelId": "zhangqu_ANDROID", "productId": "payment017", "productName": "屠龙宝刀", "productQuantity": 1, "productUnitPrice": 100, "totalAmount": 100, "paidAmount": 100, "createTime": "2015-08-28 16:18:14.0", "paidTime": "2015-08-28 16:18:14.0", "finishTime": "2015-08-28 16:18:14.0", "status": 5, "channelTradeNo": null, "xgAppId": "2008", "deviceId": "imei_865164024915629", "gameTradeNo": null,"stateCode": "4"}
  ]
}

```
