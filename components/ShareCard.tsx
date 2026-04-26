"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Archetype } from "@/lib/archetypes";

type Props = {
  archetype: Archetype;
  founderScore: number;
};

export default function ShareCard({ archetype, founderScore }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url =
      typeof window !== "undefined" ? window.location.origin : "";
    const message = `I'm ${archetype.name} ${archetype.emoji} on the Founder Diagnostic. Score: ${founderScore}/100. Find your archetype: ${url}`;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={handleCopy} className="btn-ghost">
      {copied ? (
        <>
          <Check className="size-4" />
          Copied to clipboard
        </>
      ) : (
        <>
          <Copy className="size-4" />
          Share your archetype
        </>
      )}
    </button>
  );
}
