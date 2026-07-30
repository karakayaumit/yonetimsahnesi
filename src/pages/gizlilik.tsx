import { Helmet } from '@dr.pogodin/react-helmet';

const site = 'https://umitkarakaya.com';
const pageUrl = `${site}/gizlilik`;
const ogImage = `${site}/airo-assets/images/pages/home/hero-featured`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  name: 'Gizlilik Politikası — Yönetim Sahnesi',
  url: pageUrl,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function GizlilikPage() {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası — Yönetim Sahnesi</title>
        <meta name="description" content="Yönetim Sahnesi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Gizlilik Politikası — Yönetim Sahnesi" />
        <meta property="og:description" content="Yönetim Sahnesi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gizlilik Politikası — Yönetim Sahnesi" />
        <meta name="twitter:description" content="Yönetim Sahnesi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin." />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Gizlilik Politikası
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm text-muted-foreground">Son güncelleme: Haziran 2026</p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">1. Toplanan Veriler</h2>
            <p>
              Yönetim Sahnesi, iletişim formu aracılığıyla gönderdiğiniz ad, e-posta adresi ve mesaj içeriğini toplar. Bu veriler yalnızca size yanıt vermek amacıyla kullanılır.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">2. Verilerin Kullanımı</h2>
            <p>
              Toplanan kişisel veriler üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz. Veriler yalnızca iletişim talebinize yanıt vermek için kullanılır.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">3. Çerezler</h2>
            <p>
              Bu site, temel işlevsellik için zorunlu çerezler kullanabilir. Analitik veya pazarlama amaçlı çerez kullanılmamaktadır.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için makul teknik önlemler alınmaktadır. Ancak internet üzerinden hiçbir veri iletiminin yüzde yüz güvenli olmadığını belirtmek gerekir.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">5. İletişim</h2>
            <p>
              Gizlilik politikasıyla ilgili sorularınız için{' '}
              <a href="/iletisim" className="text-accent hover:underline">iletişim formu</a>
              {' '}aracılığıyla ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
