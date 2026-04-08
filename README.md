# 🚀 Neetu Pradeep — MERN Stack Portfolio

A production-ready, professional portfolio website built with the MERN stack (MongoDB, Express, React, Node.js), featuring Redux Toolkit state management, Framer Motion animations, and a sleek dark UI.

---

## ✨ Features

- **Dark professional theme** with custom design system
- **Framer Motion** animations — hero entrance, scroll reveals, project cards, skill bars
- **Typing effect** in the hero section cycling through roles
- **Redux Toolkit** — global state for UI (active section, mobile menu, project filter) and contact form
- **Scroll spy** — navbar highlights the active section automatically
- **Project filter** — filter projects by tech tag with animated transitions
- **Contact form** — saves to MongoDB via Express REST API with validation
- **Rate limiting** + Helmet security on the backend
- **Fully responsive** — mobile, tablet, desktop
- **Google Fonts** — Syne (display) + DM Sans (body) + JetBrains Mono

---

## 🗂 Folder Structure

```
neetu-portfolio/
│
├── package.json                    # Root: concurrently runner
│
├── server/                         # Node.js + Express backend
│   ├── index.js                    # Server entry — middleware, routes, error handling
│   ├── .env.example                # Environment variable template
│   ├── config/
│   │   └── db.js                   # Mongoose MongoDB connection
│   ├── models/
│   │   └── Contact.model.js        # Contact schema (name, email, subject, message, status)
│   ├── controllers/
│   │   └── contact.controller.js   # submitContact, getContacts
│   └── routes/
│       └── contact.routes.js       # POST /api/contact, GET /api/contact
│
└── client/                         # React + Vite frontend
    ├── index.html
    ├── vite.config.js              # Dev proxy → :5000
    ├── tailwind.config.js          # Custom theme, colors, keyframes
    ├── postcss.config.js
    └── src/
        ├── main.jsx                # Redux Provider + ReactDOM
        ├── App.jsx                 # Router, Toaster, Navbar, Footer
        ├── index.css               # Global styles, design tokens
        ├── utils/
        │   └── data.js             # All portfolio data (personal, skills, projects, nav)
        ├── hooks/
        │   └── useScrollSpy.js     # IntersectionObserver scroll spy hook
        ├── store/
        │   ├── store.js            # Redux store
        │   ├── contactSlice.js     # Contact form async thunk
        │   └── uiSlice.js          # UI state (section, menu, filter)
        ├── components/
        │   ├── Navbar.jsx          # Sticky nav with active link, mobile drawer
        │   ├── Hero.jsx            # Typing animation, tech badges, CTA
        │   ├── About.jsx           # Summary, code block, stats grid
        │   ├── Skills.jsx          # Animated skill bars, tech strip
        │   ├── Projects.jsx        # Filterable project grid with AnimatePresence
        │   ├── Contact.jsx         # Redux form, contact info cards
        │   └── Footer.jsx
        └── pages/
            └── Home.jsx            # Assembles all sections
```

---

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, Redux Toolkit, React Router v6 |
| Styling | Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Security | Helmet, express-rate-limit, express-validator |
| Dev Tools | Vite, Nodemon, Concurrently |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd neetu-portfolio

# Install all dependencies (root + client + server)
npm run install-all
```

### 2. Configure Backend

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/neetu_portfolio
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace `MONGO_URI` with your connection string.

### 3. Add Your CV

Place your CV file in:
```
client/public/Neetu-Pradeep-MERN-CV.pdf
```

### 4. Run Development Servers

```bash
# From the root directory — starts both frontend and backend
npm run dev

# Frontend → http://localhost:5173
# Backend  → http://localhost:5000
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | Fetch all messages (admin) |

### POST `/api/contact` — Request body

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "subject": "Project collaboration",
  "message": "Hi Neetu, I'd love to work together..."
}
```

### Response

```json
{
  "success": true,
  "message": "Message received! I'll get back to you soon.",
  "data": { "id": "...", "name": "...", "createdAt": "..." }
}
```

---

## 📦 MongoDB Schema — Contact

```js
{
  name:      String  (required, 2–100 chars)
  email:     String  (required, valid email)
  subject:   String  (required, 5–200 chars)
  message:   String  (required, 10–2000 chars)
  status:    Enum    ['unread', 'read', 'replied'] (default: 'unread')
  ip:        String
  createdAt: Date    (auto)
  updatedAt: Date    (auto)
}
```

---

## 🚢 Deployment

### Frontend → Vercel

```bash
cd client
npm run build
# Upload dist/ to Vercel
# Or connect your GitHub repo and Vercel auto-deploys
```

Set environment variable in Vercel:
```
VITE_API_URL=https://your-backend.onrender.com
```

Update `vite.config.js` proxy or use `axios` base URL for production.

### Backend → Render / Railway

1. Push `server/` to GitHub
2. Create a new **Web Service** on [render.com](https://render.com)
3. Set:
   - Build command: `npm install`
   - Start command: `node index.js`
4. Add environment variables:
   ```
   MONGO_URI=mongodb+srv://...
   NODE_ENV=production
   CLIENT_URL=https://your-vercel-app.vercel.app
   ```

### Database → MongoDB Atlas

1. Create free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Whitelist IPs (or allow all: `0.0.0.0/0`)
3. Copy connection string → `MONGO_URI` in backend `.env`

---

## 🎨 Customization

- **Personal data**: Edit `client/src/utils/data.js` — update name, links, projects, skills
- **Theme colors**: Edit `client/tailwind.config.js` — change `accent`, `bg`, `text` tokens
- **CV file**: Replace `client/public/Neetu-Pradeep-MERN-CV.pdf`
- **Fonts**: Change Google Fonts links in `client/index.html` and `tailwind.config.js`

---

## 📄 License

MIT © Neetu Pradeep
