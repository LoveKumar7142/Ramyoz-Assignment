"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditNote() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/notes");
      const notes = await res.json();
      const note = notes.find((n) => n._id === id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    };
    load();
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={update}
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">✏️ Edit Note</h1>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-sm text-indigo-600"
          >
            ← Go Back
          </button>
        </div>

        <input
          className="w-full mb-4 p-3 rounded-xl border dark:bg-gray-800 dark:text-gray-100"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full mb-4 p-3 rounded-xl border h-36 resize-none dark:bg-gray-800 dark:text-gray-100"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
          Update Note
        </button>
      </form>
    </div>
  );
}
