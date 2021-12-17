const { notificationSuccess } = require('./notification');
const { mentionList } = require('./notification-cfg');
const projectName = process.env.PROJECT_NAME;
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/devops-merchant-app/actions';
const uploadCloud = process.argv[3];
const platform = process.argv[4] || 'Android';
const branchName = process.argv[5];
let text = '';

if (uploadCloud === 'true') {
  text = '\n>正在同步到蒲公英平台……';
}
const context = `${projectName}-${platform}构建成功🎉 \n>分支：<font color="warning">${branchName}</font>\n>已上传 Github Artifact，[点此下载(需登陆)](${BUILD_URL})${text}`;
notificationSuccess(context, null, mentionList);
