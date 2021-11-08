const { notificationSuccess } = require('./notification');
notificationSuccess({
  msgtype: 'text',
  content:
    '构建apk已上传Artifact：https://github.com/RootLinkFE/AutoBuild-React-Native/actions',
});
