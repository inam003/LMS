# LMS – Learning Management System

A role-based Learning Management System frontend built with React and Vite. It provides separate workspaces for students, teachers, and administrators, plus a public landing page and an online admission portal.

**Live demo:** https://lms-eight-orcin.vercel.app

## Features

### Public
- Landing page
- Login and signup
- Admission application with account creation, document uploads, and application submission (Supabase)

### Student Workspace
- Dashboard overview
- Courses and coursework
- Exams and results
- Progress and profile
- Announcements and contact

### Teacher Workspace
- Dashboard overview
- Assignments and quizzes
- Exams and grading
- Student management and announcements

### Admin Workspace
- Dashboard overview
- User and course management
- Content management and grading
- Finance and support
- Communications

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Routing:** React Router DOM v6
- **Backend services:** Supabase (authentication, storage, database)
- **Styling:** Tailwind CSS 3, tailwindcss-animate, shadcn/ui
- **UI primitives:** Radix UI
- **Forms and validation:** React Hook Form + Zod
- **Tables:** TanStack React Table
- **Charts:** Recharts
- **Dates:** date-fns, react-day-picker
- **Icons:** Lucide React, Font Awesome 4.7
- **Linting:** ESLint 9
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm
- A Supabase project

### Installation

```bash
git clone https://github.com/inam003/LMS.git
cd LMS
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Locally

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Build for production into `dist`    |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |

## Project Structure

```
LMS/
├── public/
├── src/
│   ├── App.jsx                  # Router and app entry
│   ├── Dashboards/
│   │   ├── StudentsDashboard.jsx
│   │   ├── TeachersDashboard.jsx
│   │   └── AdminDashboard.jsx
│   ├── Pages/
│   │   ├── LandingPage/         # Public landing page
│   │   ├── Public/              # Admission portal
│   │   ├── Student/             # Courses, Exams, Progress, Announcements
│   │   ├── Teacher/             # Assignments, Grading, Students
│   │   ├── Admin/               # Users, Content, Finance, Communication
│   │   └── Login.jsx
│   ├── components/ui/           # shadcn/ui components
│   └── lib/
├── components.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## Path Alias

`@` maps to `src`:

```js
import { Button } from "@/components/ui/button";
```

## Deployment

The project is deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so client-side routing works on refresh. Add the Supabase environment variables in your Vercel project settings.

## License

Private project.
