# 获取游戏信息

### request

```js
//<request>
{
  type: 'get-user',
  requestSystem: 'sdkportal',
  ts: '20150723150028',
  accessToken: 'xxxx',
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
      appId: '1',
      appName: '西游降魔',
      appDesc: 'xxxxx',
      appType: 'RPG,CAG',
      iconUrl: 'https://striker.teambition.net/thumbnail/110b052ab868643d907036cd3ae9e670bfb6/w/200/h/200'
    },
    {
      appId: '2',
      appName: '舰队',
      appDesc: 'xxxxx',
      appType: 'xxx',
      iconUrl: 'http://pp.myapp.com/ma_icon/0/icon_12197532_1448063644/96'
    },
    {
      appId: '3',
      appName: '神骑士之歌',
      appDesc: 'xxxxx',
      appType: 'xxx',
      iconUrl: 'http://pp.myapp.com/ma_icon/0/icon_12206845_1449800029/256'
    },
    {
      appId: '12',
      appName: '神骑士之歌',
      appDesc: 'xxxxx',
      appType: 'xxx',
      iconUrl: 'http://pp.myapp.com/ma_icon/0/icon_12206845_1449800029/256'
    },
    {
      appId: '122',
      appName: '神骑士之歌',
      appDesc: 'xxxxx',
      appType: 'xxx',
      iconUrl: 'http://pp.myapp.com/ma_icon/0/icon_12206845_1449800029/256'
    },
    {
      appId: '2121',
      appName: '神骑士之歌',
      appDesc: 'xxxxx',
      appType: 'xxx',
      iconUrl: 'http://pp.myapp.com/ma_icon/0/icon_12206845_1449800029/256'
    },
    {
      appId: '2322',
      appName: '神骑士之歌',
      appDesc: 'xxxxx',
      appType: 'xxx',
      iconUrl: 'http://pp.myapp.com/ma_icon/0/icon_12206845_1449800029/256'
    }
  ]
}


```
