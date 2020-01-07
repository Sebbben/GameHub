@echo off
git pull
for /R %%f in (*.*) do echo %%f
pause
set /p %message% = Enter message:
git commit -m="%message%"
git push
