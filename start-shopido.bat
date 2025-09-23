@echo off
echo =========================================
echo Starting Shopido E-commerce Application
echo =========================================

echo.
echo Checking if MongoDB is running...
echo Please make sure MongoDB is installed and running on your system.
echo Default connection: mongodb://localhost:27017/shopido
echo.

echo Starting Backend Server...
echo.
cd /d "%~dp0shopido-backend"
start "Shopido Backend" cmd /k "npm start"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo.
echo Starting Frontend Development Server...
echo.
cd /d "%~dp0shopido-react"
start "Shopido Frontend" cmd /k "npm run dev"

echo.
echo =========================================
echo Shopido Application is starting...
echo =========================================
echo.
echo Backend Server: http://localhost:5000
echo Frontend Application: http://localhost:5173
echo API Health Check: http://localhost:5000/api/health
echo.
echo To seed the database with sample products:
echo 1. Open a new command prompt
echo 2. Navigate to shopido-backend folder
echo 3. Run: npm run seed
echo.
echo Press any key to continue...
pause >nul