"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Type declarations
interface PasteData {
  title: string;
  content: string;
  type: string;
  error?: string;
}

export default function Preview() {
  const [slug, setSlug] = useState<string | null>(null); // Use state to handle the slug
  const [title, setTitle] = useState<string>("Untitled");
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("text");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const slugFromURL = window.location.pathname.split("/").pop(); // Extract slug from URL
    setSlug(slugFromURL || null);

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/pastes?p=${slugFromURL}`);
        const data: PasteData = await res.json();

        if (data.error === "Paste not found.") {
          setNotFound(true);
        } else {
          setTitle(data.title);
          setContent(data.content);
          setType(data.type);
        }
      } catch (error) {
        console.error("Unknown error:", error);
      }
    };

    if (slugFromURL) fetchData();
  }, []);

  if (notFound) return <div>Paste not found</div>; // Simple not found message

  return (
    <main className="flex h-screen flex-col">
      <header className="flex justify-between bg-zinc-950 px-4 py-2">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-md border border-white p-2"
            title="Home"
          >
            Home
          </Link>
          {isEdit ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="New Paste"
              className="rounded-md bg-transparent py-1 pl-2 text-sm text-gray-500"
            />
          ) : (
            <div className="flex flex-col items-start justify-center text-xs sm:flex-row sm:items-center">
              <span className="rounded-md bg-transparent pl-2 text-sm text-slate-500">
                {title && title.length > 8 ? title.slice(0, 8) : title}
              </span>
              <strong className="pl-2 text-xs text-slate-200">[{type}]</strong>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="rounded-md border border-white bg-teal-600 px-3 py-2 transition-colors hover:bg-teal-700"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="rounded-md border border-white bg-teal-600 px-3 py-2 transition-colors hover:bg-teal-500"
            >
              Edit
            </button>
          )}
        </div>
      </header>

      <div className="flex h-full max-h-96 flex-col sm:max-h-full">
        <textarea
          className="h-full w-full bg-zinc-800 p-4 text-white"
          readOnly={!isEdit}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </main>
  );
}
