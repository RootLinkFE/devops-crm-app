
#!/bin/bash

set -e

repositoryUrl="${GITLAB_REPO_URL}"
branchName=${1}
devBranch='dev'
testBranch='test'
masterBranch='master'
prodBranch='prod'

function log() {
  echo "$(date)>>>>$@"
}


# 克隆分支代码

if [[ $branchName == $testBranch ]];then
    echo "包含test"
    git clone -b test $repositoryUrl
elif [[ $branchName == $masterBranch ]];then
    echo "包含master"
    git clone $repositoryUrl
elif [[ $branchName == $prodBranch ]];then
    echo "包含prod"
    git clone -b prod $repositoryUrl
elif [[ $branchName == $devBranch ]];then
    echo "包含dev"
    git clone -b dev $repositoryUrl
else
    echo "默认执行dev分支代码"
    git clone -b dev $repositoryUrl
fi

# cd g-crm-app 
# log "$(git branch)"
# # 拉取最新代码
# git pull
# cd ..  

# 将代码放到github runner 执行目录下
cd g-crm-app && mv * ../ 

pwd

ls -l
