export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#01030a] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(1180px_620px_at_12%_100%,rgba(30,64,175,0.26),transparent_60%),radial-gradient(940px_520px_at_92%_2%,rgba(37,99,235,0.16),transparent_62%),radial-gradient(740px_420px_at_46%_30%,rgba(30,58,138,0.10),transparent_72%),linear-gradient(145deg,#010309_0%,#040a16_52%,#020611_100%)]" />
      <div className="absolute inset-0 opacity-46 [background-image:radial-gradient(rgba(255,255,255,0.12)_0.7px,transparent_0.7px),radial-gradient(rgba(2,6,23,0.72)_0.7px,transparent_0.7px),linear-gradient(0deg,rgba(255,255,255,0.015),rgba(255,255,255,0.015))] [background-position:0_0,1.1px_1.1px,0_0] [background-size:2.1px_2.1px,2.1px_2.1px,100%_100%]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-14 sm:px-10">
        <div className="w-full overflow-hidden rounded-[28px] border border-white/6 bg-[#070708]">
          <div className="border-b border-white/6 bg-[#030304] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
          </div>

          <div className="bg-[#070708] px-8 py-12 sm:px-12 sm:py-14">
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
              autOScan
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-300 sm:text-3xl">
              The web experience is currently in development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
