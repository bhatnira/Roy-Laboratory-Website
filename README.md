# Roy Laboratory Website 🧪

Welcome! This is the official website for the **Roy Laboratory** at the University of Tennessee Health Science Center (UTHSC) College of Pharmacy.

**Led by**: Dr. Sudeshna Roy, Ph.D.  
**Research Focus**: Developing new medicines to fight drug-resistant infections  
**Funding**: $4.9 million in NIH grants for tuberculosis research

---

## � Documentation Guide

**Choose your guide based on your experience level:**

- 🟢 **New to websites?** → Read **[SIMPLE_GUIDE.md](SIMPLE_GUIDE.md)** (Step-by-step with screenshots)
- 🟡 **Need a quick reminder?** → Check **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** (One-page cheat sheet)
- 🔵 **Developer?** → See **[DOCUMENTATION.md](DOCUMENTATION.md)** (Technical details)
- 🟣 **Refactoring code?** → Read **[REFACTORING_GUIDE.md](REFACTORING_GUIDE.md)** (Modular architecture)

---

## �📋 What's on the Website?

Our website includes:

- **🏠 Home** - Overview of our lab and what we do
- **🔬 Research** - Information about our current projects
- **👥 Members** - Meet our team: professors, students, and researchers
- **📚 Publications** - Our published research papers (28 and counting!)
- **👤 Sudeshna Roy** - About Dr. Roy, her CV, and contact information
- **📰 News** - Latest announcements and media features
- **🤝 Join Us** - Opportunities to work with us

---

## 🎯 For Website Administrators

### Quick Start: View the Website Locally

**Option 1: Using VS Code (Easiest)**
1. Open this folder in Visual Studio Code
2. Install the "Live Server" extension (if you haven't already)
3. Right-click on `public/index.html`
4. Select "Open with Live Server"
5. Your browser will open automatically!

**Option 2: Using Python (If you have Python installed)**
```bash
cd public
python3 -m http.server 8000
```
Then open your browser and go to: http://localhost:8000

**Option 3: Using Node.js**
```bash
npx http-server public -p 8000
```
Then visit: http://localhost:8000

---

## ✏️ How to Update Content (Non-Technical Guide)

### 📰 Adding News Articles

1. Open the file: `src/app.js`
2. Find the section that says `function newsItems()`
3. Add your new article at the top of the list:

```javascript
{
  title: 'Your News Title Here',
  date: 'Month Day, Year',
  summary: 'A brief description of the news...',
  link: 'https://link-to-full-article.com',
  image: 'assets/images/your-photo.jpg'  // Optional
}
```

4. Save the file
5. Refresh your browser to see the changes!

### 📚 Adding Publications

1. Open the file: `src/app.js`
2. Find where publications are listed (look for the numbered papers)
3. Add your new publication at the top:

```html
<div class="pub-item">
  <div>
    <h3><strong>1.</strong> Your Paper Title</h3>
    <p class="meta">Authors - Journal Name (Year)</p>
  </div>
  <div class="links">
    <a href="https://doi.org/..." target="_blank">DOI</a>
  </div>
</div>
```

4. Update the numbers of existing publications
5. Save and refresh!

### 👥 Adding Team Members

1. Open: `src/app.js`
2. Find `function teamData()`
3. Add to the appropriate section (postdocs, grads, undergrads):

```javascript
{
  name: 'Member Name',
  role: 'Their Position',
  photo: '/assets/images/member-photo.jpg'
}
```

4. Save the file and refresh!

### 🖼️ Adding Photos

1. Put your photo in: `public/assets/images/`
2. Use the filename in your code (see examples above)
3. **Tip**: Keep photo files under 500KB for fast loading!

---

## 🚀 For Developers

### What Technology We Use

- **Language**: JavaScript (no frameworks needed!)
- **Styling**: CSS (custom styles, no Bootstrap)
- **Photos**: Swiper.js for the slideshow
- **Hosting**: Can be hosted anywhere (GitHub Pages, Netlify, etc.)
- **No Installation Required**: Just open the HTML file!

### 📁 Where Everything Lives

Here's what each folder contains:

```
📦 Roy-Laboratory-Website/
├── 📂 public/                  ← The actual website
│   ├── 📄 index.html          ← Main page structure
│   └── 📂 assets/
│       ├── 🖼️ images/         ← All photos go here
│       └── 📄 CV PDF          ← Dr. Roy's CV
│
├── 📂 src/                     ← Code that makes it work
│   ├── 📄 app.js              ← Main logic (news, publications, etc.)
│   └── 📄 styles.css          ← How it looks (colors, fonts, layout)
│
├── 📂 Heat-Shots/              ← Backup photos (not shown on site)
├── 📂 Pictures/                ← More backup photos
│
└── 📄 README.md               ← You are here! 👋
```

### 🔧 Technical Setup

**If you need to download the website code:**

```bash
# Download from GitHub
git clone https://github.com/bhatnira/Roy-Laboratory-Website.git
cd Roy-Laboratory-Website
```

**That's it!** No installation needed. Just open the files and edit.

## Development

### File Organization

- **public/index.html**: Contains the navigation structure and base HTML
- **src/app.js**: All page rendering functions and routing logic
- **src/styles.css**: Global styles and component styling
- **public/assets/**: All static assets (images, PDFs, etc.)

### Adding New Pages

1. Create a render function in `src/app.js`:
   ```javascript
   function renderYourPage() {
     mount(`
       <section class="section">
         <div class="container">
           <h2>Your Page Title</h2>
           <!-- Your content -->
         </div>
       </section>
     `);
   }
   ```

2. Add a route in the `router()` function:
   ```javascript
   case 'your-page':
     renderYourPage();
     break;
   ```

3. Add a navigation link in `public/index.html`:
   ```html
   <a href="#your-page">Your Page</a>
   ```

### Styling Guidelines

- Use CSS variables defined in `:root` for consistent theming
- Follow the existing card-based layout patterns
- Maintain responsive design principles
- Keep max-width: 900px for content sections

## Deployment

### GitHub Pages

1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/public`
4. Save and wait for deployment
5. Site will be available at: `https://bhatnira.github.io/Roy-Laboratory-Website/`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `public`
3. Deploy

### Custom Domain

Update the base URL in your deployment settings and ensure all asset paths are relative (already configured).

## Content Updates

### Updating Publications

Edit the `publicationsData()` function in `src/app.js`:
```javascript
{ 
  authors: "Nirajan Bhattarai", 
  title: "Paper title", 
  journal: "Journal name", 
  year: 2025, 
  link: "DOI or URL" 
}
```

### Adding News Items

Edit the `newsItems()` function in `src/app.js`:
```javascript
{ 
  title: 'News Title', 
  date: 'Date', 
  summary: 'Brief description',
  link: 'External URL',
  image: 'assets/images/your-image.jpg',  // Optional
  video: 'https://video-embed-url'        // Optional
}
```

### Updating Team Members

Edit the `teamData()` function in `src/app.js` for each category:
- `pi`: Principal Investigator
- `postdocs`: Postdoctoral researchers
- `grads`: Graduate students
- `undergrads`: Undergraduate researchers
- `alumni`: Former members
- `collaborators`: External collaborators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a private lab website. For updates or corrections, please contact the lab directly.

## Contact

**Dr. Sudeshna Roy, Ph.D.**  
Associate Professor  
College of Pharmacy  
Department of Pharmaceutical Sciences  
University of Tennessee Health Science Center  

Email: roy@uthsc.edu  
Address: 881 Madison Avenue, Pharmacy Building_05_571, Memphis, TN 38163

## License

© 2025 Roy Laboratory, UTHSC. All rights reserved.


