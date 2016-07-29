#激活用户信息

### Api url

/user/me/:xgappid/uploadkey

### request

```js
//<request>


```

### response with 200

```js
//<response=200>
// 返回200
{
  ret: 0,
  msg: '成功',
  data:{
    uploadkey: 'dfdg'
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
