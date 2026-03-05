import Image from "next/image";

const features = [
  {
    icon: "camera.viewfinder",
    title: "Screenshot Capture",
    description:
      "Full screen, window, or region capture with pixel-perfect precision. Scrolling capture for long pages.",
    emoji: "📸",
  },
  {
    icon: "video",
    title: "Screen Recording",
    description:
      "Record your screen with system audio, microphone, and webcam overlay. Export as MP4 or GIF.",
    emoji: "🎬",
  },
  {
    icon: "pencil.and.outline",
    title: "Pro Annotations",
    description:
      "Arrows, text, shapes, callouts, blur, stamps, magnify, and more. Full layer-based editing.",
    emoji: "✏️",
  },
  {
    icon: "folder",
    title: "Organized Library",
    description:
      "Tags, folders, favorites, and search. Every capture organized and instantly accessible.",
    emoji: "📁",
  },
  {
    icon: "square.and.arrow.up",
    title: "Instant Sharing",
    description:
      "Copy to clipboard, drag and drop, or export in PNG, JPEG, PDF, TIFF, MP4, and GIF.",
    emoji: "🚀",
  },
  {
    icon: "keyboard",
    title: "Global Hotkeys",
    description:
      "Capture from anywhere with customizable keyboard shortcuts. Menu bar quick access always ready.",
    emoji: "⌨️",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Gradient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[128px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt="FrameIQ"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight">FrameIQ</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
            Features
          </a>
          <a
            href="/FrameIQ.dmg"
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">v1.0 — Now available for macOS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Screen capture,
            <br />
            reimagined.
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Screenshots, recordings, annotations, and a full media library —
            built natively for macOS with a beautiful, modern interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/FrameIQ.dmg"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-b from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download for Mac
              <span className="text-purple-200 text-sm font-normal">.dmg</span>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            Requires macOS 14 Sonoma or later &middot; Apple Silicon &amp; Intel &middot; 1.3 MB
          </p>
        </section>

        {/* App preview */}
        <section className="pb-32">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-2 shadow-2xl shadow-purple-500/5">
            <div className="rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16162a] p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-6">
                <Image
                  src="/app-icon.png"
                  alt="FrameIQ App"
                  width={128}
                  height={128}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-white/80">FrameIQ</p>
                  <p className="text-sm text-gray-500">
                    Pro Screen Capture &amp; Recording
                  </p>
                </div>
                <div className="flex items-center justify-center gap-8 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-400">15+</p>
                    <p className="text-xs text-gray-500 mt-1">Annotation Tools</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">4K</p>
                    <p className="text-xs text-gray-500 mt-1">Recording</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">6</p>
                    <p className="text-xs text-gray-500 mt-1">Export Formats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="pb-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Everything you need to capture
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            A complete toolkit for screenshots, recordings, and visual
            communication — all in one native macOS app.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-32 text-center">
          <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to capture better?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Download FrameIQ and start taking professional screenshots and
              recordings in seconds.
            </p>
            <a
              href="/FrameIQ.dmg"
              className="inline-flex items-center gap-3 bg-white text-black font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download FrameIQ
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/app-icon.png"
              alt="FrameIQ"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} FrameIQ
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Built for macOS &middot; Requires macOS 14+
          </p>
        </div>
      </footer>
    </div>
  );
}
