// Runs after `vite build` and the SSR build (see package.json "build").
// Renders each public route to static HTML inside dist/, with per-route
// title, description, canonical URL and truthful JSON-LD. Pure Node, no
// headless browser, so it runs the same locally and on Vercel.
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");
const ORIGIN = "https://iron.credit";

const OPERATOR = { "@type": "Person", name: "Adam Pang", url: "https://adampang.com" };
const ORG = {
  "@type": "Organization",
  "@id": `${ORIGIN}/#organization`,
  name: "Iron",
  url: `${ORIGIN}/`,
  logo: `${ORIGIN}/apple-touch-icon.png`,
  description: "Iron is a concept prototype for bitcoin-backed credit. It offers no loans, cards, or custody services.",
  founder: OPERATOR,
};

const ROUTES = [
  { path: "/", file: "index.html", title: "Iron · Bitcoin-backed credit concept", description: "Iron is a concept for borrowing dollars against bitcoin without selling it. Explore the free illustrative demo. Loans and cards are not available.", type: "WebPage" },
  { path: "/demo", file: "demo.html", title: "Concept demo · Iron", description: "A free browser-only simulation of the Iron bitcoin-backed credit concept: lock, borrow, spend, repay. All balances and terms are illustrative.", type: "WebPage" },
  { path: "/legends", file: "legends.html", title: "The greatest credit companies of all time · Iron", description: "Research notes comparing the Iron bitcoin-backed credit concept with the credit companies that shaped the industry, with sources.", type: "WebPage" },
  { path: "/about", file: "about.html", title: "About Iron · Bitcoin-backed credit concept", description: "Iron is a bitcoin-backed credit concept prototype operated by Adam Pang. It is not a bank, lender, or card issuer and offers no financial services.", type: "AboutPage" },
  { path: "/contact", file: "contact.html", title: "Contact Iron · Bitcoin-backed credit concept", description: "How to reach the Iron concept project: the public interest form on Google Forms and the operator contact details at adampang.com.", type: "ContactPage" },
  { path: "/privacy", file: "privacy.html", title: "Privacy policy · Iron", description: "What the iron.credit website collects: PostHog page views, Vercel hosting logs, Google Fonts requests, and the optional Google Forms interest form.", type: "WebPage" },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const { render } = await import(pathToFileURL(serverEntry).href);
const shell = await readFile(path.join(dist, "index.html"), "utf8");
// Untouched client shell for routes that are not statically rendered.
await writeFile(path.join(dist, "spa.html"), shell, "utf8");

for (const route of ROUTES) {
  const url = `${ORIGIN}${route.path}`;
  const graph = [ORG];
  if (route.path === "/") graph.push({ "@type": "WebSite", "@id": `${ORIGIN}/#website`, name: "Iron", url: `${ORIGIN}/`, publisher: { "@id": `${ORIGIN}/#organization` } });
  graph.push({ "@type": route.type, "@id": `${url}#webpage`, url, name: route.title, description: route.description, isPartOf: { "@id": `${ORIGIN}/#website` }, publisher: { "@id": `${ORIGIN}/#organization` } });
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\u003c");

  let html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(route.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(route.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(route.description)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(route.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(route.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace("</head>", `  <meta name="author" content="Adam Pang" />\n  <script type="application/ld+json">${jsonLd}</script>\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`);
  if (!html.includes("<h1")) throw new Error(`No H1 rendered for ${route.path}`);
  await writeFile(path.join(dist, route.file), html, "utf8");
  console.log(`ssg ${route.path} -> dist/${route.file} (${(html.length / 1024).toFixed(1)} KB)`);
}

await rm(path.join(root, "dist-server"), { recursive: true, force: true });
