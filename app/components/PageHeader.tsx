export function PageHeader({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{kicker}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        {children ? <div className="mt-4 text-dim">{children}</div> : null}
      </div>
    </section>
  );
}
