# 用户注册

### Api url

/register-user


### request

```js
//<request>
{
  'type': 'register-user',
  'requestSystem': 'sdkportal',
  'ts': '2015060604040',
  'captcha': '3434',
  'loginId': '3435346456',
  'loginPwd':'343543546',
  'nickName': '343546refede'  
}


```

### response with 200

```js
//<response=200>
// 200

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
