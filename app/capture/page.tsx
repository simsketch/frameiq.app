import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "FrameIQ - Pro Screen Capture & Recording for macOS" },
  description:
    "Capture screenshots, record your screen, annotate with pro tools, and share instantly. The powerful Snagit alternative built natively for macOS.",
  alternates: { canonical: "/capture" },
  openGraph: {
    title: "FrameIQ Capture for macOS",
    description: "Screenshots, screen recordings, and pro annotations, built natively for macOS.",
    url: "/capture",
  },
};

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

function RecordingMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0d0b18] border border-white/[0.08] shadow-2xl">
      {/* Simulated screen being recorded */}
      <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#1e2a4a] to-[#1a1a2e]" style={{ height: 380 }}>
        {/* Fake app content being recorded */}
        <div className="p-6 space-y-4">
          <div className="flex gap-4">
            <div className="w-48 h-8 bg-white/[0.06] rounded-lg" />
            <div className="flex-1" />
            <div className="w-24 h-8 bg-white/[0.06] rounded-lg" />
            <div className="w-24 h-8 bg-white/[0.06] rounded-lg" />
          </div>
          <div className="flex gap-4">
            <div className="w-56 space-y-3">
              <div className="h-4 w-full bg-white/[0.05] rounded" />
              <div className="h-4 w-3/4 bg-white/[0.05] rounded" />
              <div className="h-4 w-5/6 bg-white/[0.05] rounded" />
              <div className="h-20 w-full bg-white/[0.03] rounded-lg border border-white/[0.04]" />
              <div className="h-4 w-2/3 bg-white/[0.05] rounded" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="h-32 bg-white/[0.03] rounded-lg border border-white/[0.04]" />
              <div className="flex gap-3">
                <div className="h-20 flex-1 bg-white/[0.03] rounded-lg border border-white/[0.04]" />
                <div className="h-20 flex-1 bg-white/[0.03] rounded-lg border border-white/[0.04]" />
                <div className="h-20 flex-1 bg-white/[0.03] rounded-lg border border-white/[0.04]" />
              </div>
              <div className="h-24 bg-white/[0.03] rounded-lg border border-white/[0.04]" />
            </div>
          </div>
        </div>

        {/* Recording border pulse */}
        <div className="absolute inset-0 border-2 border-red-500/40 rounded-xl pointer-events-none" />

        {/* Webcam overlay */}
        <div className="absolute bottom-4 right-4 w-28 h-28 rounded-full bg-gradient-to-br from-[#2a2040] to-[#1a1530] border-2 border-white/10 overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/[0.06]" />
            <div className="absolute w-8 h-5 bg-white/[0.08] rounded-full mt-10" />
          </div>
          <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400 border border-white/20" />
        </div>

        {/* Recording control bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#1a1230]/90 backdrop-blur-xl border border-purple-500/20 rounded-full px-5 py-2.5 shadow-2xl shadow-purple-500/10">
          {/* Red recording dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
          {/* Timer */}
          <span className="text-sm text-gray-200 font-mono font-medium tracking-wider">02:34</span>
          {/* Divider */}
          <div className="w-px h-5 bg-white/10" />
          {/* Pause */}
          <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/[0.06]">
            <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
          </div>
          {/* Stop */}
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/30">
            <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
          </div>
          {/* Divider */}
          <div className="w-px h-5 bg-white/10" />
          {/* Mic */}
          <div className="w-7 h-7 flex items-center justify-center rounded-full">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
          </div>
          {/* Speaker */}
          <div className="w-7 h-7 flex items-center justify-center rounded-full">
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
          </div>
          {/* Webcam */}
          <div className="w-7 h-7 flex items-center justify-center rounded-full">
            <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaptureOverlayMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0d0b18] border border-white/[0.08] shadow-2xl">
      {/* Desktop background */}
      <div className="relative bg-gradient-to-br from-[#0f1729] via-[#1a1040] to-[#0d1a2e]" style={{ height: 340 }}>
        {/* Dimmed overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Fake desktop icons */}
        <div className="absolute top-4 right-4 space-y-4 opacity-30">
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-lg bg-blue-500/30" /><span className="text-[8px] text-white/50">Finder</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-lg bg-purple-500/30" /><span className="text-[8px] text-white/50">Xcode</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-lg bg-green-500/30" /><span className="text-[8px] text-white/50">Messages</span></div>
        </div>

        {/* Selection region - bright area */}
        <div className="absolute top-12 left-16 right-48 bottom-16">
          {/* Clear window being captured */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#1e2a4a] to-[#1a1a2e] rounded-lg border border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <div className="p-4 space-y-3">
              <div className="h-3 w-40 bg-white/10 rounded" />
              <div className="flex gap-3">
                <div className="h-20 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
                <div className="h-20 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
              </div>
              <div className="h-16 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
              <div className="flex gap-3">
                <div className="h-12 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
                <div className="h-12 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
                <div className="h-12 flex-1 bg-white/[0.04] rounded-lg border border-white/[0.06]" />
              </div>
            </div>
          </div>

          {/* Selection handles */}
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border border-white/50" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border border-white/50" />
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border border-white/50" />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border border-white/50" />
        </div>

        {/* Dimension label */}
        <div className="absolute top-4 left-1/3 bg-black/70 backdrop-blur rounded-md px-2.5 py-1 border border-white/10">
          <span className="text-[10px] text-cyan-300 font-mono">1440 × 900</span>
        </div>

        {/* Magnifier loupe */}
        <div className="absolute bottom-8 right-40 w-24 h-24 rounded-full border-2 border-white/30 bg-[#1a1a2e] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={`border border-white/[0.03] ${
                i % 7 === 0 ? "bg-blue-900/40" :
                i % 5 === 0 ? "bg-purple-900/30" :
                i % 3 === 0 ? "bg-white/[0.06]" : "bg-white/[0.02]"
              }`} />
            ))}
          </div>
          {/* Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-px h-full bg-cyan-400/50" />
            <div className="absolute w-full h-px bg-cyan-400/50" />
          </div>
        </div>

        {/* Color picker readout */}
        <div className="absolute bottom-6 right-24 bg-black/70 backdrop-blur rounded-md px-2 py-1 border border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-indigo-600 border border-white/20" />
            <span className="text-[9px] text-gray-300 font-mono">#312E81</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeShowcaseMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0d0b18] border border-white/[0.08] shadow-2xl">
      <div className="p-8 bg-gradient-to-br from-[#1a1230] to-[#0d0b18]" style={{ minHeight: 300 }}>
        <div className="grid grid-cols-4 gap-6">
          {/* Arrow */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <line x1="15" y1="60" x2="55" y2="25" stroke="#ef4444" strokeWidth="3" />
                <polygon points="65,15 50,22 58,30" fill="#ef4444" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Arrow</span>
          </div>
          {/* Rectangle */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <rect x="10" y="15" width="60" height="50" rx="6" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Rectangle</span>
          </div>
          {/* Ellipse */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <ellipse cx="40" cy="40" rx="30" ry="22" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Ellipse</span>
          </div>
          {/* Diamond */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <polygon points="40,8 72,40 40,72 8,40" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Diamond</span>
          </div>
          {/* Star */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <polygon points="40,8 48,30 72,30 52,46 60,70 40,54 20,70 28,46 8,30 32,30" fill="#eab308" fillOpacity="0.2" stroke="#eab308" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Star</span>
          </div>
          {/* Triangle */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <polygon points="40,10 72,68 8,68" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Triangle</span>
          </div>
          {/* Fat Arrow */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <polygon points="8,28 48,28 48,12 72,40 48,68 48,52 8,52" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Block Arrow</span>
          </div>
          {/* Cloud */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <path d="M20,55 Q8,55 10,45 Q5,38 15,32 Q15,20 30,22 Q35,12 48,18 Q58,10 65,22 Q75,22 74,34 Q80,42 72,48 Q76,58 65,56 Q58,64 48,58 Q38,66 28,58 Z" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Cloud</span>
          </div>
          {/* Text */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <text x="40" y="52" textAnchor="middle" fill="#f472b6" fontSize="36" fontWeight="700" fontFamily="system-ui">T</text>
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Text</span>
          </div>
          {/* Callout */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <rect x="8" y="12" width="64" height="38" rx="8" fill="#fbbf24" fillOpacity="0.9" />
                <polygon points="24,50 36,50 20,68" fill="#fbbf24" fillOpacity="0.9" />
                <text x="40" y="36" textAnchor="middle" fill="#000" fontSize="12" fontWeight="600">Note!</text>
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Callout</span>
          </div>
          {/* Numbered Step */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <circle cx="40" cy="40" r="28" fill="#3b82f6" />
                <text x="40" y="48" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700">3</text>
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Step</span>
          </div>
          {/* Blur */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center p-4 relative overflow-hidden">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <defs>
                  <filter id="blurFilter"><feGaussianBlur stdDeviation="3" /></filter>
                </defs>
                <rect x="5" y="20" width="70" height="12" rx="2" fill="white" fillOpacity="0.15" />
                <rect x="5" y="38" width="50" height="12" rx="2" fill="white" fillOpacity="0.15" />
                <rect x="5" y="56" width="60" height="12" rx="2" fill="white" fillOpacity="0.15" />
                <rect x="0" y="30" width="80" height="28" fill="white" fillOpacity="0.05" filter="url(#blurFilter)" stroke="white" strokeOpacity="0.2" strokeWidth="1" rx="4" />
              </svg>
            </div>
            <span className="text-[11px] text-gray-400">Blur</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExportMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0d0b18] border border-white/[0.08] shadow-2xl">
      <div className="flex" style={{ height: 280 }}>
        {/* Export dialog */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#1a1230] to-[#0d0b18] p-6">
          <div className="w-full max-w-sm bg-[#1a1530]/80 backdrop-blur border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
            <h3 className="text-sm font-semibold text-white mb-4">Export As</h3>
            <div className="grid grid-cols-3 gap-2 mb-5">
              <ExportFormat label="PNG" active />
              <ExportFormat label="JPEG" />
              <ExportFormat label="PDF" />
              <ExportFormat label="TIFF" />
              <ExportFormat label="MP4" />
              <ExportFormat label="GIF" />
            </div>
            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-gray-400">Quality</span>
                <div className="w-32 h-1.5 bg-white/10 rounded-full"><div className="w-28 h-1.5 bg-purple-500 rounded-full" /></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-gray-400">Scale</span>
                <div className="flex gap-1.5">
                  <span className="text-[10px] bg-white/[0.06] border border-white/[0.08] rounded px-2 py-0.5 text-gray-500">1x</span>
                  <span className="text-[10px] bg-purple-500/20 border border-purple-500/30 rounded px-2 py-0.5 text-purple-300">2x</span>
                  <span className="text-[10px] bg-white/[0.06] border border-white/[0.08] rounded px-2 py-0.5 text-gray-500">3x</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 text-[11px] text-gray-400 bg-white/[0.04] border border-white/[0.08] rounded-lg py-2">Cancel</button>
              <button className="flex-1 text-[11px] text-white bg-purple-600 rounded-lg py-2 font-medium">Export</button>
            </div>
          </div>
        </div>

        {/* Quick actions side */}
        <div className="w-56 bg-gradient-to-b from-[#13102a]/80 to-[#0e0c1e]/80 border-l border-white/[0.06] p-5 flex flex-col gap-3">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Quick Actions</p>
          <QuickAction icon="📋" label="Copy to Clipboard" shortcut="⌘⇧C" />
          <QuickAction icon="💾" label="Save to Downloads" shortcut="⌘S" />
          <QuickAction icon="📤" label="Share via..." shortcut="⌘⇧S" />
          <QuickAction icon="🖱️" label="Drag & Drop" shortcut="" />
          <div className="w-full h-px bg-white/[0.06] my-1" />
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Recent Exports</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-purple-900/30" /><div><p className="text-[9px] text-gray-400">Dashboard.png</p><p className="text-[8px] text-gray-600">2x · 2.4 MB</p></div></div>
            <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-blue-900/30" /><div><p className="text-[9px] text-gray-400">Demo.gif</p><p className="text-[8px] text-gray-600">1x · 8.1 MB</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExportFormat({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={`text-center py-2 rounded-lg text-[11px] font-medium border ${active ? "bg-purple-500/20 border-purple-500/40 text-purple-300" : "bg-white/[0.03] border-white/[0.06] text-gray-500"}`}>
      {label}
    </div>
  );
}

function QuickAction({ icon, label, shortcut }: { icon: string; label: string; shortcut: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{icon}</span>
      <span className="text-[11px] text-gray-400 flex-1">{label}</span>
      {shortcut && <span className="text-[9px] text-gray-600 font-mono">{shortcut}</span>}
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
    <>
    <div className="channel chrome-only">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
    </div>
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Gradient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[128px]" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[128px]" />
      </div>

      <nav aria-label="Capture app" className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 py-5 max-w-6xl mx-auto">
        <span className="font-bold">FrameIQ Capture for macOS</span>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white">Features</a>
          <a href="#preview" className="text-sm text-gray-300 hover:text-white">Preview</a>
          <a href="/FrameIQ.dmg" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">Download</a>
        </div>
      </nav>

      {/* Hero */}
      <main id="main-content" className="relative z-10 max-w-6xl mx-auto px-6">
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
        <section id="preview" className="pb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">Media Library</span>
            <h2 className="text-2xl sm:text-3xl font-bold">All your captures, organized</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">Smart folders, tags, favorites, and powerful filters keep everything at your fingertips.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <AppMockup />
            </div>
          </div>
        </section>

        {/* App preview — Editor view */}
        <section className="pb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">Annotation Editor</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Professional-grade annotations</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">15+ tools including arrows, shapes, callouts, blur, magnify, and numbered steps.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <EditorMockup />
            </div>
          </div>
        </section>

        {/* Screen capture overlay */}
        <section className="pb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">Region Capture</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Pixel-perfect selection</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">Magnifier loupe with crosshair, live dimensions, and color picker for precise captures.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <CaptureOverlayMockup />
            </div>
          </div>
        </section>

        {/* Recording view */}
        <section className="pb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4">Screen Recording</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Record everything</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">System audio, microphone, and webcam overlay. Pause, resume, and export as MP4 or GIF.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-red-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <RecordingMockup />
            </div>
          </div>
        </section>

        {/* Shapes & tools */}
        <section className="pb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">Shape Tools</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Every shape you need</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">Arrows, rectangles, ellipses, diamonds, stars, triangles, block arrows, clouds, and more.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <ShapeShowcaseMockup />
            </div>
          </div>
        </section>

        {/* Export */}
        <section className="pb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">Export & Share</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Share your way</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">Export in 6 formats, copy to clipboard, or drag and drop — all with keyboard shortcuts.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/5 blur-3xl rounded-3xl" />
            <div className="relative">
              <ExportMockup />
            </div>
          </div>
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

      <p className="relative z-10 text-sm text-gray-300 text-center pb-8">Built for macOS · Requires macOS 14+</p>
    </div>
    <div className="channel chrome-only"><SiteFooter /></div>
    </>
  );
}
