const request = require('request');
const chalk = require('chalk');
const { createReadStream } = require('fs');
const UPLOAD_URL = process.env.UPLOAD_URL;
const UPLOAD_TOKEN_URL = process.env.UPLOAD_TOKEN_URL;

function requestWebhook(opt, cb) {
  return request.post(UPLOAD_URL, { ...opt }, (error, response, body) => {
    if (error) {
      console.log(error);
      console.log(`${chalk.bold.red('附件上传失败')}`);
      return;
    }
    // console.log(body);
    const result = JSON.parse(body);
    if (typeof cb === 'function') {
      cb(result.cosPath);
    }
    // console.log('附件发送完成', result.cosPath);
    console.log(
      `${chalk.bold.green('附件上传完成！')}，地址为: ${result.cosPath}`
    );
  });
}

function sendFile(filename, filePath, cb) {
  request.get(UPLOAD_TOKEN_URL, function (error, response, body) {
    if (error) {
      console.error('error:', error);
      return;
    }

    const result = JSON.parse(body);
    const fileUploadToken = result.data?.fileUploadToken;
    console.log('fileUploadToken=', fileUploadToken);

    console.log(`${chalk.bold.green('附件上传服务器')}...`);
    const r = requestWebhook(
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          IrootechAuth: fileUploadToken,
        },
      },
      cb
    );
    const form = r.form();
    form.append('tenantId', '8ZH9401');
    form.append('fileName', filename);
    form.append('file', createReadStream(filePath), {
      filename,
    });
  });
}

module.exports = {
  sendFile,
};
