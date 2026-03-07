import Image from "next/image";

const features = [
  {
    title: "Screenshot Capture",
    description:
      "Full screen, window, or region capture with pixel-perfect precision. Scrolling capture for long pages.",
    emoji: "📸",
  },
  {
    title: "Screen Recording",
    description:
      "Record your screen with system audio, microphone, and webcam overlay. Export as MP4 or GIF.",
    emoji: "🎬",
  },
  {
    title: "Pro Annotations",
    description:
      "Arrows, text, shapes, callouts, blur, stamps, magnify, and more. Full layer-based editing.",
    emoji: "✏️",
  },
  {
    title: "Organized Library",
    description:
      "Tags, folders, favorites, and search. Every capture organized and instantly accessible.",
    emoji: "📁",
  },
  {
    title: "Instant Sharing",
    description:
      "Copy to clipboard, drag and drop, or export in PNG, JPEG, PDF, TIFF, MP4, and GIF.",
    emoji: "🚀",
  },
  {
    title: "Global Hotkeys",
    description:
      "Capture from anywhere with customizable keyboard shortcuts. Menu bar quick access always ready.",
    emoji: "⌨️",
  },
];

function AppMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0d0b18] border border-white/[0.08] shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1a1230] to-[#141028] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/[0.06] rounded-lg px-3 py-1">
            <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><circle cx="12" cy="13" r="3" /></svg>
            <span className="text-xs text-gray-300 font-medium">Screenshot</span>
          </div>
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-1">
            <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <span className="text-xs text-red-300 font-medium">Record</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-white/[0.06] rounded-md overflow-hidden">
            <div className="px-2 py-1 bg-purple-500/20"><svg className="w-3 h-3 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></div>
            <div className="px-2 py-1"><svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></div>
          </div>
        </div>
      </div>

      <div className="flex" style={{ height: 340 }}>
        {/* Sidebar */}
        <div className="w-44 bg-gradient-to-b from-[#13102a]/80 to-[#0e0c1e]/80 border-r border-white/[0.06] p-3 flex flex-col gap-1 shrink-0">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-2 mb-1">Smart Folders</p>
          <SidebarItem icon="🕐" label="Recent" />
          <SidebarItem icon="📷" label="All Captures" active />
          <SidebarItem icon="⭐" label="Favorites" />
          <SidebarItem icon="📸" label="Screenshots" />
          <SidebarItem icon="🎬" label="Recordings" />
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-2 mt-3 mb-1">Folders</p>
          <SidebarItem icon="📁" label="Product Shots" />
          <SidebarItem icon="📁" label="Bug Reports" />
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-2 mt-3 mb-1">Tags</p>
          <div className="flex items-center gap-1.5 px-2 py-1"><div className="w-2 h-2 rounded-full bg-blue-400" /><span className="text-[11px] text-gray-400">Design</span></div>
          <div className="flex items-center gap-1.5 px-2 py-1"><div className="w-2 h-2 rounded-full bg-green-400" /><span className="text-[11px] text-gray-400">Development</span></div>
          <div className="flex items-center gap-1.5 px-2 py-1"><div className="w-2 h-2 rounded-full bg-orange-400" /><span className="text-[11px] text-gray-400">Marketing</span></div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Filter bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#16122e]/60 to-transparent border-b border-white/[0.04]">
            <FilterChip label="Type" />
            <FilterChip label="Sort" />
            <FilterChip label="Date" />
            <FilterChip label="Size" />
            <span className="ml-auto text-[10px] text-gray-600">12 items</span>
          </div>

          {/* Grid of cards */}
          <div className="flex-1 p-3 overflow-hidden">
            <div className="grid grid-cols-3 gap-3 h-full">
              <MockCard color="from-purple-900/40 to-indigo-900/30" label="Dashboard v2.png" size="2.4 MB" time="2m ago" type="screenshot" />
              <MockCard color="from-blue-900/40 to-cyan-900/30" label="Onboarding Flow.png" size="1.8 MB" time="15m ago" type="screenshot" hasAnnotations />
              <MockCard color="from-indigo-900/40 to-purple-900/30" label="Bug Report #142.mp4" size="8.2 MB" time="1h ago" type="recording" duration="0:34" />
              <MockCard color="from-violet-900/40 to-fuchsia-900/30" label="Settings Page.png" size="1.1 MB" time="2h ago" type="screenshot" />
              <MockCard color="from-blue-900/30 to-indigo-900/40" label="API Response.png" size="340 KB" time="3h ago" type="screenshot" selected />
              <MockCard color="from-purple-900/30 to-blue-900/40" label="Demo Recording.mp4" size="24 MB" time="1d ago" type="recording" duration="2:15" />
            </div>
          </div>
        </div>

        {/* Inspector panel */}
        <div className="w-40 bg-gradient-to-b from-[#13102a]/60 to-[#0e0c1e]/60 border-l border-white/[0.06] p-3 shrink-0">
          <InspectorSection title="Details">
            <DetailRow label="Filename" value="API Response.png" />
            <DetailRow label="Date" value="Mar 7, 2026" />
            <DetailRow label="Dimensions" value="1920 × 1080" />
            <DetailRow label="Size" value="340 KB" />
          </InspectorSection>
          <InspectorSection title="Properties">
            <DetailRow label="Format" value="PNG" />
            <DetailRow label="Color" value="sRGB" />
            <DetailRow label="DPI" value="144" />
          </InspectorSection>
          <InspectorSection title="Tags">
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Design</span>
              <span className="text-[9px] bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded">Dev</span>
            </div>
          </InspectorSection>
        </div>
      </div>
    </div>
  );
}

function EditorMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0d0b18] border border-white/[0.08] shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1a1230] to-[#141028] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-3">
          <span className="text-xs text-gray-400">Editor — Dashboard v2.png</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/[0.06] rounded-md px-2 py-1">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <span className="text-[10px] text-gray-400">Copy</span>
          </div>
          <div className="flex items-center gap-1 bg-white/[0.06] rounded-md px-2 py-1">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span className="text-[10px] text-gray-400">Save</span>
          </div>
        </div>
      </div>

      <div className="flex" style={{ height: 320 }}>
        {/* Tool palette */}
        <div className="w-12 bg-gradient-to-b from-[#16122e]/80 to-[#0e0c1e]/80 border-r border-white/[0.06] py-2 flex flex-col items-center gap-0.5 shrink-0">
          <ToolIcon icon="↖" active />
          <ToolIcon icon="→" />
          <ToolIcon icon="□" />
          <div className="w-6 h-px bg-white/[0.08] my-1" />
          <ToolIcon icon="╱" />
          <ToolIcon icon="✎" />
          <div className="w-6 h-px bg-white/[0.08] my-1" />
          <ToolIcon icon="T" />
          <ToolIcon icon="💬" />
          <ToolIcon icon="①" />
          <div className="w-6 h-px bg-white/[0.08] my-1" />
          <ToolIcon icon="▓" />
          <ToolIcon icon="◎" />
          <ToolIcon icon="⬡" />
          <div className="w-6 h-px bg-white/[0.08] my-1" />
          <div className="flex flex-col items-center gap-1 mt-1">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-blue-500 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-white border border-white/20" />
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative bg-[#1a1a2e] overflow-hidden">
          {/* Fake screenshot on canvas */}
          <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-[#1e1b4b] via-[#1e3a5f] to-[#1a1a2e] border border-white/[0.06]">
            {/* Simulated UI elements on the screenshot */}
            <div className="p-4 space-y-3">
              <div className="h-3 w-32 bg-white/10 rounded" />
              <div className="flex gap-3">
                <div className="h-16 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
                <div className="h-16 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
                <div className="h-16 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
              </div>
              <div className="h-24 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
            </div>
            {/* Annotation overlays */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 280">
              {/* Red arrow */}
              <line x1="120" y1="80" x2="200" y2="120" stroke="#ef4444" strokeWidth="2.5" />
              <polygon points="200,120 192,112 196,122" fill="#ef4444" />
              {/* Purple rectangle highlight */}
              <rect x="250" y="55" width="130" height="45" rx="4" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="6,3" />
              {/* Yellow callout */}
              <rect x="300" y="20" width="80" height="24" rx="4" fill="#fbbf24" fillOpacity="0.9" />
              <text x="340" y="36" textAnchor="middle" fill="#000" fontSize="10" fontWeight="600">Bug here!</text>
              <line x1="340" y1="44" x2="315" y2="60" stroke="#fbbf24" strokeWidth="1.5" />
              {/* Blue numbered step */}
              <circle cx="80" cy="160" r="12" fill="#3b82f6" />
              <text x="80" y="164" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">1</text>
              {/* Blur region indicator */}
              <rect x="60" y="190" width="100" height="50" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
              <text x="110" y="220" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="9">Blurred</text>
            </svg>
          </div>
          {/* Zoom controls */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#1a1230]/80 backdrop-blur border border-white/[0.08] rounded-lg px-2 py-1">
            <span className="text-[9px] text-gray-500">-</span>
            <span className="text-[10px] text-gray-400 font-mono w-8 text-center">100%</span>
            <span className="text-[9px] text-gray-500">+</span>
          </div>
        </div>

        {/* Inspector */}
        <div className="w-40 bg-gradient-to-b from-[#13102a]/60 to-[#0e0c1e]/60 border-l border-white/[0.06] p-3 shrink-0">
          <InspectorSection title="Style">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-gray-500">Stroke</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-red-500 border border-white/20" />
                  <span className="text-[9px] text-gray-400">#EF4444</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-gray-500">Width</span>
                <div className="w-16 h-1 bg-white/10 rounded-full"><div className="w-6 h-1 bg-purple-500 rounded-full" /></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-gray-500">Opacity</span>
                <div className="w-16 h-1 bg-white/10 rounded-full"><div className="w-14 h-1 bg-purple-500 rounded-full" /></div>
              </div>
            </div>
          </InspectorSection>
          <InspectorSection title="Annotation">
            <DetailRow label="Type" value="Arrow" />
            <DetailRow label="X" value="120" />
            <DetailRow label="Y" value="80" />
            <DetailRow label="W" value="80" />
            <DetailRow label="H" value="40" />
          </InspectorSection>
        </div>
      </div>

      {/* Toast notification */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1a1230]/90 backdrop-blur border border-purple-500/20 rounded-full px-4 py-2 shadow-lg shadow-purple-500/10">
        <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        <span className="text-[11px] text-gray-300 font-medium">Saved to Downloads</span>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-2 py-1 rounded-md text-[11px] ${active ? "bg-purple-500/20 text-purple-200 font-medium" : "text-gray-400 hover:bg-white/[0.04]"}`}>
      <span className="text-xs">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function FilterChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5">
      <span className="text-[10px] text-gray-500">{label}</span>
      <svg className="w-2 h-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
    </div>
  );
}

function MockCard({ color, label, size, time, type, duration, selected, hasAnnotations }: {
  color: string; label: string; size: string; time: string; type: string;
  duration?: string; selected?: boolean; hasAnnotations?: boolean;
}) {
  return (
    <div className={`rounded-lg border overflow-hidden ${selected ? "border-purple-500/60 ring-1 ring-purple-500/30" : "border-white/[0.06]"} bg-white/[0.02]`}>
      <div className={`h-[65%] bg-gradient-to-br ${color} relative`}>
        {/* Simulated content lines */}
        <div className="absolute inset-2 space-y-1.5 opacity-30">
          <div className="h-1 w-3/4 bg-white/30 rounded" />
          <div className="h-1 w-1/2 bg-white/20 rounded" />
          <div className="h-4 w-full bg-white/10 rounded mt-2" />
          <div className="h-4 w-full bg-white/10 rounded" />
        </div>
        {type === "recording" && duration && (
          <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 bg-black/50 backdrop-blur rounded px-1.5 py-0.5">
            <svg className="w-2 h-2 text-red-400" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8" /></svg>
            <span className="text-[8px] text-white font-mono">{duration}</span>
          </div>
        )}
        {hasAnnotations && (
          <div className="absolute top-1.5 right-1.5 bg-purple-500/80 rounded px-1 py-0.5">
            <span className="text-[7px] text-white font-medium">3 annotations</span>
          </div>
        )}
      </div>
      <div className="p-1.5">
        <p className="text-[9px] text-gray-300 truncate">{label}</p>
        <p className="text-[8px] text-gray-600">{time} · {size}</p>
      </div>
    </div>
  );
}

function ToolIcon({ icon, active = false }: { icon: string; active?: boolean }) {
  return (
    <div className={`w-8 h-7 flex items-center justify-center rounded-md text-xs ${active ? "bg-purple-500/25 text-purple-300 border border-purple-500/30" : "text-gray-500 hover:bg-white/[0.06]"}`}>
      {icon}
    </div>
  );
}

function InspectorSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="inline-block bg-purple-500/10 border border-purple-500/15 rounded-full px-2 py-0.5 mb-1.5">
        <span className="text-[9px] font-semibold text-purple-300">{title}</span>
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-[9px] text-gray-500">{label}</span>
      <span className="text-[9px] text-gray-400">{value}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Gradient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[128px]" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[128px]" />
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
          <a href="#preview" className="text-sm text-gray-400 hover:text-white transition-colors">
            Preview
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

        {/* App preview — Library view */}
        <section id="preview" className="pb-16">
          <div className="relative">
            {/* Glow behind the mockup */}
            <div className="absolute -inset-4 bg-purple-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <AppMockup />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Library view — organize all your captures with tags, folders, and smart filters</p>
        </section>

        {/* App preview — Editor view */}
        <section className="pb-32">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <EditorMockup />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Editor view — annotate with arrows, shapes, text, blur, and 15+ professional tools</p>
        </section>

        {/* Stats bar */}
        <section className="pb-20">
          <div className="flex items-center justify-center gap-12 sm:gap-20">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-purple-300 to-purple-500 bg-clip-text text-transparent">15+</p>
              <p className="text-sm text-gray-500 mt-2">Annotation Tools</p>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent">4K</p>
              <p className="text-sm text-gray-500 mt-2">Recording</p>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-green-300 to-green-500 bg-clip-text text-transparent">6</p>
              <p className="text-sm text-gray-500 mt-2">Export Formats</p>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent">Native</p>
              <p className="text-sm text-gray-500 mt-2">macOS App</p>
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
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-purple-500/20 transition-all"
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
