const request = require('request');
const webhookKey = process.env.WECOM_WEBHOOK_KEY;

function requestWebhook(body, cb) {
  request.post(
    {
      url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=' + webhookKey,
      json: true,
      headers: {
        'content-type': 'application/json',
      },
      body,
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      if (typeof cb === 'function') {
        cb();
      }
      console.log('发送成功');
    }
  );
}

function notificationSuccess(content, cb, mentionList = []) {
  let body = {
    msgtype: 'markdown',
    markdown: {
      content: content,
      mentioned_mobile_list: mentionList,
    },
  };
  if (content.msgtype === 'text') {
    body = {
      msgtype: 'text',
      text: {
        content: content.content,
        // mentioned_mobile_list: ['@all'],
      },
    };
  }
  if (content.msgtype === 'image') {
    body = {
      msgtype: 'image',
      image: {
        base64: content.content,
        md5: content.md5,
      },
    };
  }

  requestWebhook(body, cb);
}

function notificationFailed(message, subject, mentionList = []) {
  const body = {
    msgtype: 'markdown',
    markdown: {
      content: `<font color="comment">${subject}</font>\n>**失败原因**：<font color="info">${message}</font>`,
      mentioned_mobile_list: mentionList,
    },
  };
  requestWebhook(body);
}

module.exports = {
  notificationFailed,
  notificationSuccess,
};
