#  用户登录

### Api url

/login-user

### request

```js
//<request>
// TODO
{"email": "1111"}

```

### response with 200

```js
//<response=200>
// 返回200
{
  code: 0,
  msg: 'ok'
  data: null
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
