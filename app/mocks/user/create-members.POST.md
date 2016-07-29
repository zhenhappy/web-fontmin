### request

```js
//<request>
{
  type: 'create-members',
  requestSystem: 'sdkportal',
  appId: '12',
  accessToken: 'xxxxx',
  ts: '201505050404',

  sign: '2243rfdsfdhg'
  members: [
    {
      email: '3435435@qq.com',
      role: 'MEMBER'
    },
    {
      email: '3435435@qq.com',
      role: 'MEMBER'
    },
    {
      email: '3435435@qq.com',
      role: 'MEMBER'
    },
    {
      email: '3435435@qq.com',
      role: 'ADMIN'
    }
  ]
}

```

### response with 200

```js
//<response=200>
// 返回200
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
