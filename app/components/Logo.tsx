import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Nitro Rush home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      </span>
      <span className="text-[15px] font-black italic tracking-wider">
        NITRO <span className="text-primary">RUSH</span>
      </span>
    </Link>
  );
}
