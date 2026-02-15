# agile.vc Website

Static website built with Hugo and the Archie theme.

## 🚀 Quick Deploy to GitHub Pages

### 1. Create GitHub Repository

```bash
cd ~/.openclaw/workspace/agile-vc
git init
git add .
git commit -m "Initial commit: agile.vc website"
```

Create a new repository on GitHub (e.g., `agile-vc-website`), then:

```bash
git remote add origin git@github.com:YOUR-USERNAME/agile-vc-website.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Done! The site will build automatically

### 3. Configure Custom Domain (agile.vc)

**In GitHub:**
1. Settings → Pages → Custom domain
2. Enter: `agile.vc`
3. Save

**In your DNS settings:**
Add these records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

**Wait for DNS propagation** (can take 1-24 hours)

**Enable HTTPS:**
After DNS is set up, go back to Settings → Pages and check "Enforce HTTPS"

---

## 🛠 Local Development

### Run locally:

```bash
cd ~/.openclaw/workspace/agile-vc
hugo server -D
```

Visit: http://localhost:1313/

### Build for production:

```bash
hugo --minify
```

Output in `/public/` directory.

---

## 📁 Project Structure

```
agile-vc/
├── .github/
│   └── workflows/
│       └── hugo.yml          # Auto-deploy config
├── content/
│   ├── _index.md             # Homepage
│   └── imprint.md            # Imprint page
├── layouts/
│   └── partials/
│       ├── head.html         # Header (logo + nav)
│       ├── header.html       # Meta tags
│       └── footer.html       # Footer
├── assets/
│   └── css/
│       ├── custom.css        # Light mode styles
│       └── dark.css          # Dark mode styles
├── static/
│   ├── agile-logo.png        # Color logo
│   ├── agile-logo-mono.png   # Dark mode logo
│   ├── favicon-light.png     # Light mode favicon
│   ├── favicon-dark.png      # Dark mode favicon
│   ├── og-image.png          # Social share image
│   └── js/
│       ├── themetoggle.js    # Dark/light toggle
│       └── custom.js         # Custom JavaScript
├── themes/
│   └── archie/               # Base theme
├── hugo.toml                 # Config
└── README.md                 # This file
```

---

## 🎨 Design

- **Colors:** Agile Blue (#1976A2), Grey (#717074), Light BG (#f5f5f5)
- **Fonts:** Verdana (body), default sans-serif
- **Dark Mode:** Toggle button (automatic theme switching)
- **Logo:** Click to return home

---

## 📝 Meta Tags & SEO

- Title: "Agile Partners - Venture Capital for Software Founders"
- Description optimized for search engines
- Open Graph image (1200x630px) for social sharing
- Twitter Card: `summary_large_image`
- Canonical URLs
- Robots meta tags

---

## 🔄 Updating Content

### Homepage

Edit `content/_index.md`

### Imprint

Edit `content/imprint.md`

### Add new pages

Create `content/newpage.md` and it will be available at `/newpage/`

---

## ⚡️ GitHub Actions

Every push to `main` triggers:
1. Hugo build with `--minify`
2. Deploy to GitHub Pages
3. Site live within 1-2 minutes

Check build status: Actions tab in your GitHub repo

---

## 🆘 Troubleshooting

**Build fails?**
- Check Actions tab for error logs
- Verify Hugo version in `.github/workflows/hugo.yml`

**Custom domain not working?**
- Verify DNS records with `dig agile.vc`
- Wait for DNS propagation (up to 24h)
- Check GitHub Pages settings

**Changes not showing?**
- Hard reload: `Cmd + Shift + R` (macOS)
- Clear browser cache
- Check if build succeeded in Actions tab

---

## 📞 Support

Hugo docs: https://gohugo.io/documentation/  
GitHub Pages docs: https://docs.github.com/pages

---

Built with ❤️ using Hugo & OpenClaw
