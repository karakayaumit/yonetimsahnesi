import { Helmet } from '@dr.pogodin/react-helmet';

const site = 'https://umitkarakaya.com';
const pageUrl = `${site}/kullanim-kosullari`;
const ogImage = `${site}/airo-assets/images/pages/home/hero-featured`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  name: 'Kullanım Koşulları — Yönetim Sahnesi',
  url: pageUrl,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Helmet>
        <title>Kullanım Koşulları — Yönetim Sahnesi</title>
        <meta name="description" content="Yönetim Sahnesi kullanım koşulları. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Kullanım Koşulları — Yönetim Sahnesi" />
        <meta property="og:description" content="Yönetim Sahnesi kullanım koşulları. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kullanım Koşulları — Yönetim Sahnesi" />
        <meta name="twitter:description" content="Yönetim Sahnesi kullanım koşulları. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız." />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Kullanım Koşulları
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm text-muted-foreground">Son güncelleme: Haziran 2026</p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">1. Kabul</h2>
            <p>
              Yönetim Sahnesi'ni kullanarak bu kullanım koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız siteyi kullanmayınız.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">2. İçerik Kullanımı</h2>
            <p>
              Bu sitedeki tüm içerikler (yazılar, görseller, metinler) Ümit Karakaya'ya aittir. İçeriklerin kaynak gösterilerek paylaşılması serbesttir; ancak ticari amaçla kullanımı için önceden yazılı izin alınması gerekmektedir.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">3. Sorumluluk Reddi</h2>
            <p>
              Bu sitedeki içerikler bilgilendirme amaçlıdır. Yazılardaki görüşler yazara aittir ve herhangi bir kurumu temsil etmez. İçeriklerin uygulanmasından doğabilecek sonuçlar okuyucunun sorumluluğundadır.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">4. Bağlantılar</h2>
            <p>
              Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriklerinden sorumlu değiliz.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">5. Değişiklikler</h2>
            <p>
              Bu kullanım koşulları önceden bildirim yapılmaksızın güncellenebilir. Güncel koşullar her zaman bu sayfada yayınlanır.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">6. İletişim</h2>
            <p>
              Kullanım koşullarıyla ilgili sorularınız için{' '}
              <a href="/iletisim" className="text-accent hover:underline">iletişim formu</a>
              {' '}aracılığıyla ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
