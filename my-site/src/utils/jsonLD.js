import siteData from "../data/siteData.json";
import { slugify } from "./slugify";

export default function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.summary}",
        "image": "${post.image}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "publisher": {
          "@type": "Organization",
          "name": "${siteData.title}",
          "url": "${import.meta.env.SITE}"
        },
        "datePublished": "${post.pubDate}",
        "dateModified": "${post.pubDate}"
      }
    </script>`;
  }

  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "${siteData.title}",
        "url": "${import.meta.env.SITE}"
      }
    </script>`;
}