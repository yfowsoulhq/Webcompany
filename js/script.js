// script.js
// 添加你的JavaScript代码
$(document).on('submit', '#addNewsForm', function (event) {
    event.preventDefault();
    const form = $(this);
    const formData = form.serialize();
    // 发送POST请求到后端
    $.ajax({
      type: 'POST',
      url: '/add_news', // 后端处理添加新闻的路由
      data: formData,
      success: function (response) {
        console.log('添加新闻成功:', response);
        // 这里可以在前端更新新闻列表等内容
      },
      error: function (error) {
        console.error('添加新闻失败:', error);
      }
    });
  });
  