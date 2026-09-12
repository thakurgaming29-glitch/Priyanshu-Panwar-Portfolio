# Thakur Priyanshu Panwar - Developer Portfolio

A modern, responsive, and professional personal portfolio website for **Thakur Priyanshu Panwar**, Website Developer with a Bachelor of Computer Applications (BCA).

---

## 🌟 Features

- **Modern Developer Aesthetic**: Sleek dark theme with refined emerald accents, subtle glowing backdrops, and high-contrast typography.
- **Sticky Navbar with Active Tracking**: Smooth scroll navigation across Home, About, Skills, Services, Projects, and Contact sections with a fully responsive mobile drawer menu.
- **Interactive Hero Visual**: Developer code-editor showcase with tabbed interfaces (`Developer.tsx`, `TechStack.json`, `Responsive.css`) and quick copy feature.
- **Pure & Accurate Profile**: Strictly displays real credentials (BCA degree, Website Developer) without any invented metrics or fake achievements.
- **Dynamic Projects Showcase**: Easily add or update projects by editing the reusable array in `src/data/portfolioData.ts`. If no projects are present, a professional "Projects coming soon" state is displayed automatically.
- **Direct Communication**:
  - Direct WhatsApp button opening `https://wa.me/12059948255` with a pre-filled client inquiry message.
  - Direct Email button triggering `mailto:priyanshupanwar19316@gmail.com`.
  - Configurable social links for GitHub, LinkedIn, and Instagram.
  - Modern project inquiry form ready for backend or email API connection.
- **Mobile-First & 100% Responsive**: Tested for smooth layout across phones, tablets, laptops, and ultra-wide desktops without horizontal overflow.

---

## 📂 Project Structure

```text
├── netlify.toml               # Netlify build and redirect configuration
├── package.json               # Dependencies and scripts
├── index.html                 # Main entry point with SEO metadata
├── src/
│   ├── main.tsx               # App bootstrap
│   ├── App.tsx                # Master page layout
│   ├── index.css              # Tailwind CSS styles & custom scrollbars
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces (Project, PersonalInfo, etc.)
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data (Personal info, Projects, Skills, Services, Socials)
│   └── components/
│       ├── Navbar.tsx         # Sticky navigation with mobile hamburger
│       ├── Hero.tsx           # Hero section with interactive code editor visual
│       ├── About.tsx          # Educational background & development focus
│       ├── Skills.tsx         # Filterable tech stack cards
│       ├── Services.tsx       # 5 core web development service offerings
│       ├── Projects.tsx       # Dynamic projects grid from data array
│       ├── Contact.tsx        # WhatsApp, email, social links & contact form
│       └── Footer.tsx         # Copyright, quick links & back-to-top button
```

---

## 🛠️ How to Customize

All content is centralized in `src/data/portfolioData.ts`:

### Adding a New Project
Simply add a new object to the `projects` array:

```typescript
{
  id: 4,
  title: "My New Client Website",
  description: "A fast, responsive web application built with modern standards.",
  image: "https://your-image-url.com/preview.jpg",
  technologies: ["React", "HTML5", "CSS3", "JavaScript"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/yourusername/project",
  featured: true
}
```

### Updating Social Links
Update the `socialLinks` object in `src/data/portfolioData.ts` with your actual profile URLs when ready:

```typescript
export const socialLinks = {
  whatsapp: "https://wa.me/12059948255",
  email: "mailto:priyanshupanwar19316@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  instagram: "https://instagram.com/your-username"
};
```

---

## 💻 Local Development Instructions

1. **Clone or extract** the project files to your computer.
2. **Open a terminal** inside the project folder.
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the local development server**:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

## 🚀 Production Build Instructions

To generate the optimized static build for production:

```bash
npm run build
```

This will create a `dist/` directory containing all compiled HTML, JavaScript, CSS, and asset files.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Netlify Deployment Instructions

This project is pre-configured with `netlify.toml` for seamless deployment.

### Method 1: Git Integration (Recommended)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Netlify](https://www.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your repository.
5. Netlify will automatically detect the settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Your portfolio is live with free HTTPS and continuous deployment!

### Method 2: Netlify Drop (Manual)
1. Run `npm run build` in your terminal.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the Netlify Drop area.
4. Your website will be deployed instantly.
