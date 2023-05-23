# WwiseKit

WwiseKit 是一套开发中的wwise工具合集

使用typescript开发，支持nodejs环境

### Features

- 提供了一个工具，可以从wwise的文档chm里导出所有的waapi ，并且以函数形式呈现

- 提供了一些方便的函数，便于使用waapi

- waapi 函数提供基于回调和基于promise的两种调用方式

### Installation

- 安装 [nodejs](https://nodejs.org/) 和 [Typescript](https://www.typescriptlang.org/)，如果是中国用户，还需要设置 [cnpm](https://npmmirror.com/)

- 下载release包，解压到本地

- 安装依赖
```bash
npm install
```

- 打开对应版本wwise后，运行
```bash
npm start
```

你应当能看到控制台输出
```bash
Hello Wwise! Version:  v2019.2.14
connection closed closed {
  reason: 'wamp.error.goodbye_and_out',
  message: '',
  retry_delay: null,
  retry_count: null,
  will_retry: false
}
Connection closed. Reason: closed
```

### Examples

包含了一些重要的基础内容，还有一些对官方文档的复刻（施工中）

施工进度：[progress](./progress.md)

- 建立连接

    [p1_CreateConnection.ts](./Typescript_2019_2/SRC/Examples/p1_CreateConnection.ts)

- 