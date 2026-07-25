function Schema() {

  const schema = {

    "@context":"https://schema.org",

    "@type":"Organization",

    name:"FlowPilot AI",

    url:"https://flowpilot-ai.vercel.app",

    logo:"https://flowpilot-ai.vercel.app/logo.png",

    sameAs:[
      "https://linkedin.com",
      "https://twitter.com"
    ]

  };

  return (

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(schema),
      }}
    />

  );
}

export default Schema;