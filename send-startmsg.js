const { notificationSuccess } = require('./notification');
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';

const uploadCloud = process.argv[3];
let text = '';
if (uploadCloud === 'true') {
  text = '\n>选择了上传公司文件服务器';
} else {
  text = '\n>**未选择**上传公司文件服务器';
}

const context = `>Android正在构建: [${BUILD_URL}](${BUILD_URL})${text}`;
notificationSuccess(context, () => {});
