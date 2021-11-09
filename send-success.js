const { notificationSuccess } = require('./notification');
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';
const uploadCloud = process.argv[3];
let text = '';
if (uploadCloud === 'true') {
  text = '\n>正上传到服务器生成二维码（Github走国内服务器可能会超时）……';
}
const context = `Android构建成功\n>已上传Github Artifact，可前往下载(需登陆): [${BUILD_URL}](${BUILD_URL})${text}`;
notificationSuccess(context, () => {});
