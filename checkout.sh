
#!/bin/bash

set -e

branchName=${1}
commitmsg=${2}

function log() {
  echo "$(date)>>>>$@"
}

repositoryUrl="${GITLAB_REPO_URL}"

log $commitmsg
log $repositoryUrl
log $branchName

pwd

git clone  $repositoryUrl

cd g-crm-app 

git checkout $branchName

log "$(git branch)"

git pull

cd ..  

cd g-crm-app && mv * ../ 

pwd

ls -l

