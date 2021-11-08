const { notificationFailed } = require('./notification');

const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';

notificationFailed(BUILD_URL, 'Android打包失败');
