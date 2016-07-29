### request

```js
//<request>
{
  "id": 1,
  "name": "变身吧主公",
  "orientation": "HORIZONTAL",
  "signatureFileName": "8fdna02nf309fdksafnabr3320fdnakf",
  "interfaceType": "COCOS2DX",
  "icon": "multipartFile",
  "ios": false,
  "android": true,
  "type": "RPG,ACT"
}

```


### response with 200

```js
//<response=200>
[
  {
    "id": 1,
    "platform": "ANDROID",
    "roles": [
      "OP"
    ],
    "name": "西游伏魔",
    "icon": "/img/xyfm.jpg",
    "type": "RPG,SLG"
  },
  {
    "id": 2,
    "platform": "IOS",
    "roles": [
      "ADMIN",
      "DEV"
    ],
    "name": "变身吧主公",
    "icon": "/img/bsbzg.jpg",
    "type": "ACT"
  }
]
```
