const { notificationSuccess } = require('./notification');

const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';

const context = `>Android构建失败，详情见: [${BUILD_URL}](${BUILD_URL})`;
notificationSuccess(context, () => {});
