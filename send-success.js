const { notificationSuccess } = require('./notification');
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';

const context = `Android构建成功\n>已上传Github Artifact: ${BUILD_URL}\n>正上传到服务器生成二维码（可能会超时）……`;
notificationSuccess(context, () => {});
