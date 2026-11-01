// Build-time static rendering entry. scripts/ssg.mjs imports the SSR bundle of
// this file and writes real HTML for each public route, so crawlers that do
// not run JavaScript receive the same content browsers see.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./theme.jsx";

export function render(url) {
  return renderToString(
    <ThemeProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </ThemeProvider>
  );
}
