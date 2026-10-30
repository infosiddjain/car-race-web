import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your data: no account, no ads, no tracking.`,
};

// Same wording as the in-app policy (CarRaceGame/src/screens/PrivacyScreen.tsx).
const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Summary",
    body: `${site.name} does not ask you to create an account. It contains no ads and no analytics or tracking tools, and does not collect, sell or share your data. Everything stays on your device.`,
  },
  {
    title: "Data stored on your device",
    body: 'Your driver name, chosen car and color, coins, wins and sound and vibration settings are saved only on your device so they are kept between sessions. Deleting the app or using "Reset progress" in Options removes this data.',
  },
  {
    title: "Permissions",
    body: "The game works fully offline and does not send any data over the internet. Vibration is used for crash and finish feedback and can be turned off in Options. The game does not access your contacts, location, camera, microphone or files.",
  },
  {
    title: "Children",
    body: `${site.name} is suitable for all ages and does not collect personal information from anyone, including children.`,
  },
  {
    title: "This website",
    body: "This website does not use cookies, analytics or tracking. If you email us, we use your email address only to reply to you.",
  },
  {
    title: "Changes to this policy",
    body: 'If this policy changes, the updated version will be published in the app and on this page with a new "Last updated" date.',
  },
  {
    title: "Contact",
    body: (
      <>
        Questions about privacy? Email {site.developer} at{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-primary hover:underline">
          {site.supportEmail}
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy Policy">
        <p>Last updated: {site.privacyLastUpdated}</p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {["No account", "No ads", "No tracking", "Works offline"].map((t) => (
            <span key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-dim">
              <span className="mr-1.5 text-success">✓</span>
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {sections.map((s, i) => (
            <article key={s.title} className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="flex items-baseline gap-3 font-bold">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <p className="mt-2 leading-7 text-dim">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
