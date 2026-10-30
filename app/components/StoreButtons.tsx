import { site } from "../lib/site";

function StoreButton({ href, top, label, icon }: { href: string; top: string; label: string; icon: React.ReactNode }) {
  const live = href !== "";
  const inner = (
    <>
      <span className="h-6 w-6 shrink-0">{icon}</span>
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-wider text-dim">
          {live ? top : "Coming soon"}
        </span>
        <span className="block text-base font-semibold">{label}</span>
      </span>
    </>
  );
  const cls =
    "flex min-w-48 items-center gap-3 rounded-xl border border-line bg-surface px-5 py-3 transition-colors";
  return live ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-primary/60`}>
      {inner}
    </a>
  ) : (
    <div className={`${cls} opacity-80`} aria-label={`${label}, coming soon`}>
      {inner}
    </div>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <StoreButton
        href={site.appStoreUrl}
        top="Download on the"
        label="App Store"
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6 1.3-.1 1.7-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.2-1.3 3-2.5 1-1.4 1.4-2.8 1.4-2.8s-2.6-1-2.5-4.1ZM13.9 5c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
          </svg>
        }
      />
      <StoreButton
        href={site.playStoreUrl}
        top="Get it on"
        label="Google Play"
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.7-9.7L3.6 2.3Zm10.8 10.8 2.8 2.8-11.5 6.6 8.7-9.4Zm3.9-4.3 3 1.7c.9.5.9 1.3 0 1.8l-3 1.7-3.1-3.1 3.1-2.1ZM5.7 1.5l11.5 6.6-2.8 2.8-8.7-9.4Z" />
          </svg>
        }
      />
    </div>
  );
}
