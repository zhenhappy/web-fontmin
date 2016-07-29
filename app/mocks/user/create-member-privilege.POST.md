# 给成员添加权限


### request

```js
//<request>
{
  type: 'get-members',
  requestSystem: 'sdkportal',
  accessToken: 'xxxxx',
  ts: '201505050404',
  appId: '12',
  uid: '32323',
  sign: '2243rfdsfdhg'
}

```

### response with 200

```js
//<response=200>
[
  {
    serviceType: 'ACESS',
    alias: '游戏接入',
    privileges: [
      {
        code: 1000,
        alias: '配置渠道',
        granted: false
      },
      {
        code: 2000,
        alias: '修改发布计划',
        granted: true
      },
      {
        code: 2001,
        alias: '删除发布计划',
        granted: false
      },
      {
        code: 3000,
        alias: '删除图标资源',
        granted: true
      }
    ]
  },
  {
    serviceType: 'STATS',
    alias: '数据统计',
    privileges: [
      {
        code: 1000,
        alias: '查看活跃用户',
        granted: true
      },
      {
        code: 2000,
        alias: '查看设备留存',
        granted: true
      }
    ]
  },
  {
    serviceType: 'TAKO',
    alias: '游戏内测',
    privileges: [
      {
        code: 1000,
        alias: 'xxxx',
        granted: true
      }
    ]
  }
]

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
