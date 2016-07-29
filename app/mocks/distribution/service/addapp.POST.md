# 创建游戏


### request

```js
//<request>
{
  "ispublic": true,
  "userid": "55af48d21048ca2b88000001",
  "token": "36176ee2c01d4bab4d2580ec44814bf1",
  "package": {
    "appname": "XgsdkDemo",
    "bundleid": "",
    "package": "org.cocos2dx.hellocpp",
    "url": "/static/app/android/2ac8cd83-4191-4e3f-6ce2-cdc143db7281.apk",
    "logo": "/static/app/logo/bb023958-4de1-4196-60c8-c9323cb6ac9f.jpg",
    "version": "1.0",
    "platform": 2,
    "size": 1024,
    "buildnumber": 1
  },
  "release_note": "test"
}

```

### response with 200

```js
//<response=200>
// 200
{
  "message": "ok",
  "ret": 0,
  "data": {
    "appid": "55b1a886e13823361e00000a",
    "createtime": 1437706409,
    "status": 0,
    "prioroty": 0,
    "package": {
      "url": "/static/app/android/2ac8cd83-4191-4e3f-6ce2-cdc143db7281.apk",
      "platform": 2,
      "logo": "/static/app/logo/bb023958-4de1-4196-60c8-c9323cb6ac9f.jpg",
      "appname": "XgsdkDemo",
      "package": "org.cocos2dx.hellocpp",
      "version": "1.0"
    },
    "release_note": "test",
    "userid": "55ae0785e13823072b000001",
    "AdditionalNote": null,
    "id": "55b1a8a9e13823361e00000e"
  }
}
```
