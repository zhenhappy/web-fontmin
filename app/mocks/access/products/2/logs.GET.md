### request

```js
//<request>
{
  "code": 1000,
  "planId": "1",
  "channelId": "mi",
  "size": 20,
  "index": 1
}
```

### response with 200

```js
//<response=200>
[
  { "date": "2015-10-10", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 1001, "event": "创建发布计划", "description": "this is a description"},
  { "date": "2015-10-10", "time": "10:10:12", "userName": "", "email": "xx@xx.com", "code": 1002, "event": "修改发布计划", "description": "this is a description"},
  { "date": "2015-10-10", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 2001, "event": "开发接入SDK", "description": "this is a description"},
  { "date": "2015-10-10", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 3001, "event": "配置渠道参数", "description": "this is a description"},
  { "date": "2015-10-09", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 4002, "event": "配置充值回调", "description": "this is a description"},
  { "date": "2015-10-09", "time": "10:10:12", "userName": "", "email": "xx@xx.com", "code": 1002, "event": "创建游戏", "description": "this is a description"},
  { "date": "2015-10-08", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 5002, "event": "图标工具", "description": "this is a description"},
  { "date": "2015-10-08", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 6002, "event": "创建游戏", "description": "this is a description"},
  { "date": "2015-10-07", "time": "10:10:12", "userName": "nick name", "email": "xx@xx.com", "code": 6001, "event": "创建游戏", "description": "this is a description"}
]
```
