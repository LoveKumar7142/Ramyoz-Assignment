"use client";
import { useEffect, useState } from "react";
import { useTheme } from "./components/ThemeProvider";
import Link from "next/link";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();

  const fetchNotes = async () => {
    setLoading(true);
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (id) => {
    if (!confirm("Delete this note?")) return;
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  const togglePin = async (note) => {
    await fetch(`/api/notes/${note._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPinned: !note.isPinned }),
    });
    fetchNotes();
  };

  const filteredNotes = notes
    .filter(
      (n) =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.content.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.isPinned - a.isPinned);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white">
            ✨ My Notes
          </h1>

          <div className="flex gap-3">
            <input
              placeholder="Search notes..."
              className="px-3 py-2 rounded-lg border text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`
    px-3 py-2 rounded-lg font-medium transition-all duration-300
    ${
      theme === "dark"
        ? "text-black hover:dark:bg-yellow-800"
        : " text-white hover:bg-gray-800"
    }
  `}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <Link
              href="/create"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              + New
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        {loading ? (
          <p className="text-center text-gray-500">Loading notes...</p>
        ) : filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500">No notes found ✍️</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note._id}
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-5 rounded-2xl shadow"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">{note.title}</h2>
                  <button onClick={() => togglePin(note)}>
                    {note.isPinned ? "⭐" : "☆"}
                  </button>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-line">
                  {note.content}
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  {new Date(note.createdAt).toLocaleDateString("en-IN")}
                </p>

                <div className="flex justify-between mt-4 text-sm">
                  <Link href={`/edit/${note._id}`} className="text-indigo-600">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
