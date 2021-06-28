import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Andres Reyes – FrontEnd Developer.',
    description: 'Front-end developer, JavaScript lover.',
    image: 'https://andresreyes.netlify.app/',
    type: 'website',
    ...customMeta
  };
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property='og:url' content={`http://localhost:3000${router.asPath}`} />
        <link rel='canonical' href={`http://localhost:3000${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Andres Reyes" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@areyesdev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-white dark:bg-black"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
