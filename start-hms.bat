@echo off
title St. Jude Hospital Management System Launcher
cd /d "%~dp0"

echo ===================================================================
echo   St. Jude Healthcare & Medical Center - HMS Launcher
echo ===================================================================
echo.

echo [Step 1/3] Launching Backend API Server (Node + Express)...
start "HMS Backend Server (Port 5000)" cmd /k "cd /d "%~dp0server" && npm run dev"

timeout /t 3 /nobreak > nul

echo [Step 2/3] Launching Frontend Development Server (React + Vite)...
start "HMS Frontend (Port 5173)" cmd /k "cd /d "%~dp0client" && npm run dev"

timeout /t 2 /nobreak > nul

echo [Step 3/3] Opening application in your web browser...
start http://localhost:5173

echo.
echo ===================================================================
echo   All services have been started!
echo.
echo   Frontend URL: http://localhost:5173
echo   Backend URL:  http://localhost:5000/api/health
echo.
echo   Keep the two command windows open while testing the application.
echo ===================================================================
echo.
pause
