import dataScience from '../assets/dataScience.webp'
import DBMS from '../assets/dbms.jpg'
import frontend from '../assets/frontend.jpg'
import DSA from '../assets/dsa.jpeg'
import Figma from '../assets/figma.webp'
import MERN from '../assets/mern.png'
import MERN1 from '../assets/mern1.jpg'
import Git from '../assets/github.png'
import NodeJS from '../assets/nodeexpress.webp'
import webPerform from '../assets/Web-Performance-Optimization-in-8-Steps.webp'
import javaOop from '../assets/java-oops-concept.webp'

export const coursesData = [
  {
    id: 1,
    title: "Full-Stack Web Development (MERN)",
    category: "Web Development",
    level: "Intermediate to Advanced",
    duration: "6 Months",
    instructor: "Pritam Singh",
    thumbnail: MERN,
    price: "$100",
    description:
      "Master the MERN Stack by building real-world full-stack applications using MongoDB, Express, React, and Node.js.",
    syllabus: [
      "HTML, CSS, and JavaScript fundamentals",
      "React.js (Hooks, Routing, State Management)",
      "Node.js and Express APIs",
      "MongoDB CRUD operations and Mongoose",
      "JWT Authentication and Authorization",
      "Deployment on Netlify, Render, and Vercel",
    ],
    fullContent: `
### Course Overview
Dive into full-stack development with the MERN stack. Learn how to design, develop, and deploy high-performance web applications from scratch.

### What You’ll Learn
- Frontend development using React and Tailwind CSS
- Backend REST APIs with Node.js and Express
- Database integration using MongoDB and Mongoose
- Authentication using JWT and cookies
- File uploads, error handling, and validations
- Building admin dashboards and e-commerce-like features

### Projects Included
- E-commerce app
- Blog CMS
- Task management dashboard

### Who Should Enroll
Ideal for students who know basic HTML/CSS/JS and want to transition into full-stack development.

### Certification
Certificate of completion and real GitHub-ready projects for your resume.
    `,
  },
  {
    id: 2,
    title: "Data Structures & Algorithms in Java",
    category: "DSA",
    level: "Beginner to Advanced",
    duration: "4 Months",
    instructor: "Stiver Bhai",
    thumbnail: DSA,
    price: "$100",
    description:
      "Learn DSA from scratch using Java with detailed explanations and industry-level problem-solving.",
    syllabus: [
      "Time & Space Complexity",
      "Arrays, Strings, Linked Lists",
      "Stacks, Queues, HashMaps, Trees",
      "Recursion & Backtracking",
      "Greedy, DP, Graphs, and Tries",
      "Leetcode, GFG, and Interview Practice",
    ],
    fullContent: `
### Course Overview
A complete course to crack coding interviews. Designed based on Stiver Bhaiya's DSA Sheet and top interview problems.

### What You’ll Learn
- Java fundamentals relevant for DSA
- Mastery over 400+ DSA problems
- Efficient problem-solving and brute-force optimization
- Advanced topics like DP and Graphs made easy

### Daily Schedule
Solve 5 problems daily, with detailed explanations and note-taking included.

### Tools & Platforms
LeetCode, GeeksForGeeks, Java IDE, VS Code

### Certification
Completion certificate with GitHub portfolio and resume tips.
    `,
  },
  {
    id: 3,
    title: "Frontend Mastery with React & Tailwind",
    category: "Frontend",
    level: "Beginner to Intermediate",
    duration: "3 Months",
    instructor: "SkillSphere Team",
    thumbnail: frontend,
    price: "$200",
    description:
      "Build beautiful and responsive UIs using React, Tailwind CSS, and Framer Motion.",
    syllabus: [
      "React Fundamentals & JSX",
      "State, Props, Lifecycle",
      "Advanced Tailwind CSS patterns",
      "Routing with React Router",
      "Framer Motion animations",
      "Deploying on Netlify and GitHub Pages",
    ],
    fullContent: `
### Course Overview
This course teaches you how to go from zero to hero in frontend UI building. You'll learn by building components and full responsive apps.

### What You’ll Learn
- Build reusable components using React
- Tailwind CSS deep dive for layouts, themes, and responsive design
- Add animations using Framer Motion
- Create a project like SkillSphere with modern UI

### Projects Included
- Blog App
- Portfolio Website
- SkillSphere Clone

### Certification
Certificate with job-ready frontend projects.
    `,
  },
{
    id: 4,
    title: "Full Stack Web Development (MERN)",
    category: "Web Development",
    level: "Intermediate",
    duration: "16 weeks",
    instructor: "Rohan Mehta",
    thumbnail: MERN1,
    price: "$50",
    description: "Build scalable full stack web apps using MongoDB, Express.js, React, and Node.js.",
    syllabus: [
      "JavaScript & ES6+",
      "Backend with Express & MongoDB",
      "Frontend with React",
      "Authentication & Deployment"
    ],
    fullContent: `
### What You Will Learn
- End-to-end MERN architecture
- RESTful APIs and authentication
- Frontend state management
- Deployment to cloud

### Ideal For
Anyone with basic JS knowledge aiming to become a full stack developer.
`
  },
  {
    id: 5,
    title: "React + Tailwind Masterclass",
    category: "Frontend",
    level: "Intermediate",
    duration: "6 weeks",
    instructor: "Pritam Singh",
    thumbnail: frontend,
    price: "$90",
    description: "Design stunning modern UIs with React and Tailwind CSS.",
    syllabus: [
      "React components and hooks",
      "Tailwind responsive layouts",
      "UI animations with Framer Motion",
      "Project deployment"
    ],
    fullContent: `
### Key Highlights
- Tailwind utility-first workflow
- Real-world projects like portfolios and dashboards
- Advanced theming and responsiveness
`
  },
  {
    id: 6,
    title: "Next.js & SEO Optimization",
    category: "Web Performance",
    level: "Intermediate",
    duration: "4 weeks",
    instructor: "Ayesha Rahman",
    thumbnail: webPerform,
    price: "$100",
    description: "Improve page performance, SEO, and SSR using Next.js.",
    syllabus: [
      "Pages vs App router",
      "API routes and SSR",
      "Static site generation",
      "Meta tags and sitemap"
    ],
    fullContent: `
### What You'll Master
- Next.js routing strategies
- SEO best practices for ranking
- Deployment with Vercel
`
  },
  {
    id: 7,
    title: "Node.js + Express Bootcamp",
    category: "Backend",
    level: "Beginner to Intermediate",
    duration: "5 weeks",
    instructor: "Zaid Khan",
    thumbnail: NodeJS,
    price: "$110",
    description: "Build powerful backend APIs using Node.js and Express.",
    syllabus: [
      "Node.js fundamentals",
      "Express middleware",
      "MongoDB integration",
      "JWT Auth"
    ],
    fullContent: `
### Outcomes
- Full REST API with secure auth
- Use of Postman & MongoDB Compass
- MVC pattern implementation
`
  },
  {
    id: 8,
    title: "Python for Data Science",
    category: "Data Science",
    level: "Beginner",
    duration: "8 weeks",
    instructor: "Dr. Kavita Sen",
    thumbnail: dataScience,
    price: "$220",
    description: "Use Python to analyze, visualize, and gain insights from data.",
    syllabus: [
      "Pandas, Numpy, and Matplotlib",
      "Data cleaning techniques",
      "EDA and basic statistics",
      "Capstone project"
    ],
    fullContent: `
### Ideal For
Beginners looking to step into the world of data analytics using Python.
`
  },
  {
    id: 9,
    title: "SQL & DBMS from Scratch",
    category: "Databases",
    level: "Beginner",
    duration: "4 weeks",
    thumbnail: DBMS,
    price: "$100",
    instructor: "Rohan Carriappa",
    description: "Learn structured query language and database management concepts.",
    syllabus: [
      "SQL commands (DDL, DML, DQL)",
      "Joins and Subqueries",
      "ER diagrams and normalization",
      "Relational vs Non-relational DB"
    ],
    fullContent: `
### Learning Outcomes
- Write efficient SQL queries
- Understand indexing and keys
- Learn MySQL & PostgreSQL
`
  },
  {
    id: 10,
    title: "Mastering Git & GitHub",
    category: "Tools",
    level: "All Levels",
    duration: "2 weeks",
    instructor: "Nikita Sharma",
    thumbnail: Git,
    price: "$50",
    description: "Track your code like a pro and collaborate with confidence.",
    syllabus: [
      "Git workflow (clone, commit, push)",
      "Branching strategies",
      "Resolving merge conflicts",
      "GitHub collaboration"
    ],
    fullContent: `
### Why This Matters
Every developer must know Git to collaborate and contribute in teams and open-source.
`
  },
  {
    id: 11,
    title: "Java Programming + OOP",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    instructor: "Amitabh Verma",
    thumbnail: javaOop,
    price: "$110",
    description: "Learn Java from scratch and master object-oriented principles.",
    syllabus: [
      "Java syntax and control flow",
      "OOP: Classes and Inheritance",
      "Exception Handling",
      "Collections and Streams"
    ],
    fullContent: `
### After This Course
- Write scalable OOP Java code
- Solve DSA problems in Java
- Build console-based apps
`
  },
  {
    id: 12,
    title: "Building UI with Figma",
    category: "Design",
    level: "Beginner",
    duration: "3 weeks",
    instructor: "Ritika Singh",
    thumbnail: Figma,
    price: "$90",

    description: "Design intuitive user interfaces with Figma’s collaborative tools.",
    syllabus: [
      "Frames and Components",
      "Auto layout & constraints",
      "Prototyping and animation",
      "Design system setup"
    ],
    fullContent: `
### Why Take This
Gain UI design skills that every frontend developer and product designer needs.
`
  },
  {
    id: 13,
    title: "DSA for Placements in Java",
    category: "Computer Science",
    level: "Intermediate",
    duration: "10 weeks",
    instructor: "Stiver Bhaiya",
    thumbnail: DSA,
    price: "$600",
    description: "Crack coding interviews with structured DSA in Java.",
    syllabus: [
      "Arrays, Strings, and Recursion",
      "Linked List, Stack, Queue",
      "Binary Trees, Graphs",
      "DP and Backtracking"
    ],
    fullContent: `
### Best For
B.Tech students & job seekers preparing for FAANG and service-based interviews.
`
  }


];
