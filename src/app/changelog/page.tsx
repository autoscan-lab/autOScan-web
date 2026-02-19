export default function ChangelogPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-24">
        <div className="w-full rounded-3xl p-8 md:p-12">
          <p className="text-muted-foreground mb-3 text-sm font-medium uppercase tracking-wide">
            Changelog
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Coming soon
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            A full release history page will be added here soon.
          </p>

          <a
            href="/"
            className="text-primary hover:text-primary/80 mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            Back to home
          </a>
        </div>
      </section>
    </main>
  );
}
