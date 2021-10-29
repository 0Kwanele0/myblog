import { configureSitemap } from "@sergeymyssak/nextjs-sitemap";
import fetch from "node-fetch";

async function fetchDynamicPaths() {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://7gx68era.api.sanity.io/v1/data/query/production?query=${query}`;
  const results = await fetch(url).then((res) => res.json());
  const post = await results.result;

  return post.map((item) => {
    return item.slug.current;
  });
}

async function getDynamicPaths() {
  const paths = await fetchDynamicPaths();

  return paths.map((item) => `/post/${item}`);
}

getDynamicPaths().then((paths) => {
  const Sitemap = configureSitemap({
    domains: [{ domain: "mydopecode.com", defaultLocale: "en" }],
    include: paths,
    exclude: ["/post/*"],
    excludeIndex: true,
    pagesConfig: {
      "/post/*": {
        priority: "0.5",
        changefreq: "daily",
      },
    },
    trailingSlash: true,
    targetDirectory: "public",
    pagesDirectory: "pages",
  });

  Sitemap.generateSitemap();
});
