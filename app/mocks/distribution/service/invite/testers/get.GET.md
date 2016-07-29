# 查询我的应用
## request

```js
//<request>
{
  'appid': '56936d2f7b25d56e62bbbf4b',
  'page.count': 50,
  'page.cursor':0
}
```

## response with 200

```js
//<response=200>

{
  message: 'ok',
  ret: 0,
  tag: 'tester',
  data: {
    list: [
      {
      id: '56a72e547b25d5873b0094aaxxf',
      appid: '56936d2f7b25d56e62bbbf4b',
      taskid: '',
      userid: 'xg__b6c037d1fad6a4d26ab0cc4e95522fe1f1f8c50713a962a8efedebc0ed4b64f9',
      username: '',
      email: 'Empty@Qq.com',
      createtime: 1453796948,
      firstcreated: '2016-01-26T16:29:08.086+08:00',
      lastmodified: '2016-01-26T16:29:08.086+08:00'
    },
    {
      id: '56a73a7d7b25d5873b00aefeere',
      appid: '56936d2f7b25d56e62bbbf4b',
      taskid: '',
      userid: 'tako_565ff60ea2aa4c77ea0d8229',
      username: 'chenzhiyi',
      email: 'Empty@Qq.com',
      createtime: 1453800061,
      firstcreated: '2016-01-26T17:21:01.253+08:00',
      lastmodified: '2016-01-26T17:21:01.253+08:00'
    },
    {
      id: '56a73a7d7b25d5873b00aefewewret',
      appid: '56936d2f7b25d56e62bbbf4b',
      taskid: '',
      userid: 'tako_565ff60ea2aa4c77ea0d8229',
      username: 'songlin',
      email: 'songlin@qq.com',
      createtime: 1453800061,
      firstcreated: '2016-01-26T17:21:01.253+08:00',
      lastmodified: '2016-01-26T17:21:01.253+08:00'
    }
  ],
    page: {
      cursor: 0,
      count: 50,
      total: 3,
      next: 2
    }
  }
}
```
