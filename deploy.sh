#!/bin/bash

# Deployment script for CPBO website to GitHub Pages
# Usage: ./deploy.sh [--no-push]

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Save current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "⚠️  You have uncommitted changes. Please commit or stash them first."
    git status -s
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist folder not found"
    exit 1
fi

echo "✅ Build successful"

# Switch to gh-pages branch
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages

# Remove old files (keep .git and .gitignore)
echo "🧹 Cleaning old files..."
rm -rf assets images index.html

# Copy new built files
echo "📦 Copying new files..."
cp -r dist/* .

# Stage all changes
git add -A

# Check if there are changes to commit
if [[ -z $(git status -s) ]]; then
    echo "ℹ️  No changes to deploy"
    git checkout "$CURRENT_BRANCH"
    exit 0
fi

# Commit changes
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
echo "💾 Committing changes..."
git commit -m "Deploy: $TIMESTAMP"

# Push to GitHub (unless --no-push flag is provided)
if [[ "$1" != "--no-push" ]]; then
    echo "⬆️  Pushing to GitHub..."
    git push origin gh-pages
    echo "✅ Deployment complete!"
    echo "🌐 Your site will be live at: https://tecuzin.github.io/site-cpbo/"
else
    echo "⏸️  Skipped push (use 'git push origin gh-pages' to deploy)"
fi

# Return to original branch
echo "🔙 Returning to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo "✨ Done!"

