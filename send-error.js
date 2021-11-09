const { notificationSuccess } = require('./notification');

const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';
const platform = process.argv[3] || 'Android';

const context = `>${platform}构建失败❌，详情见: [Job Link](${BUILD_URL})`;
notificationSuccess(context, () => {});
