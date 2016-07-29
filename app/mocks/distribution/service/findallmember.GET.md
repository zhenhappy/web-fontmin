# config

## request

```js
//<request>
{
  appid: '55dda90ee13823574d000060',
  'page.count': 20,
  'page.cursor': 0
}
```

## response with 200

```js
//<response=200>
{
  message: 'ok',
  ret: 0,
  tag: 'members',
  data: {
    list: [
      {
        id: '55dda90ee13823574d000062',
        appid: '55dda90ee13823574d000060',
        usertype: 0,
        userid: '55b61943e138236fc1000001',
        username: 'jouje',
        nickname: 'brian',
        addtime: 1440590094
      },
      {
        id: '55e56466e138232018000012',
        appid: '55dda90ee13823574d000060',
        usertype: 1,
        userid: '55e560aee138232018000008',
        username: 'xuman_ling',
        nickname: 'xuman_ling',
        addtime: 1441096806
      }
    ],
    page: {
      cursor: 0,
      count: 20,
      total: 2,
      next: 2
    }
  }
}
```
