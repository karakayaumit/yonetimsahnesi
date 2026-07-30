import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Tag, Search } from 'lucide-react';
import { useState } from 'react';
import { getSiteUrl } from '@/lib/use-site-url';

const categories = [
  'Tümü',
  'Proje Yönetimi',
  'Program Yönetimi',
  'Ekip Liderliği',
  'Risk Yönetimi',
  'Paydaş Yönetimi',
  'Dijital Dönüşüm',
];

const allArticles = [
  {
    id: 1,
    category: 'Ekip Liderliği',
    title: 'Belirsizlik Dönemlerinde Ekibinizi Nasıl Yönetirsiniz?',
    excerpt:
      'Kriz anlarında liderlik etmek, sakin dönemlerdeki yönetimden çok farklıdır. 15 yıllık sahadan öğrendiklerimle belirsizliği yönetmenin somut yolları.',
    readTime: '8 dk',
    date: '24 Haziran 2026',
    image: '/airo-assets/images/pages/home/hero-featured',
  },
  {
    id: 2,
    category: 'Proje Yönetimi',
    title: 'Çoklu Proje Portföyünü Yönetmenin 5 Altın Kuralı',
    excerpt:
      '24 aktif projeyi eş zamanlı yönetirken öğrendiklerim: önceliklendirme, kaynak dengesi ve paydaş beklentilerini karşılamanın pratik yolları.',
    readTime: '6 dk',
    date: '20 Haziran 2026',
    image: '/airo-assets/images/blog/article-agile-sprint',
  },
  {
    id: 3,
    category: 'Risk Yönetimi',
    title: 'Risk Yönetiminde 5 Kritik Hata',
    excerpt:
      'Projelerin büyük çoğunluğu öngörülemeyen riskler yüzünden değil, öngörülen ama görmezden gelinen riskler yüzünden başarısız olur.',
    readTime: '5 dk',
    date: '17 Haziran 2026',
    image: '/airo-assets/images/blog/article-risk-management',
  },
  {
    id: 4,
    category: 'Ekip Liderliği',
    title: 'Yüksek Performanslı Ekipler Nasıl İnşa Edilir?',
    excerpt:
      'Bireysel yetenekler önemlidir; ancak gerçek performans, ekip uyumundan doğar. Güven kültürü ve açık iletişim ortamı oluşturmanın yolları.',
    readTime: '7 dk',
    date: '14 Haziran 2026',
    image: '/airo-assets/images/blog/article-team-dynamics',
  },
  {
    id: 5,
    category: 'Paydaş Yönetimi',
    title: 'Proje Paydaşlarını Yönetmenin Sanatı',
    excerpt:
      'Paydaş yönetimi, teknik becerilerden çok daha fazlasını gerektirir. Beklentileri doğru yönetmek ve güven inşa etmek için kanıtlanmış yöntemler.',
    readTime: '6 dk',
    date: '10 Haziran 2026',
    image: '/airo-assets/images/blog/article-leadership',
  },
  {
    id: 6,
    category: 'Dijital Dönüşüm',
    title: 'ERP Entegrasyon Projelerinde Sık Yapılan Hatalar',
    excerpt:
      'SAP ve Oracle entegrasyon projelerinde karşılaştığım en yaygın tuzaklar ve bunlardan nasıl kaçınılır.',
    readTime: '5 dk',
    date: '7 Haziran 2026',
    image: '/airo-assets/images/blog/article-agile-sprint',
  },
  {
    id: 7,
    category: 'Proje Yönetimi',
    title: 'Proje Planlamasında Gerçekçi Zaman Tahminleri Yapmak',
    excerpt:
      'Zaman tahminleri neden hep tutmaz? Planlama yanılgısının arkasındaki psikoloji ve daha isabetli tahminler için pratik teknikler.',
    readTime: '7 dk',
    date: '3 Haziran 2026',
    image: '/airo-assets/images/blog/article-risk-management',
  },
  {
    id: 8,
    category: 'Program Yönetimi',
    title: 'PMO Kurmanın Püf Noktaları: Nereden Başlamalı?',
    excerpt:
      'Bir PMO ofisi kurarken yapılan en yaygın hatalar ve standardizasyon sürecini hızlandıracak pratik adımlar.',
    readTime: '8 dk',
    date: '28 Mayıs 2026',
    image: '/airo-assets/images/blog/article-team-dynamics',
  },
  {
    id: 9,
    category: 'Dijital Dönüşüm',
    title: 'Banka Entegrasyon Projelerinde Kritik Başarı Faktörleri',
    excerpt:
      'Web servis ve SFTP entegrasyonlarında teknik ekip ile iş birimi arasındaki koordinasyonu sağlamanın yolları.',
    readTime: '6 dk',
    date: '22 Mayıs 2026',
    image: '/airo-assets/images/pages/home/hero-featured',
  },
  {
    id: 10,
    category: 'Paydaş Yönetimi',
    title: 'Proje Başarısını Belirleyen Gizli Faktör: Paydaş Güveni',
    excerpt:
      'Projeler çoğu zaman teknik nedenlerle değil, güven kaybı nedeniyle zorlaşır. Paydaş güvenini inşa etmenin dört temel davranışı.',
    readTime: '7 dk',
    date: '26 Haziran 2026',
    image: '/airo-assets/images/pages/home/hero-featured',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

export default function YazilarPage() {
  const site = getSiteUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${site}/yazilar#webpage`,
        name: 'Yazılar — Yönetim Sahnesi',
        url: 'https://umitkarakaya.com/yazilar',
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#organization` },
      },
      {
        '@type': 'Blog',
        '@id': 'https://umitkarakaya.com/yazilar#blog',
        name: 'Yönetim Sahnesi Blog',
        url: 'https://umitkarakaya.com/yazilar',
        inLanguage: 'tr',
        author: { '@id': 'https://umitkarakaya.com/#person' },
        hasPart: allArticles.map((a) => ({
          '@type': 'BlogPosting',
          '@id': `https://umitkarakaya.com/yazilar/${a.id}#webpage`,
          headline: a.title,
          url: `https://umitkarakaya.com/yazilar/${a.id}`,
        })),
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allArticles.filter((a) => {
    const matchCat = activeCategory === 'Tümü' || a.category === activeCategory;
    const matchSearch =
      searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Yazılar — Yönetim Sahnesi</title>
        <meta
          name="description"
          content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine tüm yazılar. 15+ yıllık sahadan gelen pratik içerikler."
        />
        <link rel="canonical" href="https://umitkarakaya.com/yazilar" />
        <meta property="og:title" content="Yazılar — Yönetim Sahnesi" />
        <meta
          property="og:description"
          content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine tüm yazılar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umitkarakaya.com/yazilar" />
        <meta property="og:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yazılar — Yönetim Sahnesi" />
        <meta name="twitter:description" content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine tüm yazılar." />
        <meta name="twitter:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Tüm İçerikler
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Yazılar
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl">
              Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine 15+ yıllık sahadan gelen içerikler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-3 py-3">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Yazılarda ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-sm border border-border rounded-full bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              />
            </div>
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-transparent text-foreground/60 border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-medium mb-2">Sonuç bulunamadı</p>
            <p className="text-sm">Farklı bir kategori veya arama terimi deneyin.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              {filtered.length} yazı bulundu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <motion.article
                  key={article.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="group"
                >
                  <Link
                    to={`/yazilar/${article.id}`}
                    className="block h-full rounded-lg overflow-hidden border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                          <Tag size={10} />
                          {article.category}
                        </span>
                        <span className="text-muted-foreground/40 text-xs">·</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={10} />
                          {article.readTime}
                        </span>
                      </div>
                      <h2
                        className="text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <p className="text-xs text-muted-foreground">{article.date}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
