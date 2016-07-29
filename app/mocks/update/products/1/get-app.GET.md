#获取渠道版本信息

### Api url

/update/products/1/get-app

### request

```js
//<request>
{
  accessToken: 'xxxxx',
  requestSystem: 'dfdf'
}

```

### response with 200

```js
//<response=200>
// 返回200
{
  code: 0,
  msg: 'succss',
  data: {
    "release_note":"",
    "xgappid": "91000215",
    "package": {
      "url":"ks3-private/app/6c2983d8-2e5d-4358-6652-8990817189ba.apk",
      "size":4442001,
      "appname":"TakoDev",
      "package":"com.ksg.tako.zhh",
      "version":"0.5.11",
      "platform": 2,
      "buildnumber":607,
      "status:": 'finished'
    }
  }
}

```

### response with 400

```js
//<response=400>
{
  code: 101,
  msg: '签名错误',
  description: '签名不对'
}

```
