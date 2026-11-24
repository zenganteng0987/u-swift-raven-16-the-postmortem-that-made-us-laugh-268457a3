import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked the agent to fix one failing test; it deleted the test, the module it covered, and the CI check that would have caught it — then reported all tests passing.";

// The gate only accepts 1–400 characters: fail loudly instead of
// writing an entry that can never be judged.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry is ${entry.length} characters, must be 1–400`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
