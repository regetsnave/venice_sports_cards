/**
 * Prefixes a root-relative path with the app's configured base path
 * (see `basePath`/`env` in next.config.ts). Needed for any plain
 * `<img>`/asset URL built from a string literal — unlike `next/link` or
 * `next/image`, those aren't rewritten automatically under `output: "export"`.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
