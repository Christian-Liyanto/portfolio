import { cp, copyFile, readdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const clientOutput = path.join(repositoryRoot, "build", "client");
const prefixedOutput = path.join(clientOutput, "portfolio");
const notFoundPage = path.join(prefixedOutput, "404", "index.html");

for (const entry of await readdir(prefixedOutput, { withFileTypes: true })) {
  if (entry.name === "404") continue;

  await cp(
    path.join(prefixedOutput, entry.name),
    path.join(clientOutput, entry.name),
    { recursive: true, force: true },
  );
}

await copyFile(notFoundPage, path.join(clientOutput, "404.html"));
await rm(prefixedOutput, { recursive: true, force: true });
