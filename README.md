# WwiseKit

WwiseKit 是一套开发中的wwise工具合集

使用typescript开发，支持nodejs环境

### 支持版本

- 2019.2

### Features

- 提供了一个工具，可以从wwise的文档chm里导出所有的waapi ，并且以函数形式呈现

- 提供了一些方便的函数，便于使用waapi

- waapi 函数提供基于回调和基于promise的两种调用方式

### Installation

- 安装 [nodejs](https://nodejs.org/) 和 [Typescript](https://www.typescriptlang.org/)，如果是中国用户，还需要设置 [cnpm](https://npmmirror.com/)

- 下载 [release](https://github.com/Fungus-Light/WwiseKit/releases) 包，解压到本地

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

官方文档: [DOC](https://www.audiokinetic.com/zh/library/2019.2.15_7667/?source=SDK&id=waapi_example_index.html)

施工进度：[progress](./progress.md) 

- 建立连接

    [p1_CreateConnection.ts](./Typescript_2019_2/SRC/Examples/p1_CreateConnection.ts)

- 将对象添加到 Inclusion 列表

    [doc1_set_soundbank_inclusions.ts](./Typescript_2019_2/SRC/Examples/doc1_set_soundbank_inclusions.ts)

- 将 Switch Container 的子对象指派给 State
    [doc2_assigning_switch_container_child_to_state.ts](./Typescript_2019_2/SRC/Examples/doc2_assigning_switch_container_child_to_state.ts)

### TODO

更完善的类型约束

支持更高版本的wwise（目前仅支持 2019.2 ）

支持导出到C#版本

~~autobahn的替代品~~  (已经可以脱离node_modules使用)