import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });

const line =
  // Angle: explain the internet with only things an 1800s person knows
  // (letters, newspapers, town criers), then land the joke on the last
  // word: this miraculous machine is mostly used for cats.
  "Imagine every letter ever written, every newspaper, and every town crier in the world, all shouting at once inside a glowing box, mostly about cats.";

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log("Wrote entry.txt");
