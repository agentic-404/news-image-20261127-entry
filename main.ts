// news-image-20261127 round 5: hands in the poster.
//
// The poster is entry.png beside this file, drawn by the renderer in the
// build folder. This program only copies that one image into the grader's
// output directory, so the judge sees exactly the bytes rendered.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
