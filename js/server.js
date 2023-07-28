const express = require('express');
const app = express();
const port = 3000;

// 静态文件服务，将前端网站文件夹指定为静态资源目录
app.use(express.static('D:/download/IT-Company-Website-main'));

// 启动服务器
app.listen(port, '192.168.0.115', () => {
  console.log(`服务器运行在 http://192.168.0.115:${port}`);
});
