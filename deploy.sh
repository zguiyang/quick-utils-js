#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

NowPath=`pwd`

echo "🚀 deploying docs..."

cd docs/

git add .
git commit -am 'ci: 🚀 deploy docs'

# push to server

git push origin master

cd $NowPath

echo "✅ deploy docs success !"

exit 0