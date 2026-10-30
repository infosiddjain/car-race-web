import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { site } from "../lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get help with ${site.name}, report a bug or send feedback.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader kicker="Support" title="Contact us">
        <p>Questions, bug reports or ideas for {site.name}? We read every message.</p>
      </PageHeader>

      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-16 md:grid-cols-[1fr_1.6fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
              <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <h2 className="mt-5 font-bold">Email</h2>
            <a href={`mailto:${site.supportEmail}`} className="mt-1 block break-all text-primary hover:underline">
              {site.supportEmail}
            </a>
            <p className="mt-3 text-sm text-dim">We usually reply within a few days.</p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-bold">Before you write</h2>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li>• For bugs, include your phone model and app version (shown in Options).</li>
              <li>
                • Quick answers are in the{" "}
                <Link href="/#faq" className="text-ink underline-offset-4 hover:underline">
                  FAQ
                </Link>
                .
              </li>
              <li>
                • Privacy questions? Read our{" "}
                <Link href="/privacy" className="text-ink underline-offset-4 hover:underline">
                  Privacy Policy
                </Link>
                .
              </li>
            </ul>
          </div>

          <p className="px-1 text-xs text-dim">Developer: {site.developer}</p>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
