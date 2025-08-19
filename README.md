# 🚀 Benjamin Mwambakulu - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills as a Full-Stack Developer. Features a futuristic design with smooth animations, interactive components, and professional presentation of projects and experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.0.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.2.0-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.12-cyan)

## 🌟 Features

### 🎨 **Modern Design**
- **Futuristic UI/UX** with glassmorphism effects
- **Smooth animations** powered by Framer Motion
- **Responsive design** that works on all devices
- **Dark theme** with gradient accents and glowing elements

### 📧 **Contact System**
- **EmailJS integration** for real contact form functionality
- **Form validation** with user feedback
- **Auto-reply system** (optional)
- **Professional email templates**

### 📄 **Resume/CV Downloads**
- **Document management system** with availability controls
- **Professional download interface** with file details
- **Responsive cards** with status indicators
- **Custom format requests** through contact form

### 🛠️ **Project Showcase**
- **Interactive project cards** with hover effects
- **Technology tags** and categorization
- **Live demo and GitHub links** with conditional availability
- **Featured project highlighting**

### 🎯 **Performance Optimized**
- **Fast loading** with Vite build system
- **Optimized animations** for smooth performance
- **Lazy loading** and efficient rendering
- **SEO-friendly** structure

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/benjaminmwambakulu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your EmailJS credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## ⚙️ Configuration

### 📧 EmailJS Setup

1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Sign up and verify your email

2. **Configure Email Service**
   - Add your email provider (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Note the Template ID

4. **Update Environment Variables**
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

📖 **Detailed setup guide**: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

### 📄 Resume/CV Setup

1. **Add your documents** to `public/documents/`:
   - `benjamin-mwambakulu-resume.pdf`
   - `benjamin-mwambakulu-cv.pdf`

2. **Update availability** in `src/Essentials/content.js`:
   ```js
   documents: [
     {
       // ...
       available: true, // Change to true when file is added
       // ...
     }
   ]
   ```

### 🎨 Content Customization

Edit `src/Essentials/content.js` to customize:
- **Personal information** and contact details
- **Project showcase** with your own projects
- **Skills and technologies**
- **Social media links**
- **Resume/CV information**

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── documents/          # Resume/CV files
│   └── images/            # Project images and icons
├── src/
│   ├── components/        # React components
│   │   ├── Contact.jsx    # Contact form with EmailJS
│   │   ├── HeroSection.jsx
│   │   ├── Navigation.jsx
│   │   ├── PersonalInfo.jsx
│   │   ├── Projects.jsx   # Project showcase
│   │   └── Resume.jsx     # Resume download section
│   ├── Essentials/
│   │   ├── content.js     # Site content and data
│   │   └── getImages.js   # Image import utilities
│   ├── App.jsx           # Main app component
│   └── index.css         # Global styles and animations
├── .env                  # Environment variables
├── EMAILJS_SETUP.md     # EmailJS configuration guide
└── README.md            # This file
```

## 🛠️ Tech Stack

### **Frontend**
- **React 19.0.0** - UI library
- **Vite 6.2.0** - Build tool and dev server
- **TailwindCSS 4.0.12** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library

### **Communication**
- **EmailJS** - Contact form email service
- **React Icons 5.5.0** - Icon library

### **Development**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Netlify**
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

### **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Customization Guide

### **Adding New Projects**
1. Add project data to `src/Essentials/content.js`
2. Include project image in `public/images/`
3. Set `live` and `gitHub` boolean values for button availability

### **Updating Personal Info**
- Edit `aboutMe` section in `content.js`
- Update `contactInfo` with your details
- Modify `heroSectionText` for main heading

### **Styling Changes**
- Global styles: `src/index.css`
- Component-specific: Individual component files
- Theme colors: TailwindCSS configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Benjamin Mwambakulu**
- 🎓 Business Information Technology Student at MUST
- 💼 Full-Stack Developer
- 📍 Lilongwe, Malawi

### Connect with me:
- 📧 Email: [mwambakulubenjamin2o5@gmail.com](mailto:mwambakulubenjamin2o5@gmail.com)
- 💼 LinkedIn: [benjaminmwambakulu](https://linkedin.com/in/benjaminmwambakulu)
- 🐱 GitHub: [benjaminmwambakulu](https://github.com/benjaminmwambakulu)
- 📱 Instagram: [benjaminmwamba](https://instagram.com/benjaminmwamba)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **TailwindCSS** for utility-first styling
- **EmailJS** for contact form functionality
- **Vite** for fast development experience
- **React** community for excellent documentation

---

⭐ **Star this repository if you found it helpful!**

📞 **Need help?** Feel free to [open an issue](https://github.com/benjaminmwambakulu/portfolio/issues) or contact me directly.