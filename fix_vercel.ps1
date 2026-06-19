$source = ".\dental-chatbot"
$dest = ".\"

Write-Host "Moving files from dental-chatbot to root directory..." -ForegroundColor Cyan

# Get all items including hidden ones and move them to root
Get-ChildItem -Path $source -Force | ForEach-Object {
    Move-Item -Path $_.FullName -Destination $dest -Force
}

Write-Host "Cleaning up old files..." -ForegroundColor Cyan

# Remove the old vercel.json since Vercel handles Next.js automatically
if (Test-Path ".\vercel.json") {
    Remove-Item ".\vercel.json" -Force
}

# Remove the empty directory
Remove-Item -Path $source -Force

Write-Host "Done! The project structure is now fixed for Vercel." -ForegroundColor Green
Write-Host "Please run these commands to push the changes to GitHub:" -ForegroundColor Yellow
Write-Host "git add ."
Write-Host "git commit -m `"Fix project structure for Vercel`""
Write-Host "git push"
