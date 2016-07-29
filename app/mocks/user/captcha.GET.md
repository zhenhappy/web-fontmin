# 获取验证码

### Api url

/captcha

### request


```js
//<request>
```

### response with 200

```js
//<response=200>
{
  url: 'http.....'
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
