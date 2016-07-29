# 获取游戏信息

### request

```js
//<request>
{
  type: 'query-customer-roles',
  requestSystem: 'sdkportal',
  ts: '20150723150028',
  accessToken: 'xxxx',
  appId: '31313',
  sign: 'xxxx'
}

```

### response with 200

```js

//<response=200>
{
  code: 0,
  msg: 'xxx',
  data: [
    {
      roleId: '1090',
      subSystem: 'ACCESS',
      roleName: 'ADMIN',
      // roleName: 'USER',
      roleDesc: 'xxxx'
    },
    {
      roleId: '1090',
      subSystem: 'STATS',
      roleName: 'USER',
      roleDesc: 'xxxx'
    },
    {
      roleId: '1091',
      subSystem: 'SHARE',
      roleName: 'ADMIN',
      roleDesc: 'xxxx'
    },
    {
      roleId: '1092',
      subSystem: 'UPDATE',
      roleName: 'ADMIN',
      roleDesc: 'xxxx'
    },
    {
      roleId: '1093',
      subSystem: 'MESSAGE',
      roleName: 'ADMIN',
      roleDesc: 'xxxx'
    },
    {
      roleId: '1094',
      subSystem: 'TAKO',
      roleName: 'ADMIN',
      roleDesc: 'xxxx'
    }
  ]
}

```
