# Web-Fontmin

Web Fontmin 可以让你可以在线提取字体，基于 Fontmin 构建。

### 在线体验

[fontmin.zhenhappy.com](https://fontmin.zhenhappy.com)

### Screenshot

![page-1](https://raw.githubusercontent.com/zhenhappy/web-fontmin/master/public/img/page-1.png)
![page-2](https://raw.githubusercontent.com/zhenhappy/web-fontmin/master/public/img/page-2.png)


### Dev

如果你想参与 Web Fontmin 的开发，可按照以下步骤配置开发环境。

```bash
$ npm install
$ bower install
$ gulp
```

### Prod

如果想要发布到线上使用，可按照以下步骤配置生产环境。

```bash
$ npm install --production --registry=https://registry.npm.taobao.org
$ NODE_ENV=production node ./bin/www
```

### Docker Build

如果想要通过编译Docker镜像使用, 可按照以下步骤配置Docker编译环境。

```bash
$ docker image build -t web-fontmin .
$ docker container run --restart=always -d -p [port]:3000 -it web-fontmin
```

### Docker Pull

如果想要直接拉取Docker镜像使用, 可按照以下步骤配置Docker生产环境。

```bash
$ docker pull zhenhappy/web-fontmin
$ docker container run --restart=always -d -p [port]:3000 -it zhenhappy/web-fontmin
```

### License

  [MIT](LICENSE)
