const execSync = require('child_process').execSync;

function getGitInfo() {
  const branchName = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();

  console.log(`当前分支：${branchName}`);

  const commitMessage = execSync('git log --oneline -n 2').toString().trim();
  const commitAuthorName = execSync(
    "git --no-pager show -s --format='%an' HEAD",
  )
    .toString()
    .trim();
  const commitAuthorEmail = execSync(
    "git --no-pager show -s --format='%ae' HEAD",
  )
    .toString()
    .trim();
  const commitDate = formatDateTime(
    new Date(execSync('git show -s --format=%cd').toString()),
  );
  const localGitUserEmail = execSync('git config user.email').toString();

  console.log(commitMessage);
  console.log(commitAuthorName);
  console.log(commitAuthorEmail);
  console.log(commitDate);
  console.log(localGitUserEmail);

  return {
    branchName,
    commitMessage,
    commitDate,
    commitAuthorName,
    commitAuthorEmail,
    localGitUserEmail,
    envName: '',
  };
}

const formatNum = (n) => {
  const m = n.toString();
  return m[1] ? m : '0' + m;
};

// 时间格式化
const formatDateTime = (date, seperator = '-') => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNum).join(seperator) +
    ' ' +
    [hour, minute, second].map(formatNum).join(':')
  );
};

// 附件上传时间
const formatUploadTime = (date, seperator = '-') => {
  const d = formatDateTime(date);

  return d.replace(' ', '_').replace(/:/g, '_');
};

module.exports = {
  formatDateTime,
  getGitInfo,
  formatUploadTime,
};
