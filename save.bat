@echo off
git pull
set /p %message% = Enter message:
git commit -m"%message%"
git push
