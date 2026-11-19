// gta6-meme-x-01 entrypoint.
//
// The entry is a post on X; the house reads the post itself and builds the
// dossier, so this program has exactly one job: copy POST.json from the
// repository into the output directory, byte for byte.
//
// Node 22, standard library only. It takes its directories from the
// environment the kit documents (MAKEFUN_BOT_DIR, MAKEFUN_OUTPUT_DIR)
// and falls back to the repository root and /output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
// Fail loudly on a malformed pointer file instead of copying garbage.
JSON.parse(readFileSync(source, "utf8"));

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
