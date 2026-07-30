import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
import GoogleAnalytics from '@/components/GoogleAnalytics';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 *
 * To customize the header or footer, directly edit the Header.tsx and Footer.tsx
 * files in the layouts/parts directory.
 *
 * Site-wide <title> and <meta> live in the <Helmet> below. Individual pages can
 * override them by rendering their own <Helmet> — last-mounted wins.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <GoogleAnalytics />
      <Helmet>
        <title>Yönetim Sahnesi — Proje ve Program Yönetimi Blogu</title>
        <meta name="description" content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine 15+ yıllık sahadan gelen Türkçe içerikler. Ümit Karakaya tarafından yazılmaktadır." />
        <meta name="author" content="Ümit Karakaya" />
        <meta property="og:site_name" content="Yönetim Sahnesi" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />
    </Website>
  );
}
