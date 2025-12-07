# Safe Plastomers Pvt Ltd - Website

A modern, fully responsive website for Safe Plastomers Pvt Ltd built with React.

## Features

- 🎨 **Modern Design**: Clean and professional UI inspired by contemporary construction company websites
- 📱 **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- ⚡ **Dynamic & Interactive**: Smooth animations, hover effects, and interactive elements
- 🚀 **Fast Performance**: Optimized React components with efficient rendering
- 🎯 **SEO Friendly**: Semantic HTML structure and proper meta tags

## Pages

- **Home**: Hero section, services overview, and company introduction
- **Services**: Detailed service offerings (Commercial, Residential, Consulting, Custom Manufacturing)
- **Projects**: Portfolio showcase of completed projects
- **About**: Company story, mission, and values
- **Contact**: Contact form and company information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 (Custom responsive styles)
- Google Fonts (Inter)

## Project Structure

```
SafePlastomer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── ServicesSection.js
│   │   └── AboutSection.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Update Company Information

Edit the following files to update company details:
- `src/components/Footer.js` - Footer contact information
- `src/pages/Contact.js` - Contact page details
- `src/components/AboutSection.js` - Company description

### Change Colors

The primary accent color is `#ff6b35` (orange). To change it, search and replace this color value in all CSS files.

### Update Images

Replace image URLs in:
- `src/components/Hero.js` - Hero background image
- `src/components/AboutSection.js` - About section image
- `src/pages/Projects.js` - Project images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and belongs to Safe Plastomers Pvt Ltd.

