"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">📝 Create Note</h1>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-sm text-indigo-600"
          >
            ← Go Back
          </button>
        </div>

        <input
          className="w-full mb-4 p-3 rounded-xl border text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full mb-4 p-3 rounded-xl border h-36 resize-none text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Write something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
          Save Note
        </button>
      </form>
    </div>
  );
}
