# React Context API - Theme Toggle (Dark/Light Mode)

A React project demonstrating the **Context API** for managing global theme state (dark/light mode) across the component tree without prop drilling.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4

## Project Structure

```
src/
├── context/
│   └── context.js          # ThemeContext, ThemeContextProvider, useTheme hook
├── assets/
│   └── components/
│       ├── Card.jsx         # Product card component
│       └── Theme.jsx        # Theme toggle switch component
├── App.jsx                  # Root component with theme state management
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## How It Works

1. **`context/context.js`** - Creates a `ThemeContext` with `createContext`, exports the `ThemeContextProvider` and a custom `useTheme` hook for consuming the context.
2. **`App.jsx`** - Holds the `themeMode` state (`light`/`dark`), provides `lightTheme` and `darkTheme` setter functions via the context provider, and syncs the theme class on the `<html>` element.
3. **`Theme.jsx`** - A toggle switch that calls `darkTheme()` or `lightTheme()` from context when toggled.
4. **`Card.jsx`** - A product card that responds to the current theme using Tailwind's `dark:` variants.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
