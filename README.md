# Simple Portfolio

A modern, responsive portfolio web application built with React and Vite. This project showcases personal information, featured projects, skills, and contact options in a clean, mobile-friendly UI.

## Features
- **Responsive Design:** Desktop and mobile navigation bars for seamless experience on all devices.
- **Project Showcase:** Highlight featured projects with images and descriptions.
- **Skills Section:** Display technical skills with icons and categories.
- **Contact Form:** Users can send messages via a simple contact form.
- **Social Links:** Quick access to social profiles (LinkedIn, Twitter, GitHub).

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```sh
	git clone <your-repo-url>
	cd simpleProtfolio/frontend
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` by default.

### Building for Production
```sh
npm run build
# or
yarn build
```
The production-ready files will be in the `dist/` directory.

## Project Structure
```
frontend/
  ├── public/           # Static assets (images, icons)
  ├── src/
  │   ├── components/   # Navbar, NavbarMobile, etc.
  │   ├── pages/        # Home, About, Projects, Skills, ContactUs
  │   ├── assets/       # Additional assets
  │   ├── App.jsx       # Main app routes
  │   ├── config.jsx    # Project and form data
  │   └── main.jsx      # Entry point
  ├── index.html
  ├── package.json
  └── vite.config.js
```

## Customization
- **Add Projects:** Edit `src/config.jsx` to add or update featured projects.
- **Update Skills:** Modify the `Skills.jsx` page to reflect your expertise.
- **Change Social Links:** Update links in `Home.jsx` and `ContactUs.jsx`.
- **Styling:** Tailwind CSS is used for styling. You can easily adjust colors and layouts in `index.css` or component files.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!**
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
