<div align="center">

# Raj Kumar Singh — Cybersecurity Portfolio

A fast, responsive portfolio showcasing my work as a cybersecurity professional and full-stack developer. Built with React, Vite, and Tailwind CSS, the site features smooth animations, full-screen section navigation, and a projects grid with GitHub/live links to security‑focused tools and applications.

</div>

---

## ✨ Features

- Lightning-fast dev experience with Vite and HMR
- Responsive design powered by Tailwind CSS
- Smooth animations with Framer Motion
- Full-screen sections with scroll snap behavior
- Security‑oriented projects section showcasing cybersecurity tools and research
- Component-driven structure: Hero, About, Skills, Projects, SocialProof, Contact

## 🧰 Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Icons

## 📦 Project Structure

```
Portfolio1/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
├─ public/
│  └─ vite.svg
└─ src/
	 ├─ main.jsx
	 ├─ App.jsx
	 ├─ index.css
	 ├─ Page.jsx
	 ├─ Section.jsx
	 ├─ useParallax.js
	 ├─ assets/
	 │  ├─ portfolio.jpg
	 │  ├─ IoT.jpg
	 │  ├─ PasswordSecurity.jpeg
	 │  ├─ Malware.jpg
	 │  ├─ api.jpeg
	 │  └─ ...
	 ├─ component/
	 │  ├─ Hero.jsx
	 │  ├─ About.jsx
	 │  ├─ Skills.jsx
	 │  ├─ Project.jsx
	 │  ├─ Contact.jsx
	 │  └─ NavBar.jsx
	 └─ constants/
			└─ index.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run (development)
```bash
npm run dev
```
The app runs by default at http://localhost:5173 (Vite may choose another port if busy; the console will show the exact URL).

### Build (production)
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## ⚙️ Environment & Configuration
- Tailwind is set up via `tailwind.config.js` and `postcss.config.js`.
- Global styles and scroll snap behavior live in `src/index.css`.
- Project data lives in `src/constants/index.js` under `PROJECTS` and `contact`.

## 🖼️ Managing Projects and Images
- Add/edit projects in `src/constants/index.js`:
	- `title`, `image`, `description`, `skills`, and optional `githubLink` and `liveLink`
- Place images in `src/assets/` and import them at the top of `src/constants/index.js`.
- Example snippet:
```js
import myAppImg from "../assets/my-app.png";

export const PROJECTS = [
	{
		title: "My App",
		image: myAppImg,
		description: "Short description...",
		skills: ["React", "Tailwind"],
		githubLink: "https://github.com/username/my-app",
		liveLink: "https://my-app.example.com"
	}
];
```

## 🧭 Common Issues & Fixes
- Port already in use: Vite will automatically pick another port; check the terminal for the URL.
- Stale assets (images not updating):
	- Hard refresh (Ctrl+Shift+R), or open in Incognito
	- Ensure correct file extension casing (e.g., `.jpeg` vs `.jpg`)
	- Restart dev server
- “Failed to load resource: net::ERR_CONNECTION_REFUSED” in console:
	- Remove any stray dev scripts like `<script src="http://localhost:8097"></script>` from `index.html`.

## 🛠️ Scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build locally

## 📬 Contact
- Email: 29rajkumarsingh@gmail.com
- Phone: +91 7903689873
- LinkedIn/GitHub/Twitter links can be added to the NavBar or Contact section.

## 🪪 License
This project is open-source; feel free to use it as a template for your own portfolio.
