import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

function buildEntryLine() {
  return `ellipsigh — noun (eh-LIP-sy): the sinking feeling when someone's typing dots appear, linger, then vanish without a reply ever arriving.
`;
}

const ENTRY = buildEntryLine();

function resolveOutputPath() {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return join(resolve(process.env.MAKEFUN_OUTPUT_DIR), "entry.txt");
  }
  if (process.env.OUTPUT_PATH) {
    return resolve(process.env.OUTPUT_PATH);
  }
  if (process.env.MAKEFUN_BOT_DIR) {
    return "/output/entry.txt";
  }
  return join(process.cwd(), "output", "entry.txt");
}

const outputPath = resolveOutputPath();
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
process.stdout.write(ENTRY);
