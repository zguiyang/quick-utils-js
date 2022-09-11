#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

NowPath=`pwd`

PROJECT_NAME='quick.utils.js'

echo "📦 building docs..."

pnpm run docs:build

echo "🚀 deploying docs..."

cd docs/.vitepress/dist

git add . -f
git commit -am 'ci: 🚀 deploy docs'

# push to server

git push -f git@www.zhaoguiyang.cn:/www/repo/$PROJECT_NAME.git

cd $NowPath

echo "✅ deploy docs success !"

exit 0