// News-image entry, round 3: the front page is drawn in code by a Python/PIL
// renderer (see the build report for the script) and shipped as entry.png.
// This program only copies that image into the grader's output directory,
// the same one-file pattern the kit starter ships. The image itself counts
// as one line no transcript wrote (kit RULES.txt).
//
// How the entrypoint works:
//   - The grader mounts this repo read-only and runs main.ts, so the program
//     must not write into the repo — its only writable target is the
//     directory in MAKEFUN_OUTPUT_DIR (default "/output").
//   - The source image is resolved through import.meta.url, so the copy
//     works no matter which directory the grader invokes node from.
//   - The deliverable is the single file entry.png in the output dir —
//     the poster is pre-rendered, nothing is drawn at runtime. The copy is
//     byte-identical on every run: same input file, same output file.
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
