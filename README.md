# Roy Laboratory Website

Official website for the Roy Laboratory at the University of Tennessee Health Science Center (UTHSC) College of Pharmacy, led by Dr. Sudeshna Roy, Ph.D.

## About

The Roy Laboratory focuses on innovative medicinal chemistry research, including drug discovery and chemical biology, with particular emphasis on combating drug-resistant infections and advancing precision therapeutics. The lab is supported by major NIH grants totaling $4.9 million for tuberculosis research.

## Features

- **Home**: Lab overview and research highlights
- **Research**: Detailed information about research programs and projects
- **Members**: Current team members, graduate students, undergraduates, and alumni
- **Publications**: Complete list of lab publications (28 peer-reviewed papers)
- **Sudeshna Roy**: PI profile with CV and contact information
- **News**: Latest lab announcements and media coverage
- **Join Us**: Opportunities for postdocs, graduate students, and undergraduates

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS with CSS variables
- **Routing**: Hash-based client-side routing
- **Slideshow**: Swiper.js v9
- **Hosting**: Static site (deployable to GitHub Pages, Netlify, etc.)

## Project Structure

```
DrRoyWebsiteClone/
├── public/
│   ├── index.html              # Main HTML file
│   ├── assets/
│   │   ├── images/             # Image assets (lab photos, member photos)
│   │   └── Roy-CV-updated-Oct2025/
│   │       └── Sudeshna Roy CV_Oct 2025.pdf
├── src/
│   ├── app.js                  # Main JavaScript (routing, render functions)
│   └── styles.css              # Global styles
├── Heat-Shots/                 # Source images (not used in production)
├── Pictures/                   # Source images (not used in production)
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhatnira/Roy-Laboratory-Website.git
   cd Roy-Laboratory-Website
   ```

2. **Run locally**:
   - Option 1: Use VS Code Live Server extension
     - Open the project in VS Code
     - Install the "Live Server" extension
     - Right-click on `public/index.html` and select "Open with Live Server"
   
   - Option 2: Use Python's built-in server
     ```bash
     cd public
     python3 -m http.server 8000
     ```
     Then visit: http://localhost:8000
   
   - Option 3: Use Node.js http-server
     ```bash
     npx http-server public -p 8000
     ```

3. **No build process required** - This is a static site with no dependencies to install.

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
  authors: "Author names", 
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

## Acknowledgments

- UTHSC College of Pharmacy
- NIH funding support
- All lab members and collaborators
