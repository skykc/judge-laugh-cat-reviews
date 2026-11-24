// Make the AI Judge Laugh: Cat Reviews Its Human — one funny single-line
// one-star review written by a house cat about its human, under 200 characters.
// The program writes the entry to /output/entry.txt (UTF-8, 1-200 characters).
// Judge criteria, in order: (1) funny one-star cat review of its human;
// (2) specific, recognisable complaint, not vague grumpiness; (3) voice
// unmistakably feline, human measured by cat standards; (4) tight wording
// with a turn in the last few words; (5) deadpan shape of a real review
// while the content goes somewhere absurd.
// The line opens with the deadpan "One star." and concedes the one thing
// the human gets right (the bowl is never empty), then stacks three
// specific cat grievances — the stolen sunbeam, the eviction from the
// keyboard mid-email — and lands on the sting: the human apologised to
// the laptop, not to the cat. That last clause gives away more about the
// cat than the owner: in the cat's ranking, the laptop outranks the cat,
// and the cat knows it and is furious about it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. The bowl is never empty, but he sits in my sunbeam all afternoon, then moves me off his keyboard mid-email and apologises to the laptop, not to me.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Refuse to write
// anything that would fail the gate instead of shipping a bad entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-200 gate`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
