export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-background text-foreground pt-[15vh]">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8 px-6">
        {/* Brand */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-7xl font-bold tracking-tight md:text-8xl">iku</h1>
          <p className="text-2xl tracking-[0.1em] opacity-70 md:text-3xl">
            Full Stack Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/notiku"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <svg
                className="h-9 w-9 transition-opacity group-hover:opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <span className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
              @notiku
            </span>
          </a>
          <a
            href="https://x.com/unbeliewable"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-transform hover:scale-110"
            aria-label="X (Twitter)"
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <svg
                className="h-9 w-9 transition-opacity group-hover:opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <span className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
              @unbeliewable
            </span>
          </a>
        </div>

        {/* Projects Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-foreground/70">
          <a
            href="https://cleesim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            CleeSim
          </a>
          <span>•</span>
          <a
            href="https://discord.com/invite/sdPP3wpBAj"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Discord
          </a>
        </div>
      </div>
    </main>
  );
}
