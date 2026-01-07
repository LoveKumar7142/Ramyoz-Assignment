# 📝 Notes App 
### Modern Full-Stack Notes Application using Next.js & MongoDB

A clean, modern, and fully functional **Notes application** built with **Next.js (App Router)** and **MongoDB**. This project is designed to be **interview-ready**, demonstrating real-world full-stack development practices including CRUD operations, serverless functions, and a polished UI.

---

## 🚀 Features

* ✏️ **Full CRUD:** Create, view, edit, and delete notes.
* 🔍 **Smart Search:** Search notes by title or content instantly.
* 📌 **Pin Notes:** Keep important notes at the top of your grid.
* 🌙 **Dark/Light Mode:** Full theme support with persistence via `localStorage`.
* 📱 **Responsive UI:** Fully optimized for mobile, tablet, and desktop.
* ⏳ **UX Optimized:** Includes loading states and delete confirmation dialogs.

---

## 🧠 Tech Stack

**Frontend:**
* Next.js (App Router)
* React (Client Components)
* Tailwind CSS (v4)

**Backend:**
* Next.js API Routes (Serverless)
* MongoDB Atlas
* Mongoose (Modeling)

**State & Theme:**
* React Context API
* LocalStorage API

---

## 📂 Project Structure

```text
app/
├── api/
│   └── notes/
│       ├── route.js          # GET all & POST new notes
│       └── [id]/route.js     # GET, PUT, & DELETE specific notes
├── components/
│   └── ThemeProvider.js      # Dark/Light mode logic
├── create/
│   └── page.js               # Form to create notes
├── edit/
│   └── [id]/page.js          # Form to edit existing notes
├── layout.js                 # Global layout & Theme Wrapper
└── page.js                   # Dashboard / Notes Grid
lib/
└── mongodb.js                # Database connection utility
models/
└── Note.js                   # Mongoose Schema
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
2️⃣ Install Dependencies
bash
npm install
3️⃣ Environment Variables
Create a .env.local file in the root directory:

env
MONGODB_URI=your_mongodb_connection_string
Make sure MongoDB Atlas network access is enabled.

4️⃣ Run the App
bash
npm run dev
Open http://localhost:3000 in your browser.

🔌 API Endpoints
➕ Create Note
POST /api/notes

json
{
  "title": "My Note",
  "content": "Some content here"
}
📄 Get All Notes
GET /api/notes

✏️ Update Note
PUT /api/notes/:id

json
{
  "title": "Updated title",
  "content": "Updated content",
  "isPinned": true
}
❌ Delete Note
DELETE /api/notes/:id

🌙 Dark / Light Mode
Implemented using Context API

Theme applied at layout level

Controlled using .dark class on <html>

Persisted using localStorage

Tailwind CSS v4 enabled using:

css
Copy code
@custom-variant dark (&:where(.dark, .dark *));
🎯 Key Learnings
Next.js App Router architecture

Full-stack CRUD using API routes

MongoDB integration with Mongoose

Theme management using Context API

Tailwind CSS v4 theming

UX improvements with confirmations and loading states

👨‍💻 Author
Love Kumar
MCA Graduate | Full-Stack Developer

🔗 LinkedIn:
https://www.linkedin.com/in/love-kumar-327299212/

⭐ If you like this project, feel free to star the repository!


---
