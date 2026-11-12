import Link from "next/link";

export default function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="FrameIQ home">
      Frame<span>IQ</span>
    </Link>
  );
}
