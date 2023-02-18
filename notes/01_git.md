 1994  echo "# snowtrails" >> README.md
 1995  git init
 1996  git add .
 1997  git status
 1998  git commit -m 'Inital commit'
 1999  git remote add origin git@github.com:foxcodenine/snowtrails.git
 2000  git branch -M main
 2001  git push -u origin main




$ git reset --hard HEAD^
$ git reset --hard HEAD~2

$ git init
$ git pull git@github.com:foxcodenine/snowtrails.git