const canonicalUrl = 'https://sandton.vercel.app';
const metaImage =
  '';
const metaDescription =
  'Seasoned Tutor, with a passion for teaching science subjects';

const defaultSEOConfig = {
  defaultTitle: 'Benhura - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Benhura - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'aulianza.id og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'aulianza.id og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'aulianza.id og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'sandton',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
