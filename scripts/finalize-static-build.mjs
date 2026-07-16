import { existsSync } from "node:fs";
import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const STATIC_EXPORT = process.env.STATIC_EXPORT === "true";
const root = process.cwd();
const distDir = path.join(root, "dist");
const tempDir = path.join(root, ".static-export-tmp");

if (!STATIC_EXPORT) {
  process.exit(0);
}

const candidates = [
  path.join(root, "dist"),
  path.join(root, ".output", "public"),
  path.join(root, "dist", "client"),
];

const sourceDir = candidates.find((dir) => existsSync(path.join(dir, "index.html")));

if (!sourceDir) {
  const details = await Promise.all(
    candidates.map(async (dir) => {
      if (!existsSync(dir)) return `${path.relative(root, dir)}: não existe`;
      const files = await readdir(dir).catch(() => []);
      return `${path.relative(root, dir)}: ${files.slice(0, 20).join(", ") || "vazia"}`;
    }),
  );

  throw new Error(
    [
      "Static export falhou: nenhum index.html foi encontrado nas pastas de build.",
      ...details,
    ].join("\n"),
  );
}

if (path.resolve(sourceDir) !== path.resolve(distDir)) {
  await rm(tempDir, { recursive: true, force: true });
  await mkdir(tempDir, { recursive: true });
  await cp(sourceDir, tempDir, { recursive: true, force: true });
  await rm(distDir, { recursive: true, force: true });
  await cp(tempDir, distDir, { recursive: true, force: true });
  await rm(tempDir, { recursive: true, force: true });
}

const htaccess = `DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;

await writeFile(path.join(distDir, ".htaccess"), htaccess, "utf8");

if (!existsSync(path.join(distDir, "index.html"))) {
  throw new Error("Static export falhou: dist/index.html não foi gerado.");
}

console.log("Static export pronto em dist/ com index.html.");