# 获取单个成员拥有权限

### Api url

/products/1/merbers/1/privileges


### request

```js
//<request>
{
  type: 'get-member-privilege',
  requestSystem: 'sdkportal',
  appId: '12',
  uid: '32323',
  accessToken: 'xxxxx',
  ts: '201505050404',
  sign: '2243rfdsfdhg'
}
```

### response with 200

```js
//<response=200>
{
    "code": "0",
    "msg": "查询用户所有子系统权限成功",
    "data": {
        "role": "ADMIN",
        "privilege": [
            {
                "subSystem": "sdkclient",
                "subSystemName": null,
                "roles": [
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    }
                ]
            },
            {
                "subSystem": "sdkportal",
                "subSystemName": null,
                "roles": [
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    }
                ]
            },
            {
                "subSystem": "takoportal",
                "subSystemName": null,
                "roles": [
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    }
                ]
            },
            {
                "subSystem": "takoapp",
                "subSystemName": null,
                "roles": [
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    }
                ]
            },
            {
                "subSystem": "datacenter",
                "subSystemName": null,
                "roles": [
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    }
                ]
            },
            {
                "subSystem": "takoproxy",
                "subSystemName": null,
                "roles": [
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0101",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0102",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    },
                    {
                        "roleId": "0201",
                        "roleName": "USER",
                        "roleDesc": "普通成员",
                        "granted": false
                    },
                    {
                        "roleId": "0202",
                        "roleName": "ADMIN",
                        "roleDesc": "管理员",
                        "granted": false
                    }
                ]
            }
        ]
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
