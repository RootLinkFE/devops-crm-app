const { notificationSuccess } = require('./notification');
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';
const uploadCloud = process.argv[3];
const platform = process.argv[4] || 'Android';
let text = '';
if (uploadCloud === 'true') {
  text = '\n>正上传到服务器生成二维码（Github走国内服务器可能会超时）……';
}
if (uploadCloud === 'true' && platform.toLowerCase() === 'ios') {
  text = '\n>正在同步到蒲公英平台……';
}
const context = `${platform}构建成功\n>已上传Github Artifact，可前往下载(需登陆): [${BUILD_URL}](${BUILD_URL})${text}`;
notificationSuccess(context, () => {});
