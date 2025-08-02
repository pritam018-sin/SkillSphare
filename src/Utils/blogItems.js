export const blogItems = [
  {
    id: 1,
    title: "Mastering React with Real Projects",
    description: "Learn how to level up your React skills by building real-world applications. Discover tips, patterns, and project ideas.",
    date: "August 1, 2025",
    author: "Pritam Singh",
    tag: "React",
    content: `
### Why Real Projects Matter

Building real-world apps helps bridge the gap between theory and practice. You learn how to deal with routing, error handling, and performance optimization.

### Project Ideas to Get Started

- Task Manager with drag-and-drop
- Full authentication system using Firebase or JWT
- E-commerce site with Stripe payments

### Tips for Success

- Break the UI into reusable components
- Use React DevTools to debug efficiently
- Prioritize code readability and folder structure
`,
  },
  {
    id: 2,
    title: "How Tailwind CSS Changed My Workflow",
    description: "A deep dive into why Tailwind CSS is the perfect utility-first framework for fast, modern frontend development.",
    date: "July 28, 2025",
    author: "Pritam Singh",
    tag: "Tailwind",
    content: `
### The Power of Utility Classes

Tailwind lets you style rapidly without writing custom CSS. Classes like \`bg-gradient-to-r\`, \`p-4\`, and \`rounded-xl\` save tons of time.

### No More Context Switching

You stay in your JSX file, not jumping between CSS files and HTML.

### Tailwind + Design Systems

Use Tailwind with Headless UI or shadcn/ui to create scalable component libraries with dark mode, transitions, and accessibility baked in.
`,
  },
  {
    id: 3,
    title: "Creating Glassmorphism UI in React",
    description: "Learn how to create beautiful glassmorphism cards, modals, and buttons using Tailwind and modern CSS techniques.",
    date: "July 24, 2025",
    author: "Pritam Singh",
    tag: "UI/UX",
    content: `
### What is Glassmorphism?

It’s a frosted-glass style UI using background blur, semi-transparency, and borders. It gives a futuristic feel.

### CSS Example

\`\`\`css
backdrop-filter: blur(20px);
background-color: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.2);
\`\`\`

### Components to Try

- Login modals
- Dashboard cards
- Notification pop-ups

Combine with hover effects and transitions for premium UX.
`,
  },
  {
    id: 4,
    title: "Why Framer Motion Feels Magical",
    description: "Explore how animation with Framer Motion can take your frontend apps to the next level — with practical examples.",
    date: "July 20, 2025",
    author: "Pritam Singh",
    tag: "Animation",
    content: `
### The Simplicity of Motion

Just wrap a div with \`motion.div\` and add props like \`initial\`, \`animate\`, and \`exit\`.

### Code Example

\`\`\`jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Hello World
</motion.div>
\`\`\`

### Use Cases

- Route transitions
- Modal fade/slide
- Button hover animations

Animations improve perceived performance and UX delight.
`,
  },
  {
    id: 5,
    title: "Top 5 React Patterns You Should Know",
    description: "Cleaner code, more scalable components — here are 5 React patterns that helped me write better frontend code.",
    date: "July 16, 2025",
    author: "Pritam Singh",
    tag: "Best Practices",
    content: `
### 1. Compound Components

Used in form groups, modals, or accordions.

### 2. Render Props

Great for reusing logic like animations or hover tracking.

### 3. Higher-Order Components (HOCs)

Functions that enhance components with new props or behavior.

### 4. Custom Hooks

Encapsulate reusable logic like \`useToggle\`, \`useScroll\`.

### 5. Context + Reducer

Ideal for app-wide state like themes or auth.
`,
  },
  {
    id: 6,
    title: "A Beginner’s Guide to Vite + React Setup",
    description: "Learn how to set up a blazing-fast Vite + React environment and start coding in seconds.",
    date: "July 10, 2025",
    author: "Pritam Singh",
    tag: "Tooling",
    content: `
### Why Vite?

- Instant startup
- Fast HMR (Hot Module Reloading)
- Out-of-the-box support for JSX, TS, CSS modules

### Setup Steps

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

### What to Add Next?

- ESLint + Prettier
- Tailwind setup
- Absolute imports via \`vite.config.js\`
`,
  },
  {
    id: 7,
    title: "Design Tips for Frontend Developers",
    description: "Not a designer? No worries. These practical UI tips can help any developer create more beautiful UIs.",
    date: "July 5, 2025",
    author: "Pritam Singh",
    tag: "Design",
    content: `
### Use a 4/8px Spacing System

Stick to consistent spacing to improve layout flow.

### Pick 2 Fonts, Max

Use Google Fonts like \`Space Grotesk\` or \`Inter\`. Avoid mixing too many.

### Embrace Whitespace

Don't clutter. Let elements breathe.

### Bonus: Use Heroicons or Lucide

Modern icon sets that are developer-friendly and stylish.
`,
  },
];


export const blogData = [
  {
    title: "React 19 Released!",
    description: "React 19 is finally here with a bunch of performance updates, new APIs and automatic memoization features...",
    date: "Aug 1, 2025",
    category: "News",
  },
  {
    title: "Understanding useEffect",
    description: "The useEffect hook lets you synchronize components with external systems. In this blog, we'll explore different patterns of using useEffect properly in real-world apps...",
    date: "Jul 28, 2025",
    category: "Blog",
  },
  {
    title: "Top 10 Free Reading Resources for Devs",
    description: "Looking for high-quality resources to improve your frontend or backend skills? Here are 10 fantastic websites offering books, articles, and courses for free...",
    date: "Jul 25, 2025",
    category: "Reading",
  },
  {
    title: "Build a Blog App with MERN",
    description: "In this step-by-step tutorial, we’ll walk through building a fully functional blog app using the MERN stack with authentication, CRUD features, and rich text editing.",
    date: "Jul 22, 2025",
    category: "Tutorial",
  },
  
];
