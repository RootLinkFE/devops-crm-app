
#!/bin/bash

set -e

branchName=${1}

function log() {
  echo "$(date)>>>>$@"
}

repositoryUrl="${GITLAB_REPO_URL}"

log $repositoryUrl
log $branchName

pwd

git clone  $repositoryUrl

git checkout $branchName

log "$(git branch)"

cd g-crm-app && mv * ../ 

pwd

ls -l

