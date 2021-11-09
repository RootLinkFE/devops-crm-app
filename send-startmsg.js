const { notificationSuccess } = require('./notification');
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';

const uploadCloud = process.argv[3];
const platform = process.argv[4] || 'Android';
let text = '';
if (uploadCloud === 'true' && platform.toLowerCase() === 'android') {
  text = '\n>选择了上传公司文件服务器';
} else if (uploadCloud !== 'true' && platform.toLowerCase() === 'android') {
  text = '\n>**未选择**上传公司文件服务器';
}
if (uploadCloud === 'true' && platform.toLowerCase() === 'ios') {
  text = '\n>选择了同步到蒲公英平台';
} else if (uploadCloud !== 'true' && platform.toLowerCase() === 'ios') {
  text = '\n>选择**不同步**到蒲公英平台';
}

const context = `>${platform}正在构建: [${BUILD_URL}](${BUILD_URL})${text}`;
notificationSuccess(context, () => {});
