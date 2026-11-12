import Link from "next/link";
import { PULSE_LOGO_OPTION } from "../lib/brand";

export default function Wordmark({ reverse = true }: { reverse?: boolean }) {
  return (
    <Link href="/" className="wordmark" aria-label="FrameIQ home">
      <img src={`/brand/pulse/${PULSE_LOGO_OPTION}-horizontal-${reverse ? "dark" : "light"}.svg`} alt="FrameIQ" width="1124" height="350" />
    </Link>
  );
}
