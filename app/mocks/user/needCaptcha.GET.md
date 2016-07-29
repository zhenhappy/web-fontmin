#是否需要验证码

### Api url

/users/needCaptcha

### request

```js
//<request>
{
  loginId: 'email or phone'
}

```

### response with 200

```js
//<response=200>
{
  need: true
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
