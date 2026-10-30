"use client";

import { useState } from "react";
import { site } from "../lib/site";

const topics = ["General question", "Bug report", "Feedback or idea", "Privacy"];

/** No backend: the form opens the visitor's email app with the message filled in. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[${site.name}] ${topic}`;
    const body = `${message}\n\n— ${name || "A player"}`;
    window.location.href = `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-dim/60 outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <h2 className="text-xl font-bold">Send a message</h2>
      <p className="mt-1 text-sm text-dim">This opens your email app with your message ready to send.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex" />
        </label>
        <label className="block text-sm font-medium">
          Topic
          <select className={field} value={topic} onChange={(e) => setTopic(e.target.value)}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium">
        Message
        <textarea
          className={`${field} min-h-36 resize-y`}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind. For bugs, include your phone model and what happened."
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-hover sm:w-auto"
      >
        Open email app
      </button>
    </form>
  );
}
