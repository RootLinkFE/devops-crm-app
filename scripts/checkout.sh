
#!/bin/bash

set -e

function log() {
  echo "$(date)>>>>$@"
}

repositoryUrl="${GITLAB_REPO_URL}"

log $repositoryUrl

pwd

git clone  $repositoryUrl

pwd

ls -l

mv g-crm-app ./

ls -l

