import { ArrowRight } from "lucide-react";

// The waitlist is collected via this Google Form (responses land in the owner's Google Sheet).
const WAITLIST_FORM = "https://forms.gle/oUuAn3utJDu3oFPZ8";

export default function WaitlistForm({ C, big, cta = "Get early access" }) {
  return (
    <a
      href={WAITLIST_FORM}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
      style={{
        gap: 8,
        width: "fit-content",
        padding: big ? "14px 24px" : "11px 18px",
        borderRadius: 12,
        background: C.amber,
        color: C.accentInk,
        fontSize: big ? 15 : 14,
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      {cta} <ArrowRight size={17} />
    </a>
  );
}
