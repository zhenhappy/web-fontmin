# 修改用户手机

### Api url

### request

```js
//<request>
{
  type: 'query-customer-infos',
  uids: '2121,42434,34324l',
  requestSystem: 'sdkportal',
  ts: '20150723150028',
  sign: 'xxxx'
}

```

### response with 200

```js
//<response=200>
// 返回200
[
  {
    accessToken: 'xxxxx',
    nickName: 'hello',
    email: 'hello@gmail.com',
    mobile: '15723345890',
    qq: '3434225542',
    sina: 'hello',
    sexSelect: 2,
    birthType: 0,
    birthday: 2324242,
    bloodSelect: 1,
    senseSelect: 1,
    loveDay: 121212,
    addrCountry: '中国',
    addrState: '广东',
    addrCity: '珠海',
    birthCountry: '中国',
    birthState: '广东',
    birthCity: '广州',
    career: 'coding',
    company: 'seasun',
    workCountry: '中国',
    workState: '广东',
    workCity: '深圳',
    workAddress: 'xxxx',
    headImgUrl: 'https://striker.teambition.net/thumbnail/110b052ab868643d907036cd3ae9e670bfb6/w/200/h/200'
  },
  {
    accessToken: 'xxxxx',
    nickName: 'hello',
    email: 'hello@gmail.com',
    mobile: '15723345890',
    qq: '3434225542',
    sina: 'hello',
    sexSelect: 2,
    birthType: 0,
    birthday: 2324242,
    bloodSelect: 1,
    senseSelect: 1,
    loveDay: 121212,
    addrCountry: '中国',
    addrState: '广东',
    addrCity: '珠海',
    birthCountry: '中国',
    birthState: '广东',
    birthCity: '广州',
    career: 'coding',
    company: 'seasun',
    workCountry: '中国',
    workState: '广东',
    workCity: '深圳',
    workAddress: 'xxxx',
    headImgUrl: 'https://striker.teambition.net/thumbnail/110b052ab868643d907036cd3ae9e670bfb6/w/200/h/200'
  }
]

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
