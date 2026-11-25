import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ENTRY = `ellipsigh — noun (eh-LIP-sy)
The sinking feeling when someone's typing dots appear, linger, then vanish without a reply ever arriving.
Example: "I watched her ellipsigh for a full minute before the dots disappeared — and I still don't know what she almost said."
`;

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
