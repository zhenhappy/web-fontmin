#激活用户信息

### Api url

/users/activate-user

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
  msg: '成功'
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
