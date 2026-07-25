import faq from "../data/faq";

function FAQSchema() {

    const schema = {

        "@context": "https://schema.org",

        "@type": "FAQPage",

        mainEntity:

            faq.map(item => ({

                "@type": "Question",

                name: item.question,

                acceptedAnswer: {

                    "@type": "Answer",

                    text: item.answer

                }

            }))

    };

    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />

    );

}

export default FAQSchema;