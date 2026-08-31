@echo off
chcp 65001 >nul
setlocal

cd /d "%~dp0"
set "SITE_PORT=8000"
set "SITE_URL=http://127.0.0.1:%SITE_PORT%/"

where py >nul 2>nul
if not errorlevel 1 (
  start "" "%SITE_URL%"
  echo 网站已打开：%SITE_URL%
  echo 验收结束后，关闭这个窗口即可停止预览。
  py -m http.server %SITE_PORT% --bind 127.0.0.1
  goto :end
)

where python >nul 2>nul
if not errorlevel 1 (
  start "" "%SITE_URL%"
  echo 网站已打开：%SITE_URL%
  echo 验收结束后，关闭这个窗口即可停止预览。
  python -m http.server %SITE_PORT% --bind 127.0.0.1
  goto :end
)

echo 未找到 Python，暂时无法自动启动本地预览。
echo 请安装 Python，或告诉 Codex 帮你启动预览。
pause

:end
endlocal
