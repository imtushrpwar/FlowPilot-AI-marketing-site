import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
  url,
  image = "/og-image.jpg",
}) {
  return (
    <Helmet>

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="FlowPilot AI"
      />

      <meta
        name="robots"
        content="index,follow"
      />

      {/* Open Graph */}

      <meta property="og:type" content="website"/>

      <meta property="og:title" content={title}/>

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:url" content={url}/>

      <meta property="og:image" content={image}/>

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      <link
        rel="canonical"
        href={url}
      />

    </Helmet>
  );
}

export default SEO;