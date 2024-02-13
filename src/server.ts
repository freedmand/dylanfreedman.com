import { parse } from "css-tree";
import { join } from "path";

Bun.serve({
  async fetch(req: Request) {
    delete require.cache[require.resolve("./gen")];
    delete require.cache[require.resolve("./css")];

    const path = new URL(req.url).pathname;

    if (path === "/") {
      const { gen } = await import("./gen");
      return new Response(gen(), {
        headers: {
          "Content-Type": "text/html",
        },
      });
    } else {
      const file = Bun.file(join(__dirname, "/static", path));
      return new Response(file);
    }
  },
});
