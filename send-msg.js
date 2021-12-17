const { notificationSuccess } = require('./notification');
const projectName = process.env.PROJECT_NAME;
const text = process.argv[2];
const branchName = process.argv[3];

notificationSuccess(
  `${projectName}-${text}\n>分支：<font color="warning">${branchName}</font>`,
  () => {}
);
