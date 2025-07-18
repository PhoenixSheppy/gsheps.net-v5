# Contact Card Website

A modern, responsive contact card website built with Next.js and Tailwind CSS. Features a sleek dark theme with interactive animations and a professional layout perfect for personal branding.

![Demo](https://raw.githubusercontent.com/PhoenixSheppy/gsheps.net-v5/main/demo.gif)

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[React 18](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <directory>
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   └── ContactCard.tsx    # Main contact card component
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## 📱 Responsive Design

The contact card is fully responsive and adapts to different screen sizes:
- **Desktop**: Full layout with sidebar buttons
- **Tablet**: Optimized spacing and proportions
- **Mobile**: Stacked layout for better mobile experience

## 🎭 Animations

Interactive hover effects include:
- Profile picture tilt and scale animation
- Social media icons with matching tilt effects
- Smooth color transitions on buttons
- Professional easing curves for polished feel

---



[![Hosted on Cloudflare Pages](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Pages-f38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Built with Kiro.dev](https://img.shields.io/badge/Built%20with-Kiro.dev-6366f1?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuODAwODEgMTguNTY2MUMxLjMyMzA2IDI0LjA1NzIgNi41OTkwNCAyNS40MzQgMTAuNDkwNCAyMi4yMjA1QzExLjYzMzkgMjUuODI0MiAxNS45MjYgMjMuMTM2MSAxNy40NjUyIDIwLjM0NDVDMjAuODU3OCAxNC4xOTE1IDE5LjQ4NzcgNy45MTQ1OSAxOS4xMzYxIDYuNjE5ODhDMTYuNzI0NCAtMi4yMDk3MiA0LjY3MDU1IC0yLjIxODUyIDIuNTk1ODEgNi42NjQ5QzIuMTExMzYgOC4yMTk0NiAyLjEwMjg0IDkuOTg3NTIgMS44Mjg0NiAxMS44MjMzQzEuNjkwMTEgMTIuNzQ5IDEuNTkyNTggMTMuMzM5OCAxLjIzNDM2IDE0LjMxMzVDMS4wMjg0MSAxNC44NzMzIDAuNzQ1MDQzIDE1LjM3MDQgMC4yOTk4MzMgMTYuMjA4MkMtMC4zOTE1OTQgMTcuNTA5NSAtMC4wOTk4ODAyIDIwLjAyMSAzLjQ2Mzk3IDE4LjcxODZWMTguNzE5NUwzLjgwMDgxIDE4LjU2NjFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAuOTYxNCAxMC40NDEzQzkuOTcyMDIgMTAuNDQxMyA5LjgyNDIyIDkuMjU4OTMgOS44MjQyMiA4LjU1NDA3QzkuODI0MjIgNy45MTc5MSA5LjkzODI0IDcuNDEyNCAxMC4xNTQyIDcuMDkxOTdDMTAuMzQ0MSA6LjgxMDAzIDEwLjYxNTggNi42NjY5OSAxMC45NjE0IDYuNjY2OTlDMTEuMzA3MSA2LjY2Njk5IDExLjYwMzYgNi44MTIyOCAxMS44MTI4IDcuMDk4OTJDMTIuMDUxMSA3LjQyNTU0IDEyLjE3NyA3LjkyODYxIDEyLjE3NyA4LjU1NDA3QzEyLjE3NyA5LjczNTkxIDExLjcyMjYgMTAuNDQxMyAxMC45NjE2IDEwLjQ0MTNIMTAuOTYxNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNS4wMzE4IDEwLjQ0MTNDMTQuMDQyMyAxMC40NDEzIDEzLjg5NDUgOS4yNTg5MyAxMy44OTQ1IDguNTU0MDdDMTMuODk0NSA3LjkxNzkxIDE0LjAwODYgNy40MTI0IDE0LjIyNDUgNy4wOTE5N0MxNC40MTQ0IDYuODEwMDMgMTQuNjg2MSA2LjY2Njk5IDE1LjAzMTggNi42NjY5OUMxNS4zNzc0IDYuNjY2OTkgMTUuNjczOSA2LjgxMjI4IDE1Ljg4MzEgNy4wOTg5MkMxNi4xMjE0IDcuNDI1NTQgMTYuMjQ3NCA3LjkyODYxIDE2LjI0NzQgOC41NTQwN0MxNi4yNDc0IDkuNzM1OTEgMTUuNzkzIDEwLjQ0MTMgMTUuMDMxOSAxMC40NDEzSDE1LjAzMThaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K&logoColor=white)](https://kiro.dev/)[![
Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Built with Tailwind CSS](https://img.shields.io/badge/Built%20with-Tailwind%20CSS-06b6d4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)