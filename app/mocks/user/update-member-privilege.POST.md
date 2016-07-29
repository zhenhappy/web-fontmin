# 修改用户权限

### Api url

user/update-member-privilege
修改用户权限


### request

```js
//<request>
{
  type: 'update-member-privilege',
  requestSystem: 'sdkportal',
  appId: '12',
  uid: '32323',
  accessToken: 'xxxxx',
  ts: '201505050404',
  sign: '2243rfdsfdhg',
  privilegesInfo: {
    role: 'USER',
    privilege: [
      {
        subSystem: 'ACESS',
        subSystemName: '游戏接入',
        roles: [
          {
            roleId: 1000,
            roleName: 'setChannel',
            roleDesc: '配置渠道',
            granted: true
          },
          {
            roleId: 2000,
            roleName: 'updatePlan',
            roleDesc: '修改发布计划',
            granted: false
          },
          {
            roleId: 2001,
            roleName: 'updatePlan',
            roleDesc: '删除发布计划',
            granted: false
          },
          {
            roleId: 3000,
            roleName: 'updatePlan',
            roleDesc: '删除图标资源',
            granted: true
          }
        ]
      },
      {
        subSystem: 'STATS',
        subSystemName: '数据统计',
        roles: [
          {
            roleId: 1000,
            roleName: 'updatePlan',
            roleDesc: '查看活跃用户',
            granted: true
          },
          {
            roleId: 2000,
            roleName: 'updatePlan',
            roleDesc: '查看设备留存',
            granted: true
          }
        ]
      },
      {
        subSystem: 'TAKO',
        subSystemName: '游戏内测',
        roles: [
          {
            roleId: 1000,
            roleName: 'updatePlan',
            roleDesc: 'xxxx',
            granted: true
          }
        ]
      }
    ]
  }
}

```

### response with 200

```js
//<response=200>


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
