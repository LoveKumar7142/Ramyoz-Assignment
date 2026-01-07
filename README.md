# 📝 Notes App  
### Modern Full-Stack Notes Application using Next.js & MongoDB

A clean, modern, and fully functional **Notes application** built with **Next.js (App Router)** and **MongoDB**, featuring **CRUD operations**, **dark/light mode**, **search**, **pin notes**, and a **polished UI**.

This project is designed to be **interview-ready** and demonstrates **real-world full-stack development practices**.

---

## 🚀 Features

- ✏️ Create, edit, and delete notes  
- 📄 View all notes in a responsive grid  
- 🔍 Search notes by title or content  
- ⭐ Pin / unpin important notes  
- 🌙 Dark / Light mode toggle  
- 💾 Theme persistence using localStorage  
- 🕒 Created date display  
- ⚠️ Delete confirmation dialog  
- ⏳ Loading and empty states  
- 🎨 Modern UI with Tailwind CSS  

---

## 🧠 Tech Stack

### Frontend
- Next.js (App Router)
- React (Client Components)
- Tailwind CSS (v4)

### Backend
- Next.js API Routes
- MongoDB
- Mongoose

### Other Tools
- Context API (Theme Management)
- LocalStorage (Theme persistence)

---

## 📂 Project Structure

app/
├── api/
│ └── notes/
│ ├── route.js
│ └── [id]/route.js
│
├── components/
│ └── ThemeProvider.js
│
├── create/
│ └── page.js
│
├── edit/
│ └── [id]/page.js
│
├── layout.js
├── page.js
├── globals.css
│
lib/
└── mongodb.js
│
models/
└── Note.js

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Environment Variables
Create a .env.local file in the root directory:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
Make sure MongoDB Atlas network access is enabled.

4️⃣ Run the App
bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

🔌 API Endpoints
➕ Create Note
POST /api/notes

json
Copy code
{
  "title": "My Note",
  "content": "Some content here"
}
📄 Get All Notes
GET /api/notes

✏️ Update Note
PUT /api/notes/:id

json
Copy code
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

Persisted with localStorage

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

