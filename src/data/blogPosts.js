export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React: A Complete Guide",
    slug: "getting-started-with-react",
    excerpt: "Learn the fundamentals of React and build your first application. This comprehensive guide covers everything from components to hooks.",
    content: `# Getting Started with React: A Complete Guide

React has become one of the most popular JavaScript libraries for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React and help you build your first application.

## What is React?

React is a JavaScript library developed by Facebook for building user interfaces, particularly web applications. It allows developers to create reusable UI components.

## Key Concepts

### Components
Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

\`\`\`jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
\`\`\`

### JSX
JSX is a syntax extension that allows you to write HTML-like code in JavaScript.

### Props
Props (short for properties) are how you pass data from parent to child components.

### State
State allows components to create and manage their own data.

## Getting Started

To create a new React application, you can use Create React App:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Conclusion

React is a powerful tool for building modern web applications. With its component-based architecture and extensive ecosystem, it's an excellent choice for developers of all levels.`,
    author: "Lalit Kumar Gupta",
    date: "2024-01-15",
    category: "Technology",
    tags: ["React", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    featured: true
  },
  {
    id: 2,
    title: "Mastering Modern JavaScript: ES6+ Features",
    slug: "mastering-modern-javascript",
    excerpt: "Explore the powerful features introduced in ES6 and beyond. Learn about arrow functions, destructuring, promises, and more.",
    content: `# Mastering Modern JavaScript: ES6+ Features

JavaScript has evolved significantly since ES6 (ECMAScript 2015). This article covers the most important modern JavaScript features that every developer should know.

## Arrow Functions

Arrow functions provide a more concise syntax for writing functions:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Destructuring

Destructuring allows you to extract values from arrays or objects:

\`\`\`javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
\`\`\`

## Promises and Async/Await

Modern JavaScript provides powerful tools for handling asynchronous operations:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Template Literals

Template literals make string interpolation easier:

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;
\`\`\`

## Conclusion

Mastering these modern JavaScript features will make you a more efficient and effective developer.`,
    author: "Lalit Kumar Gupta",
    date: "2024-01-10",
    category: "Programming",
    tags: ["JavaScript", "ES6", "Web Development"],
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
    featured: true
  },
  {
    id: 3,
    title: "Building Responsive Websites with TailwindCSS",
    slug: "responsive-websites-tailwindcss",
    excerpt: "Discover how to create beautiful, responsive websites quickly using TailwindCSS utility-first CSS framework.",
    content: `# Building Responsive Websites with TailwindCSS

TailwindCSS is a utility-first CSS framework that allows you to rapidly build modern, responsive websites without writing custom CSS.

## Why TailwindCSS?

- **Rapid Development**: Build UIs faster with utility classes
- **Responsive by Default**: Easy mobile-first responsive design
- **Customizable**: Configure everything to match your design system
- **Small Bundle Size**: Only includes the CSS you use

## Getting Started

Install TailwindCSS in your project:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

## Responsive Design

TailwindCSS makes responsive design easy with breakpoint prefixes:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
\`\`\`

## Utility Classes

Use utility classes for styling:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
\`\`\`

## Conclusion

TailwindCSS is an excellent choice for developers who want to build modern, responsive websites quickly.`,
    author: "Lalit Kumar Gupta",
    date: "2024-01-05",
    category: "Design",
    tags: ["TailwindCSS", "CSS", "Web Design"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    featured: false
  },
  {
    id: 4,
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development in the coming years.",
    content: `# The Future of Web Development

The web development landscape is constantly evolving. Let's explore the trends and technologies that will shape the future.

## Emerging Technologies

### WebAssembly
WebAssembly allows you to run high-performance code in the browser, opening up new possibilities for web applications.

### Progressive Web Apps
PWAs combine the best of web and mobile apps, providing native-like experiences.

### Serverless Architecture
Serverless computing is changing how we build and deploy applications.

## Trends to Watch

1. **AI Integration**: AI-powered features in web applications
2. **Micro Frontends**: Breaking down large applications into smaller pieces
3. **Edge Computing**: Processing data closer to users
4. **Low-Code/No-Code**: Tools that make development more accessible

## Conclusion

The future of web development is exciting, with new technologies and approaches emerging constantly. Staying current with these trends is essential for modern developers.`,
    author: "Lalit Kumar Gupta",
    date: "2024-01-01",
    category: "Technology",
    tags: ["Web Development", "Future Tech", "Trends"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    featured: true
  },
  {
    id: 5,
    title: "Best Practices for Code Review",
    slug: "best-practices-code-review",
    excerpt: "Learn how to conduct effective code reviews that improve code quality and team collaboration.",
    content: `# Best Practices for Code Review

Code reviews are an essential part of the software development process. Here are best practices for conducting effective code reviews.

## Why Code Reviews Matter

- Catch bugs before they reach production
- Share knowledge across the team
- Maintain code quality standards
- Improve team collaboration

## Review Checklist

1. **Functionality**: Does the code work as intended?
2. **Readability**: Is the code easy to understand?
3. **Performance**: Are there any performance issues?
4. **Security**: Are there any security vulnerabilities?
5. **Testing**: Is the code properly tested?

## Giving Constructive Feedback

- Be respectful and professional
- Focus on the code, not the person
- Provide specific examples
- Suggest improvements, not just point out problems
- Acknowledge good work

## Conclusion

Effective code reviews require practice and a positive team culture. Following these practices will help your team produce better code.`,
    author: "Lalit Kumar Gupta",
    date: "2023-12-28",
    category: "Development",
    tags: ["Code Review", "Best Practices", "Teamwork"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    featured: false
  },
  {
    id: 6,
    title: "Understanding RESTful APIs",
    slug: "understanding-restful-apis",
    excerpt: "A comprehensive guide to RESTful API design principles and best practices for building robust APIs.",
    content: `# Understanding RESTful APIs

REST (Representational State Transfer) is an architectural style for designing web services. This guide covers RESTful API design principles.

## What is REST?

REST is a set of architectural principles for designing web services. RESTful APIs use HTTP methods to perform operations on resources.

## HTTP Methods

- **GET**: Retrieve data
- **POST**: Create new resources
- **PUT**: Update existing resources
- **DELETE**: Remove resources

## Best Practices

### Use Proper HTTP Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

### RESTful URLs
Use clear, resource-based URLs:
- \`/api/users\` - Get all users
- \`/api/users/123\` - Get user by ID
- \`/api/users/123/posts\` - Get posts by user

### Versioning
Version your APIs:
- \`/api/v1/users\`
- \`/api/v2/users\`

## Conclusion

Following REST principles makes your APIs predictable, maintainable, and easy to use.`,
    author: "Lalit Kumar Gupta",
    date: "2023-12-20",
    category: "Backend",
    tags: ["API", "REST", "Backend Development"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    featured: false
  }
]

export const categories = [
  "All",
  "Technology",
  "Programming",
  "Design",
  "Development",
  "Backend"
]

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getPostsByCategory = (category) => {
  if (category === "All") return blogPosts
  return blogPosts.filter(post => post.category === category)
}

