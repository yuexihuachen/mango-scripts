import { Hono } from 'hono';
import * as nunjucks from 'nunjucks';
import { serveStatic } from 'hono/bun';
import indexTemp from "./views/index.html" with { type: "text" };
import manifest from "../dist/manifest.json" with { type: "json" };

const app = new Hono()

// 静态资源目录
app.use('/dist/*', serveStatic({ root: '/' }));
app.use('*', serveStatic({ root: '/dist/' }));

app.get('/', async (c) => {
  let manifestFile = manifest;
  if (Bun.env.NODE_ENV !== 'production') {
    const filePath = Bun.resolveSync("./dist/manifest.json", process.cwd());
    const file = Bun.file(filePath);
    manifestFile = await file.json();
  }
  const staticName = manifestFile.entries.index.initial;
  const html = nunjucks.renderString(indexTemp, {
    css: staticName.css,
    jslist: staticName.js
  });
  return c.html(html);
  // return c.text('Hello Hono!')
})

export default app
