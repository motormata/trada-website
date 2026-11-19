import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const indexHtml = readFileSync(resolve(process.cwd(), "index.html"), "utf8");

describe("static SEO metadata", () => {
  it("ships discoverability and social metadata in the initial HTML", () => {
    expect(indexHtml).toContain("<title>Trada — Run Your Business Smarter");
    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('name="twitter:card"');
    expect(indexHtml).toContain('type="application/ld+json"');
    expect(indexHtml).toContain('rel="manifest"');
  });

  it("does not publish an unverified canonical domain", () => {
    expect(indexHtml).not.toContain('rel="canonical"');
    expect(indexHtml).not.toContain("lovable.app");
  });
});
