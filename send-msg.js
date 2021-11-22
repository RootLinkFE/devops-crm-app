const { notificationSuccess } = require('./notification');

const text = process.argv[2];
const branchName = process.argv[3];

notificationSuccess(
  `${text}\n>分支：<font color="warning">${branchName}</font>`,
  () => {}
);
