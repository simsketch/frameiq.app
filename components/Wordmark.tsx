import Link from "next/link";

export default function Wordmark({ reverse = false }: { reverse?: boolean }) {
  return (
    <Link href="/" className="wordmark" aria-label="FrameIQ home">
      <img src={`/brand/frameiq-horizontal-${reverse ? "reverse" : "primary"}.svg`} alt="FrameIQ" width="1124" height="350" />
    </Link>
  );
}
