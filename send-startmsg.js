const { notificationSuccess } = require('./notification');
const projectName = process.env.PROJECT_NAME;
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/devops-merchant-app/actions';

const uploadCloud = process.argv[3];
const platform = process.argv[4] || 'Android';
const branchName = process.argv[5];

let text = '';

if (uploadCloud === 'true') {
  text = '\n>选择了<font color="info">同步</font>到蒲公英平台';
} else if (uploadCloud !== 'true') {
  text = '\n>选择<font color="warning">不同步</font>到蒲公英平台';
}

const context = `>${projectName}-${platform}正在构建🚀，详情见：[Job Link](${BUILD_URL})${text}；\n>分支：<font color="warning">${branchName}</font>`;
notificationSuccess(context, () => {});
