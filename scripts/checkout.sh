
#!/bin/bash

set -e

function log() {
  echo "$(date)>>>>$@"
}

GITLAB_REPO_URL=$GITLAB_REPO_URL

log $GITLAB_REPO_URL

pwd

git clone  $GITLAB_REPO_URL

pwd

ls -l

mv g-crm-app ./

ls -l

