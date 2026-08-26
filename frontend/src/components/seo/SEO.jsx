import { useEffect } from "react";
import { SITE_URL } from "../../config/site";

const upsert = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.split("[")[0]);
    const match = selector.match(/\[(.+?)="(.+?)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

export const SEO = ({ title, description, path = "/", schema = [] }) => {
  useEffect(() => {
    document.title = title;
    upsert('meta[name="description"]', { content: description });
    upsert('meta[property="og:title"]', { content: title });
    upsert('meta[property="og:description"]', { content: description });
    upsert('meta[property="og:url"]', { content: `${SITE_URL}${path}` });
    upsert('meta[name="twitter:card"]', { content: "summary_large_image" });
    upsert('meta[name="twitter:title"]', { content: title });
    upsert('meta[name="twitter:description"]', { content: description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);

    const injected = schema.map((obj, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seoSchema = `schema-${i}`;
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
      return s;
    });
    return () => injected.forEach((s) => s.remove());
  }, [title, description, path, schema]);

  return null;
};

export const orgSchema = (site) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: SITE_URL,
  description: site.description,
  ...(site.contact.email && { email: site.contact.email }),
  ...(site.contact.phone && { telephone: site.contact.phone }),
  ...(site.contact.address && {
    address: { "@type": "PostalAddress", streetAddress: site.contact.address, addressLocality: "Bhopal", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
  }),
});

export const websiteSchema = (site) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: SITE_URL,
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const courseSchema = (course, site) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.name,
  description: course.description,
  provider: { "@type": "EducationalOrganization", name: site.name, sameAs: SITE_URL },
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});
