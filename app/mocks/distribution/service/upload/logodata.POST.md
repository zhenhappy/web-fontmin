
# 上传游戏logo

url: uploadlogo

### request

```js
//<request>
{
  type: 2,
  filename: 'res/drawable-xxxhdpi-v4/icon.png',
  filetype: 'image/png',
  logodata: 'base64String'
}

```

### response with 200

```js
//<response=200>
// 200
{
  "message": "ok",
  "ret": 0,
  "data": "xxx(filepath)"
}
```
