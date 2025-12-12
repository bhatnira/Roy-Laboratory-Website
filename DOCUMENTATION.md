# Code Documentation

## Architecture Overview

This website uses a simple client-side architecture with hash-based routing and vanilla JavaScript.

### Core Components

#### 1. Router (`src/app.js`)

The `router()` function handles navigation:
- Listens to URL hash changes (`#home`, `#research`, etc.)
- Calls appropriate render functions
- Uses `mount()` helper to inject content into `#app` container

```javascript
function router() {
  const hash = (location.hash || '#home').replace('#', '');
  switch (hash) {
    case 'home': renderHome(); break;
    case 'research': renderResearch(); break;
    // ... more cases
  }
}
```

#### 2. Mount Helper

The `mount()` function safely injects HTML and handles cleanup:
```javascript
function mount(html) {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = html;
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

#### 3. Render Functions

Each page has a dedicated render function:

**renderHome()**: Landing page with hero section and slideshow
**renderResearch()**: Research programs and projects
**renderMembers()**: Team member grid with photos
**renderPublications()**: Numbered list of publications
**renderSudeshnaRoy()**: PI profile with CV embed
**renderNews()**: News items with image/video support
**renderJoinUs()**: Opportunities and contact form
**renderContact()**: Contact information and form

### Data Management

Data is stored in JavaScript functions that return arrays of objects:

#### Publications
```javascript
function publicationsData() {
  return [
    { 
      authors: "Roy S, et al.", 
      title: "Paper Title", 
      journal: "Journal Name", 
      year: 2024, 
      link: "https://doi.org/..." 
    },
    // ... 28 publications
  ];
}
```

#### News Items
```javascript
function newsItems() {
  return [
    { 
      title: 'News Title',
      date: 'January 15, 2025',
      summary: 'Brief description...',
      link: 'https://...',
      image: 'assets/images/...',  // Optional
      video: 'https://embed-url'   // Optional
    }
  ];
}
```

#### Team Members
```javascript
function teamData() {
  return {
    pi: [{ name: '...', role: '...', photo: '...' }],
    postdocs: [...],
    grads: [...],
    undergrads: [...],
    alumni: [...],
    collaborators: [...]
  };
}
```

### Navigation Structure

#### Two-Tier Navigation

**Secondary Navigation** (top):
- News
- Join Us
- Tools
- Documents
- Contact

**Main Navigation** (below):
- Home
- Research
- Members
- Publications
- Sudeshna Roy

### Styling System

#### CSS Variables

Defined in `:root` in `src/styles.css`:
```css
:root {
  --primary: #0066cc;
  --secondary: #00509e;
  --text: #333333;
  --muted: #f7f9fb;
  --border: #e1e5ea;
}
```

#### Key CSS Classes

**.section**: Page section wrapper with padding
**.container**: Content container with max-width
**.card**: Card component with border and shadow
**.grid**: Responsive grid layout
**.impact-grid**: Two-column layout for profile pages
**.pub-item**: Publication list item (left-aligned)

### Media Handling

#### Images
- Stored in `public/assets/images/`
- Referenced with relative paths: `assets/images/...`
- Common sizes: 300px height for news, 400px for avatars

#### Videos
- Embedded using iframes
- Instagram: Add `/embed` suffix to URL
- Facebook: Use video plugin URL with encoded href

#### PDF Embedding
```html
<iframe src="assets/Roy-CV-updated-Oct2025/Sudeshna Roy CV_Oct 2025.pdf" 
        style="width: 100%; height: 800px;">
</iframe>
```

### Event Handling

#### Hash Change Listener
```javascript
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

#### Form Handling
Forms use standard HTML5 validation with required attributes. Submit handlers can be added for processing:
```javascript
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form submission
});
```

## Adding Features

### Adding a New Page

1. **Create Render Function**:
   ```javascript
   function renderNewPage() {
     mount(`
       <section class="section">
         <div class="container">
           <h2>Page Title</h2>
           <p>Content...</p>
         </div>
       </section>
     `);
   }
   ```

2. **Add Router Case**:
   ```javascript
   case 'new-page':
     renderNewPage();
     break;
   ```

3. **Add Navigation Link** in `index.html`:
   ```html
   <a href="#new-page">New Page</a>
   ```

### Adding a News Item

Add to the `newsItems()` array:
```javascript
{ 
  title: 'Your News Title',
  date: 'Month Day, Year',
  summary: 'Brief description of the news...',
  link: 'https://external-link.com',
  image: 'assets/images/your-image.jpg'  // Optional
}
```

### Adding a Publication

Add to the `publicationsData()` array (at the beginning for newest):
```javascript
{ 
  authors: "First Author, Second Author, Roy S, Last Author", 
  title: "Your Paper Title", 
  journal: "Journal Name. 2025;50(1):123-456", 
  year: 2025, 
  link: "https://doi.org/10.xxxx/xxxxx" 
}
```

### Adding a Team Member

Update the appropriate array in `teamData()`:
```javascript
postdocs: [
  { 
    name: 'Dr. Jane Doe', 
    role: 'Postdoctoral Research Associate', 
    photo: '/assets/images/jane-doe.jpg' 
  }
]
```

## Best Practices

### Code Style

- Use arrow functions for simple callbacks
- Use template literals for HTML strings
- Keep functions small and focused
- Use descriptive variable names

### Performance

- Minimize DOM manipulations
- Use relative paths for all assets
- Lazy load images when possible
- Keep CSS specific and avoid deep nesting

### Accessibility

- Use semantic HTML elements
- Provide alt text for images
- Ensure sufficient color contrast
- Make forms keyboard accessible

### SEO

- Use proper heading hierarchy (h1 → h2 → h3)
- Include meta tags in index.html
- Use descriptive link text
- Add structured data for publications

## Troubleshooting

### Common Issues

**Broken Images**:
- Check file path is relative: `assets/images/...`
- Verify file exists in `public/assets/images/`
- Check file extension matches actual file

**Navigation Not Working**:
- Verify href uses hash: `href="#page-name"`
- Check router has matching case
- Ensure render function exists

**Styles Not Applied**:
- Check CSS variable names match
- Verify class names are correct
- Clear browser cache

**Page Not Scrolling to Top**:
- Check mount() function is called
- Verify window.scrollTo() is present

## Maintenance

### Regular Updates

- **Publications**: Add new papers as published
- **News**: Add announcements and media coverage
- **Team**: Update member photos and information
- **CV**: Replace PDF when updated

### Testing

Test in multiple browsers:
- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Backup

- Keep source images in Heat-Shots/ and Pictures/
- Backup PDF files before replacing
- Commit frequently to Git
- Tag releases for major updates

## Security

- No sensitive data in code
- Forms should validate server-side (when implemented)
- Use HTTPS for deployment
- Keep dependencies updated (Swiper.js)

## Performance Optimization

- Optimize images before uploading (compress, resize)
- Use appropriate image formats (JPEG for photos, PNG for graphics)
- Minimize CSS and JavaScript for production
- Enable caching on server

## Future Enhancements

Potential features to add:
- [ ] Backend for contact form processing
- [ ] Search functionality for publications
- [ ] RSS feed for news
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Member profile pages
- [ ] Research project detail pages
