@echo off
echo Conversion des images en WebP...

for /r "images" %%F in (*.jpg *.jpeg *.png) do (
    magick "%%F" -resize "1600x>" -strip -quality 82 "%%~dpnF.webp"
)

echo.
echo Conversion terminée !
pause