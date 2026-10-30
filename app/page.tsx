import Link from "next/link";
import { CarTop } from "./components/CarTop";
import { StoreButtons } from "./components/StoreButtons";
import { cars, site } from "./lib/site";

const features = [
  {
    title: "Real traffic, real risk",
    body: "Weave through sedans, vans and trucks. Pass close for a near-miss bonus that refills your nitro.",
    icon: "M3 13h2l2-5h10l2 5h2M6 17a2 2 0 1 0 0-.01M18 17a2 2 0 1 0 0-.01M5 13h14v4H5z",
  },
  {
    title: "Smart AI rivals",
    body: "Race 1 to 5 AI drivers who change lanes around traffic and fight you for every position.",
    icon: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z",
  },
  {
    title: "Nitro boost",
    body: "Hold to boost. Collect blue N pickups and pull off near misses to keep the tank full.",
    icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z",
  },
  {
    title: "Your garage, your paint",
    body: "Five cars with different speed, acceleration, handling and nitro. Pick any paint you like.",
    icon: "M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6",
  },
  {
    title: "Sound that reacts",
    body: "Engine audio revs with your speed and nitro. Music, engine and effects each have their own volume.",
    icon: "M4 10v4h4l5 4V6L8 10H4zm12-1a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12",
  },
  {
    title: "Private and offline",
    body: "No account, no ads, no tracking. The game runs fully offline and saves only on your device.",
    icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  },
];

const steps = [
  { title: "Pick your car", body: "Choose from five cars in the Garage and give it your own color and driver name." },
  { title: "Set up the race", body: "Choose a short, medium or long track and how many AI rivals you want to face." },
  { title: "Race to the line", body: "Steer with ◀ ▶, hold NITRO to boost, and dodge traffic. First across the line wins coins." },
];

const faqs = [
  { q: "Does it need an internet connection?", a: "No. The game works fully offline." },
  { q: "Which devices are supported?", a: "iPhone and Android phones." },
  { q: "Is my data collected?", a: "No. Your progress and settings are saved only on your device. See the Privacy Policy for details." },
  { q: "How do I reset my progress?", a: "Open Options in the game and tap Reset progress." },
];

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-[11px] font-semibold uppercase tracking-wider text-dim">{label}</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <span className="block h-full rounded-full" style={{ width: `${value * 100}%`, background: color }} />
      </span>
    </div>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {sub ? <p className="mt-4 text-dim">{sub}</p> : null}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.6rem] border-[10px] border-[#1f232d] bg-[#0e1512] shadow-2xl">
        {/* road */}
        <div className="absolute inset-y-0 left-[14%] right-[14%] overflow-hidden border-x-4 border-primary/40 bg-[#1a1d24]">
          <div className="lane-dashes absolute -top-16 bottom-0 left-1/3 w-[3px]" />
          <div className="lane-dashes absolute -top-16 bottom-0 left-2/3 w-[3px]" />
        </div>
        {/* traffic + player */}
        <CarTop color="#b8bfcc" className="absolute left-[22%] top-[14%] w-[16%]" />
        <CarTop color="#3b9eff" className="absolute right-[22%] top-[34%] w-[16%]" />
        <CarTop color="#ff5a1f" className="floaty absolute bottom-[16%] left-[42%] w-[17%]" />
        {/* HUD */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between rounded-xl bg-black/50 px-3 py-2 text-[10px] font-bold backdrop-blur">
          <span className="text-dim">POS <span className="text-ink">1/4</span></span>
          <span className="text-gold">🪙 120</span>
        </div>
        <div className="absolute bottom-3 left-3 rounded-xl bg-black/50 px-3 py-2 backdrop-blur">
          <p className="font-mono text-xl font-black leading-none">248</p>
          <p className="text-[9px] font-bold text-dim">KM/H</p>
          <div className="mt-1.5 h-1 w-16 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-2/3 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> No ads · No tracking · Works offline
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Highway racing, <span className="text-primary">done right.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-dim">
              Weave through traffic, fire your nitro and beat the AI crew to the finish line. Five cars, endless paint
              jobs and pure arcade speed on your phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#download"
                className="rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover"
              >
                Get the app
              </Link>
              <Link
                href="#features"
                className="rounded-xl border border-line bg-surface px-6 py-3.5 font-semibold transition-colors hover:border-white/20"
              >
                See features
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <dt className="text-xs text-dim">Cars</dt>
                <dd className="mt-1 text-2xl font-black">5</dd>
              </div>
              <div>
                <dt className="text-xs text-dim">AI rivals</dt>
                <dd className="mt-1 text-2xl font-black">Up to 5</dd>
              </div>
              <div>
                <dt className="text-xs text-dim">Tracks</dt>
                <dd className="mt-1 text-2xl font-black">3</dd>
              </div>
            </dl>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-line bg-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle kicker="Features" title="Built for quick, intense races" sub="Everything you need for a great run, nothing you don't." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/15">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
                  <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" aria-hidden>
                    <path d={f.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-dim">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cars */}
      <section id="cars" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle kicker="The garage" title="Five cars. One finish line." sub="Each car has its own shape and feel. Find the one that fits how you drive." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {cars.map((c) => (
              <div key={c.name} className="flex flex-col rounded-2xl border border-line bg-surface p-5">
                <div className="grid h-36 place-items-center rounded-xl bg-bg">
                  <CarTop color={c.color} className="h-28" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-dim">{c.body}</p>
                <h3 className="mt-1 text-lg font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-dim">{c.tagline}</p>
                <div className="mt-4 space-y-2">
                  <Stat label="Speed" value={c.stats.speed} color="#ff5a1f" />
                  <Stat label="Accel" value={c.stats.accel} color="#8b7cff" />
                  <Stat label="Handling" value={c.stats.handling} color="#2ed47a" />
                  <Stat label="Nitro" value={c.stats.nitro} color="#3b9eff" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to play */}
      <section id="how-to-play" className="border-t border-line bg-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle kicker="How to play" title="Easy to learn. Hard to master." />
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                <span className="font-mono text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-dim">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <kbd className="rounded-lg border border-line bg-bg px-3 py-1.5 text-sm font-bold">◀ ▶</kbd>
              <span className="text-sm text-dim">Steer</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-bold text-accent">NITRO</kbd>
              <span className="text-sm text-dim">Hold to boost</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="rounded-lg border border-line bg-bg px-3 py-1.5 text-sm font-bold">II</kbd>
              <span className="text-sm text-dim">Pause</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle kicker="FAQ" title="Questions, answered" />
          <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-surface">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-xl text-dim transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-dim">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-dim">
            Still have a question?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-t border-line px-5 py-20 sm:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <h2 className="relative text-3xl font-black tracking-tight sm:text-4xl">Ready to race?</h2>
          <p className="relative mx-auto mt-4 max-w-md text-dim">
            Get {site.name} on iPhone and Android. No ads, no account, no tracking.
          </p>
          <div className="relative mt-8 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </section>
    </>
  );
}
