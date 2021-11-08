
#!/bin/bash

set -e

branchName=${1}
dev='[dev]'
test='[test]'
master='[master]'
prod='[prod]'

function log() {
  echo "$(date)>>>>$@"
}

repositoryUrl="${GITLAB_REPO_URL}"

# 克隆代码
git clone  $repositoryUrl


# 切换分支
log "${commitmsg}"
cd g-crm-app 

if [[ $commitmsg == *$test* ]];then
    echo "包含[test]"
    git checkout test
elif [[ $commitmsg == *$master* ]];then
    echo "包含[master]"
    git checkout master
elif [[ $commitmsg == *$prod* ]];then
    echo "包含[prod]"
    git checkout prod
else
    echo "包含[dev]"
    git checkout dev
fi


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