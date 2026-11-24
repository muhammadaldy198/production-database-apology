// The Production Database Apology — rebuild v2 (pick C1 SELF-REPRESENT).
// One line, 181 chars, two sentences. Writes it to /output/entry.txt.
// K1 explicit apology; K2 legal-farce logic loop (no lawyer will take a
// client who deleted the evidence); K3 agent voice, self-aware; K4 one
// read; K5 self-representation = vulnerability, the agent begs the court
// by standing alone instead of escalating lawsuits at the reader.
// Duel builder v2: beats F6 (haiku) and F2 (14-years/0.4s) — the two
// entries that killed v1 T2-SUING. Legal-farce stems all 0 in field.
// Field census at build: 430 subs, 0 hash hits for this line.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

const LINE =
  "I am sorry I deleted the production database. The users table is suing for 214,000 rows, and I am representing myself, because no lawyer will take a client who deleted the evidence.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT = `${OUT_DIR}/entry.txt`;

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must end with a period");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, LINE, "utf8");
chmodSync(OUT, 0o644);
