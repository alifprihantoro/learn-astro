cd dist
ls -a
git add .
git commit -am 'update'
git remote | xargs -L1 git push --all
