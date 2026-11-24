// NapTracker — the worst app idea ever pitched.
// A sleep tracker that wakes you up the moment you fall asleep, so it can log the nap.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "NapTracker: detects the moment you fall asleep, then wakes you up to log the nap.";

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 240 characters,
// not only whitespace, in one sentence.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry out of gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
