import Link from "next/link";
import { site } from "../lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = site.copyrightYear;
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-dim">
            A fast top-down highway racer for iPhone and Android. No ads, no tracking.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-dim">Game</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#features" className="hover:text-primary">Features</Link></li>
            <li><Link href="/#cars" className="hover:text-primary">Cars</Link></li>
            <li><Link href="/#how-to-play" className="hover:text-primary">How to play</Link></li>
            <li><Link href="/#faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-dim">Support</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li>
              <a href={`mailto:${site.supportEmail}`} className="break-all text-dim hover:text-primary">
                {site.supportEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-dim sm:flex-row sm:justify-between">
          <p>© {year} {site.developer}. All rights reserved.</p>
          <p>{site.name} v{site.version}</p>
        </div>
      </div>
    </footer>
  );
}
