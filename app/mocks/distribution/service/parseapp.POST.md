# 创建游戏


### request

```js
//<request>
{
  arsc: "xxxxxx"
  manifest: "xxx"
  platform: 2
}

```

### response with 200

```js
//<response=200>
// 200
{
  message: 'ok',
  ret: 0,
  tag: 'package',
  data: {
    filename: '',
    url: '',
    lanurl: '',
    platform: 1,
    logo: 'AppIcon60x60',
    appname: 'TakoPOC2',
    bundleid: 'com.ksg.tako.poc2',
    bundlename: 'TakoPOC2',
    'package': 'com.ksg.tako.poc2',
    version: '1.2',
    buildnumber: 222,
    min_osverion: '9.0',
    executable: 'TakoPOC2',
    devicefamily: ['iPhone', 'iPod Touch']
  }
}
```
