Pasupati Infrastructure 🏗️

«A premium corporate website for a construction and infrastructure company, built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.»

Pasupati Infrastructure is a modern corporate website designed to present a construction and infrastructure company's services, projects, values, and contact information through a polished and responsive digital experience.

The project focuses on premium UI/UX, responsive design, component-driven architecture, structured content, subtle motion, SEO, and performance-conscious frontend development.

🌐 Live Demo

"Visit Pasupati Infrastructure →" (https://pasupatiinfra.netlify.app/)

---

🚀 Overview

The website provides a professional digital presence for Pasupati Infrastructure, showcasing its work across construction, commercial properties, residential projects, and infrastructure development.

The site is organized around four primary experiences:

- Home — company introduction, featured content, principles, approach, reviews, and contact CTA
- About — company story and values
- Projects — construction project showcase and gallery
- Contact — enquiry and company contact information

The live website follows a strong corporate narrative around quality, responsibility, craftsmanship, and long-term vision.

---

✨ Features

🏗️ Corporate Website

The homepage combines multiple reusable sections into a cohesive corporate experience:

- Premium hero section
- Company introduction
- About section
- Construction categories
- Why Choose Us / approach section
- Client perspective / reviews
- Contact CTA
- Global navigation
- Global footer

The homepage is composed from focused React components rather than a single monolithic page component.

---

📁 Project Showcase

The Projects section presents Pasupati Infrastructure's construction work through structured project data and dedicated project components.

Project content is separated from presentation logic, allowing project information to be maintained independently from the UI.

---

🖼️ Project Gallery

The website contains a large construction project image gallery.

Gallery images are represented through a typed data structure:

ProjectImage
├── id
├── src
└── alt

This keeps the gallery presentation reusable while allowing the underlying project imagery and metadata to be maintained independently.

---

📱 Responsive UI/UX

The website is designed for:

- Desktop
- Tablet
- Mobile

The interface uses responsive layouts, adaptive navigation, scalable typography, structured spacing, and mobile-conscious component design.

---

🧱 Architecture

Pasupati Infrastructure uses the Next.js App Router with a component-driven architecture.

The application separates routes, reusable components, structured content, and TypeScript models.

                    PASUPATI INFRASTRUCTURE
                              │
                         Next.js App
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
      App Router          Components             Data
          │                   │                   │
     ┌────┼────┐       ┌──────┼──────┐      ┌─────┼─────┐
     │    │    │       │      │      │      │     │     │
   About Projects Contact  Home  Layout  UI   Projects About
                              │
                              ▼
                       TypeScript Types

---

🧩 Component Architecture

The component structure is organized around application domains:

src/components/
│
├── about/
├── contact/
├── home/
├── layout/
├── projects/
└── ui/

This keeps individual sections focused and makes the application easier to maintain and extend.

Global elements such as the Navbar and Footer are implemented in the shared layout layer and rendered across the application.

---

🗂️ Content Architecture

A key architectural decision is separating content from presentation.

Structured content is maintained through dedicated data modules:

src/data/
│
├── about.ts
├── constructionCategories.ts
├── Contact.ts
└── projects.ts

This means project and company information can be updated without requiring major changes to presentation components.

---

🧠 TypeScript Architecture

The project uses TypeScript models for structured application data.

For example, gallery content is represented through a dedicated "ProjectImage" type.

src/types/
│
├── about.ts
└── projects.ts

Typed content provides better consistency between the data layer and UI components and helps reduce invalid data structures.

---

🎨 UI/UX & Visual Design

The visual direction is intentionally designed around a premium construction and infrastructure aesthetic.

The interface emphasizes:

- Strong visual hierarchy
- Architectural imagery
- Professional typography
- Structured layouts
- Premium corporate branding
- Clear calls to action
- Responsive presentation
- Subtle interactive motion
- Visual storytelling

The design system uses a combination of deep navy, blue, gold, white, architectural imagery, grid-inspired elements, and restrained glass-style surfaces to create a professional infrastructure-oriented identity.

---

🎬 Motion & Interaction

Framer Motion is used throughout the interface to enhance the visual experience.

Motion is used for:

- Section entrances
- Component transitions
- Interactive elements
- Navigation interactions
- Visual storytelling

The animation system is intentionally restrained so that motion supports the content rather than overwhelming it.

---

🔍 SEO & Metadata

The application uses Next.js metadata configuration to provide structured search-engine and browser metadata.

The root layout defines:

- Page title
- Dynamic title template
- Description
- Keywords
- Author
- Creator
- Publisher
- Metadata base URL
- Robots configuration

The title system follows:

Pasupati Infrastructure
        ↓
Page Title | Pasupati Infrastructure

This provides consistent branding while allowing individual routes to define their own metadata.

---

⚡ Performance

The project is built with a lightweight modern frontend stack and follows performance-conscious practices including:

- Next.js App Router
- Component-based architecture
- Reusable components
- Structured content/data separation
- Minimal dependency footprint
- Controlled animation
- Responsive layouts
- Static content where appropriate

The goal is to maintain a premium visual experience without unnecessarily increasing application complexity.

---

📁 Project Structure

src/
│
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── layout/
│   ├── projects/
│   └── ui/
│
├── data/
│   ├── about.ts
│   ├── constructionCategories.ts
│   ├── Contact.ts
│   └── projects.ts
│
├── lib/
│
└── types/
    ├── about.ts
    └── projects.ts

---

🛠️ Tech Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

UI & Animation

- Framer Motion
- Lucide React

Architecture

- Next.js App Router
- Component-driven architecture
- Reusable UI components
- Typed content/data modules
- TypeScript domain models

Development

- ESLint
- Git
- GitHub

Deployment

- Netlify

---

⚙️ Getting Started

Prerequisites

- Node.js
- npm
- Git

Installation

Clone the repository:

git clone <repository-url>

Navigate into the project:

cd mission-pashupati

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:3000

---

📜 Available Scripts

Development

npm run dev

Starts the Next.js development server.

Production Build

npm run build

Creates an optimized production build.

Production Server

npm run start

Starts the production server.

Lint

npm run lint

Runs ESLint.

---

🧠 Engineering Highlights

Pasupati Infrastructure demonstrates practical experience with:

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Component-driven architecture
- Reusable UI components
- Typed content architecture
- Project/gallery data modeling
- Responsive UI/UX
- SEO metadata
- Corporate website architecture
- Performance-conscious frontend development
- Modern visual design

---

🗺️ Future Improvements

Potential future development areas include:

- CMS integration
- Dynamic project management
- Advanced project filtering
- Contact form backend integration
- Analytics
- Additional SEO optimization
- Accessibility auditing
- Performance monitoring
- Responsive image optimization

---

👨‍💻 Author

Utsav Karki

Software Engineer | Full-Stack Developer

Pasupati Infrastructure is a portfolio project focused on building a premium corporate web experience using modern Next.js architecture, responsive UI/UX, structured content, and motion design.

Tech Focus

Next.js • React • TypeScript • Tailwind CSS • Framer Motion • Responsive UI/UX

---

⭐ Project Status

Portfolio Project

Pasupati Infrastructure is a modern corporate website designed to showcase construction and infrastructure services through a responsive, visually focused, and maintainable Next.js application.

Live: "pasupatiinfra.netlify.app" (https://reference-url-citation.invalid/3)