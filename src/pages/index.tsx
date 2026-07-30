import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { getSiteUrl } from '@/lib/use-site-url';

const featuredArticle = {
  id: 1,
  category: 'Ekip Liderliği',
  title: 'Belirsizlik Dönemlerinde Ekibinizi Nasıl Yönetirsiniz?',
  excerpt:
    'Kriz anlarında liderlik etmek, sakin dönemlerdeki yönetimden çok farklıdır. 15 yıllık sahadan öğrendiklerimle belirsizliği yönetmenin somut yolları.',
  readTime: '8 dk',
  date: '24 Haziran 2026',
  image: '/airo-assets/images/pages/home/hero-featured',
};

const articles = [
  {
    id: 1,
    category: 'Proje Yönetimi',
    title: 'Çoklu Proje Portföyünü Yönetmenin 5 Altın Kuralı',
    excerpt:
      '24 aktif projeyi eş zamanlı yönetirken öğrendiklerim: önceliklendirme, kaynak dengesi ve paydaş beklentilerini karşılamanın pratik yolları.',
    readTime: '6 dk',
    date: '20 Haziran 2026',
    image: '/airo-assets/images/blog/article-agile-sprint',
    wide: true,
  },
  {
    id: 2,
    category: 'Risk Yönetimi',
    title: 'Risk Yönetiminde 5 Kritik Hata',
    excerpt:
      'Projelerin büyük çoğunluğu öngörülemeyen riskler yüzünden değil, öngörülen ama görmezden gelinen riskler yüzünden başarısız olur.',
    readTime: '5 dk',
    date: '17 Haziran 2026',
    image: '/airo-assets/images/blog/article-risk-management',
    wide: false,
  },
  {
    id: 3,
    category: 'Ekip Liderliği',
    title: 'Yüksek Performanslı Ekipler Nasıl İnşa Edilir?',
    excerpt:
      'Bireysel yetenekler önemlidir; ancak gerçek performans, ekip uyumundan doğar. Güven kültürü ve açık iletişim ortamı oluşturmanın yolları.',
    readTime: '7 dk',
    date: '14 Haziran 2026',
    image: '/airo-assets/images/blog/article-team-dynamics',
    wide: false,
  },
  {
    id: 4,
    category: 'Paydaş Yönetimi',
    title: 'Proje Paydaşlarını Yönetmenin Sanatı',
    excerpt:
      'Paydaş yönetimi, teknik becerilerden çok daha fazlasını gerektirir. Beklentileri doğru yönetmek ve güven inşa etmek için kanıtlanmış yöntemler.',
    readTime: '6 dk',
    date: '10 Haziran 2026',
    image: '/airo-assets/images/blog/article-leadership',
    wide: true,
  },
  {
    id: 5,
    category: 'Dijital Dönüşüm',
    title: 'ERP Entegrasyon Projelerinde Sık Yapılan Hatalar',
    excerpt:
      'SAP ve Oracle entegrasyon projelerinde karşılaştığım en yaygın tuzaklar ve bunlardan nasıl kaçınılır.',
    readTime: '5 dk',
    date: '7 Haziran 2026',
    image: '/airo-assets/images/blog/article-agile-sprint',
    wide: false,
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
    wide: false,
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' as const }
  })
};

export default function HomePage() {
  const site = getSiteUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'Yönetim Sahnesi',
      url: `${site}/`,
      inLanguage: 'tr',
      author: { '@id': 'https://umitkarakaya.com/#person' }
    },
    {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: 'Yönetim Sahnesi',
      url: `${site}/`,
      founder: { '@id': 'https://umitkarakaya.com/#person' }
    },
    {
      '@type': 'Person',
      '@id': 'https://umitkarakaya.com/#person',
      name: 'Ümit Karakaya',
      url: 'https://umitkarakaya.com/hakkinda',
      jobTitle: 'Proje Yönetimi Ekip Lideri',
      description: '15+ yıllık proje ve program yönetimi deneyimiyle fintech, ERP entegrasyonları ve dijital dönüşüm alanlarında çalışan proje yönetimi ekip lideri. Yönetim Sahnesi blogunun kurucusu.',
      worksFor: {
        '@type': 'Organization',
        name: 'Logo Yazılım',
        url: 'https://www.logo.com.tr'
      },
      sameAs: [
        'https://www.linkedin.com/in/umitkarakaya',
        'https://umitkarakaya.com'
      ],
      knowsAbout: [
        'Proje Yönetimi',
        'Program Yönetimi',
        'Ekip Liderliği',
        'Risk Yönetimi',
        'Paydaş Yönetimi',
        'Dijital Dönüşüm',
        'ERP Entegrasyonları',
        'Fintech',
        'Agile',
        'PMO'
      ]
    },
    {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': 'https://umitkarakaya.com/#person' },
      datePublished: '2026-06-26',
      dateModified: '2026-07-22'
    }]
  };

  return (
    <>
      <Helmet>
        <title>Yönetim Sahnesi — Proje ve Program Yönetimi Blogu</title>
        <meta
          name="description"
          content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine 15+ yıllık sahadan gelen Türkçe içerikler. Her seviyeden profesyonele yönelik pratik bilgiler." />
        
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="Yönetim Sahnesi — Proje ve Program Yönetimi Blogu" />
        <meta
          property="og:description"
          content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine 15+ yıllık sahadan gelen Türkçe içerikler." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umitkarakaya.com/" />
        <meta property="og:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yönetim Sahnesi — Proje ve Program Yönetimi Blogu" />
        <meta name="twitter:description" content="Proje yönetimi, program yönetimi, ekip liderliği ve dijital dönüşüm üzerine 15+ yıllık sahadan gelen Türkçe içerikler." />
        <meta name="twitter:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO FEATURED ARTICLE ── */}
      <section className="relative w-full h-[75vh] min-h-[520px] overflow-hidden">
        <img
          src={featuredArticle.image}
          alt={featuredArticle.title}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1400}
          height={700} />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-gray-900/10" />

        <div className="relative h-full flex flex-col justify-end container mx-auto px-6 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl">
            
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-accent text-white rounded mb-4">
              {featuredArticle.category}
            </span>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}>
              
              {featuredArticle.title}
            </h1>
            <p className="text-white/75 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-5">
              <Link
                to={`/yazilar/${featuredArticle.id}`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200">
                
                Yazıyı Oku <ArrowRight size={16} />
              </Link>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {featuredArticle.readTime}
                </span>
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="container mx-auto px-6 py-14">
        <div className="flex items-baseline justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}>
            
            Son Yazılar
          </h2>
          <Link
            to="/yazilar"
            className="text-sm font-medium text-accent hover:text-accent/80 flex items-center gap-1 transition-colors">
            
            Tümünü Gör <ArrowRight size={14} />
          </Link>
        </div>

        {/* Row 1: 1 wide + 2 narrow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Wide card */}
          <motion.article
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-2 group cursor-pointer">
            
            <ArticleCard article={articles[0]} large />
          </motion.article>

          {/* Narrow cards */}
          <div className="flex flex-col gap-6">
            {[articles[1], articles[2]].map((article, i) =>
            <motion.article
              key={article.id}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group cursor-pointer flex-1">
              
                <ArticleCard article={article} compact />
              </motion.article>
            )}
          </div>
        </div>

        {/* Row 2: 2 narrow + 1 wide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <motion.article
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group cursor-pointer flex-1">
              
              <ArticleCard article={articles[4]} compact />
            </motion.article>
          </div>
          <motion.article
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-2 group cursor-pointer">
            
            <ArticleCard article={articles[3]} large />
          </motion.article>
        </div>
      </section>

      {/* ── AUTHOR TEASER ── */}
      <section className="container mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-2xl mx-auto text-center md:text-left">
          
          






          
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-1">
              Yazar Hakkında
            </p>
            <h3
              className="text-xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Ümit Karakaya
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-1 font-medium">
              Proje Yönetimi Ekip Lideri · Logo Yazılım
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              15+ yıldır yazılım geliştirme, iş analizi, program yönetimi ve ekip liderliği
              rollerinde çalışıyorum. Fintech, banka entegrasyonları ve ERP projelerinden
              öğrendiklerimi burada paylaşıyorum.
            </p>
            <Link
              to="/hakkinda"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:text-accent transition-colors">
              
              Daha Fazla <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>);

}

/* ── Article Card Component ── */
interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  wide?: boolean;
}

function ArticleCard({
  article,
  large,
  compact




}: {article: Article;large?: boolean;compact?: boolean;}) {
  return (
    <Link
      to="/yazilar"
      className="block h-full rounded-lg overflow-hidden border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      
      <div className={`overflow-hidden ${large ? 'h-52 md:h-64' : compact ? 'h-36' : 'h-48'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={700}
          height={450} />
        
      </div>
      <div className={`p-4 ${large ? 'md:p-5' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
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
        <h3
          className={`font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200 ${
          large ? 'text-lg md:text-xl' : 'text-base'}`
          }
          style={{ fontFamily: 'var(--font-heading)' }}>
          
          {article.title}
        </h3>
        {large &&
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        }
        <p className="text-xs text-muted-foreground mt-2">{article.date}</p>
      </div>
    </Link>);

}