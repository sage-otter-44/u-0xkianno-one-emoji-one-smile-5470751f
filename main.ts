import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

// One emoji, one smile: a hugging face. Warm at first glance, instantly
// readable by any stranger, and chosen rather than the default smiley —
// it reads as a person offering a hug, not a stock grin.
const emoji = "🤗";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", emoji, "utf8");

// Self-check the gate: exactly one emoji, 1-8 chars, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if ([...written].length !== 1 || written.trim() === "") {
  throw new Error(`invalid entry: ${JSON.stringify(written)}`);
}
console.log("wrote /output/entry.txt");
