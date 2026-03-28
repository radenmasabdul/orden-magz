<div align="center">
  
# 📖 The Orden Magz  
# All the stories worth reading

</div>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" width="50" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/vite.svg" width="50" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/tailwindcss.svg" width="50" />
</p>

#
This application is a frontend implementation for the needs of Technical Test Frontend Developers at PT. Orde Digital Intelektual.

## ✨ Features

- 📰 **Article List** — Displays a list of articles fetched from the provided GitHub Gist data source
- 📢 **Sponsored Ads** — Sponsored articles are automatically inserted at prime number indices greater than 3 (e.g. 5, 7, 11, 13, ...)
- 🎨 **Distinct Sponsored UI** — Sponsored ads have a visually different appearance compared to regular articles
- 📱 **Responsive Design** — UI implementation based on the provided Figma mockup
- 🧪 **Unit Testing** — Component and composable tests written using Vitest & Vue Test Utils

## 🚀 Tech Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Framework** | Vue 3 | Progressive JavaScript framework for building user interfaces |
| **Language** | TypeScript | Strongly typed superset of JavaScript for safer, scalable code |
| **Build Tool** | Vite | Lightning-fast frontend build tool and dev server |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework for rapid UI development |
| **State Management** | Pinia | Intuitive and type-safe state management for Vue |
| **Routing** | Vue Router v5 | Official router for Vue.js to handle page navigation |
| **UI Components** | Reka UI, Lucide Vue Next | Headless UI primitives and beautiful icon library for Vue |
| **HTTP Client** | Axios | Promise-based HTTP client for making API requests |
| **Utilities** | VueUse, clsx, tailwind-merge, CVA | Collection of composables and class name utilities |
| **Testing** | Vitest, Vue Test Utils | Fast unit testing framework with Vue component testing support |

## 📦 Installation

### Prerequisites
- **Node.js** version `18` or higher
- **npm**, **yarn**, or **pnpm**

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/radenmasabdul/orden-magz.git
cd orden-magz
```

**2. Install dependencies**
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

**3. Start the development server**
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

**4. Open in browser**
```
http://localhost:5173
```

## 📁 Project Structure
```
orden-magz/
├── public/                         # Static assets served directly
├── src/
│   ├── assets/                     # Images, fonts, and other media files
│   ├── components/                 # Reusable Vue components
│   │   ├── global/                 # App-wide layout components
│   │   ├── ui/                     # Base UI component library (Reka UI)
│   │   └── Layout.vue              # Main layout wrapper component
│   ├── composables/                # Shared Vue composables (reusable logic)
│   ├── features/                   # Feature-based modules (domain-driven)
│   ├── lib/                        # Third-party library configurations
│   ├── pages/                      # Top-level page views
│   ├── router/                     # Vue Router configuration
│   ├── stores/                     # Pinia state management stores
│   ├── styles/                     # Global CSS styles
│   ├── test/                       # Unit & component tests
│   │   ├── components/             # Tests for Vue components
│   │   └── composables/            # Tests for composables
│   ├── types/                      # Global TypeScript type definitions
│   ├── App.vue                     # Root Vue component
│   └── main.ts                     # Application entry point
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignored files configuration
├── components.json                 # UI components configuration
├── index.html                      # HTML entry point
├── package.json                    # Project dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build configuration
```

## ⚙️ Environment Variables

Copy the `.env.example` file to `.env` then adjust the values:
```bash
cp .env.example .env
```

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL for the API endpoint | `https://api.example.com` |

## 🧪 Running Tests
```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run
```

## 🌐 Live Demo

Access the live application here:

🔗 **[https://orden-magz.vercel.app](https://orden-magz.vercel.app)**

## 📱 Browser Support

This application supports all modern browsers that support **ES2015+**.

## 📄 License

This project is **private** and not licensed for public use.
