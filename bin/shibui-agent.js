#!/usr/bin/env node
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const resolvedEntry = await import.meta.resolve("@shibuitravel/agent");
const cliPath = join(dirname(fileURLToPath(resolvedEntry)), "cli.js");

const child = spawn(process.execPath, [cliPath, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env
});

child.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
