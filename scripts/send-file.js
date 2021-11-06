const { sendFile } = require('./upload-file');
const { sendQrcode } = require('./send-qrcode');
const { notificationSuccess, notificationFailed } = require('./notification');
const { formatDateTime, formatUploadTime, getGitInfo } = require('./utils');
// const envJson = require('../build-env.json');
const mentioned_list = ['All'];
const mentionStr = mentioned_list.map((name) => '@' + name).join(',');

const {
  branchName,
  commitMessage,
  commitDate,
  commitAuthorName,
  commitAuthorEmail,
  localGitUserEmail,
} = getGitInfo();

let envName = '开发环境';
/* if (envJson.env === 'dev') {
  envName = '开发环境dev';
} else if (envJson.env === 'test') {
  envName = '测试环境test';
} else if (envJson.env === 'pre') {
  envName = 'pre环境';
} else if (envJson.env === 'prod') {
  envName = '生产环境prod';
} */

console.log(envJson.env, envName);

const fileTime = formatUploadTime(new Date());
const nowTime = formatDateTime(new Date());
const body = {
  subject: `CRM安装包(${envName})-${nowTime}`,
  fileName: `android-${envJson.env}-${fileTime}.apk`,
  filePath: 'android/app/build/outputs/apk/release/app-release.apk',
};

sendFile(body.fileName, body.filePath, (fileUrl) => {
  let str = `**附件下载**：[${body.subject}](${fileUrl})\n`;
  // eslint-disable-next-line max-len
  const content = `App打包成功，请相关大佬注意。\n>服务环境类型：<font color="info">${envName}(分支：${branchName})</font>\n>打包人：<font color="comment">${localGitUserEmail}</font>\n>Git提交时间：<font color="warning">${commitDate}</font>\n>Git提交人：<font color="comment">${commitAuthorName}（${commitAuthorEmail}）</font>\n>Git提交日记：<font color="comment">${commitMessage}</font>\n${str}\n\n${mentionStr}`;
  notificationSuccess(content, () => {
    notificationSuccess({ msgtype: 'text', content: fileUrl });
    sendQrcode(fileUrl);
  });
});
