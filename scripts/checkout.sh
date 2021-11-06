
#!/bin/bash

set -e

function log() {
  echo "$(date)>>>>$@"
}

repositoryUrl="${GITLAB_REPO_URL}"

log $repositoryUrl

pwd

git clone  $repositoryUrl

cd g-crm-app && mv * ../ 

pwd

ls -l

