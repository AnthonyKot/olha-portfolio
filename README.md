# Olha Kot - UX/UI Portfolio

A modern, responsive portfolio website built with React and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Deploy to GitHub Pages

### Step 1: Configure Vite for GitHub Pages

Update `vite.config.js` to set the base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your GitHub repo name
})
```

### Step 2: Build the Production Bundle

```bash
npm run build
```

This creates a `dist/` folder with your optimized static files.

### Step 3: Deploy Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. Push to `main` branch to trigger deployment

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

---

### Alternative: Manual Deploy with gh-pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add deploy script to package.json
# "scripts": { "deploy": "npm run build && gh-pages -d dist" }

# Deploy
npm run deploy
```

## 🔧 Project Structure

```
portfolio-generator/
├── public/assets/     # Images and static assets
├── src/
│   ├── components/    # React components
│   ├── styles/        # CSS files
│   ├── portfolio.config.js  # Portfolio content config
│   └── App.jsx
└── vite.config.js
```

## ✏️ Customization

Edit `src/portfolio.config.js` to update:
- Personal information
- Hero section content
- Project details and case studies
- Gallery images
