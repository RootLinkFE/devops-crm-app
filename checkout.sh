
#!/bin/bash

set -e

repositoryUrl="${GITLAB_REPO_URL}"
branchName=${1}
devBranch='[dev]'
testBranch='[test]'
masterBranch='[master]'
prodBranch='[prod]'

function log() {
  echo "$(date)>>>>$@"
}


# 克隆分支代码
log "${commitmsg}"

if [[ $commitmsg =~ $testBranch ]];then
    echo "包含[test]"
    git clone -b test $repositoryUrl
elif [[ $commitmsg  =~ $masterBranch ]];then
    echo "包含[master]"
    git clone -b master $repositoryUrl
elif [[ $commitmsg  =~ $prodBranch ]];then
    echo "包含[prod]"
    git clone -b prod $repositoryUrl
elif [[ $commitmsg  =~ $devBranch ]];then
    echo "包含[dev]"
    git clone -b dev $repositoryUrl
else
    echo "包含[dev]"
    git clone -b dev $repositoryUrl
fi

cd g-crm-app 

log "$(git branch)"
# 拉取最新代码
git pull

cd ..  
# 将代码放到github runner 执行目录下
cd g-crm-app && mv * ../ 

pwd

ls -l

# 此处应该有切换环境服务地址的脚本执行
# node ./scripts/prebuild.js