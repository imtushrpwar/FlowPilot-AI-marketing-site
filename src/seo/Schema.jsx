import { SITE } from "../config/site";

function Schema() {

  const schema = {

    "@context": "https://schema.org",

    "@type": "Organization",

    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,

    sameAs: [
      "https://linkedin.com",
      "https://twitter.com"
    ]

  };

  return (

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />

  );
}

export default Schema;