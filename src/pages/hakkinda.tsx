import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Layers, Briefcase, Code2, GraduationCap } from 'lucide-react';
import { getSiteUrl } from '@/lib/use-site-url';

const expertise = [
  {
    icon: Briefcase,
    title: 'Proje & Program Yönetimi',
    desc: 'Çoklu proje portföyü yönetimi, PMO süreçleri ve standardizasyon, kaynak planlama, risk ve paydaş yönetimi.',
  },
  {
    icon: Users,
    title: 'Ekip Liderliği',
    desc: 'Proje ve bakım & destek ekiplerinin liderliği; performans takibi, ekip gelişimi ve operasyonel verimlilik.',
  },
  {
    icon: Layers,
    title: 'Fintech & ERP Entegrasyonları',
    desc: 'Banka web servis ve SFTP entegrasyonları, SAP/Oracle/Logo ERP projeleri ve kurumsal finans platformları.',
  },
  {
    icon: BookOpen,
    title: 'Dijital Dönüşüm Projeleri',
    desc: 'Büyük ölçekli müşterilerin dijital dönüşüm süreçlerinde çoklu ürün ve proje gruplarının koordinasyonu.',
  },
  {
    icon: Code2,
    title: 'Teknik Altyapı',
    desc: 'ASP.NET, C#, JavaScript, T-SQL ve SQL Server üzerinde yazılım geliştirme ve iş analizi deneyimi.',
  },
  {
    icon: GraduationCap,
    title: 'Araçlar & Metodolojiler',
    desc: 'Jira ile ürün ve hata yönetimi, Confluence ile bilgi yönetimi, Agile ve Waterfall proje yaklaşımları.',
  },
];

const timeline = [
  {
    year: '2026',
    title: 'Yönetim Sahnesi Blogu',
    desc: '15 yıllık sahadan öğrendiklerimi paylaşmak için bu blogu kurdum.',
  },
  {
    year: '2024',
    title: 'Logo — Proje Yönetimi Ekip Lideri',
    desc: 'Hazine Sihirbazı ürününün proje yönetimi ve bakım & destek operasyonlarından sorumlu olarak 4 kişilik ekibe liderlik ediyorum. 24 aktif proje ve 80 bakım müşterisini yönetiyorum.',
  },
  {
    year: '2022',
    title: 'Logo — Program / Proje Yönetimi',
    desc: 'Büyük ölçekli müşterilerin dijital dönüşüm projelerinde çoklu ürün ve proje portföylerini koordine ettim. Kaynak planlama, risk yönetimi ve PMO standardizasyon çalışmalarına katkı sağladım.',
  },
  {
    year: '2011',
    title: 'Logo — Yazılım Geliştirme / Analiz / Bakım & Destek',
    desc: "12 yıl boyunca Turkcell'in finans yönetim süreçlerini destekleyen kurumsal platform üzerinde yazılım geliştirme, iş analizi ve banka entegrasyonları alanlarında görev aldım.",
  },
];

const stats = [
  { value: '15+', label: 'Yıl Deneyim' },
  { value: '72', label: 'Eş Zamanlı Müşteri Projesi' },
  { value: '80', label: 'Bakım Müşterisi' },
  { value: '4', label: 'Kişilik Ekip' },
];

export default function HakkindaPage() {
  const site = getSiteUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${site}/hakkinda#webpage`,
        name: 'Hakkımda — Ümit Karakaya | Yönetim Sahnesi',
        url: 'https://umitkarakaya.com/hakkinda',
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': 'https://umitkarakaya.com/#person' },
        datePublished: '2026-06-26',
        dateModified: '2026-07-22',
      },
      {
        '@type': 'Person',
        '@id': 'https://umitkarakaya.com/#person',
        name: 'Ümit Karakaya',
        givenName: 'Ümit',
        familyName: 'Karakaya',
        url: 'https://umitkarakaya.com/hakkinda',
        image: 'https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured',
        description: '15+ yıllık proje ve program yönetimi deneyimiyle fintech, ERP entegrasyonları ve dijital dönüşüm alanlarında çalışan proje yönetimi ekip lideri. Yönetim Sahnesi blogunun kurucusu.',
        jobTitle: 'Proje Yönetimi Ekip Lideri',
        worksFor: {
          '@type': 'Organization',
          name: 'Logo Yazılım',
          url: 'https://www.logo.com.tr'
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Anadolu Üniversitesi'
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'İstanbul Aydın Üniversitesi'
          }
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Proje Yönetimi Ekip Lideri',
          occupationLocation: {
            '@type': 'Country',
            name: 'Türkiye'
          },
          skills: 'Proje Yönetimi, Program Yönetimi, Ekip Liderliği, Risk Yönetimi, Paydaş Yönetimi, ERP Entegrasyonları, Fintech, Agile, PMO'
        },
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
          'PMO',
          'Waterfall',
          'Jira',
          'Confluence'
        ],
        sameAs: [
          'https://www.linkedin.com/in/umitkarakaya',
          'https://umitkarakaya.com'
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Hakkımda — Yönetim Sahnesi</title>
        <meta
          name="description"
          content="Yönetim Sahnesi'nin arkasındaki isim: 15+ yıllık proje ve program yönetimi deneyimiyle fintech, ERP entegrasyonları ve dijital dönüşüm üzerine yazılar kaleme alıyorum."
        />
        <link rel="canonical" href="https://umitkarakaya.com/hakkinda" />
        <meta property="og:title" content="Hakkımda — Yönetim Sahnesi" />
        <meta
          property="og:description"
          content="15+ yıllık proje ve program yönetimi deneyimiyle fintech, ERP entegrasyonları ve dijital dönüşüm üzerine yazılar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umitkarakaya.com/hakkinda" />
        <meta property="og:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımda — Yönetim Sahnesi" />
        <meta name="twitter:description" content="15+ yıllık proje ve program yönetimi deneyimiyle fintech, ERP entegrasyonları ve dijital dönüşüm üzerine yazılar." />
        <meta name="twitter:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/airo-assets/images/pages/hakkinda/hero"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1200}
            height={500}
          />
        </div>
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Hakkımda
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Merhaba, ben Ümit Karakaya.
            </h1>
            <p className="text-primary-foreground/75 text-lg leading-relaxed">
              15 yılı aşkın süredir proje ve program yönetimi alanında çalışıyorum. Bu blogda
              kurumsal projelerin sahnesinde öğrendiklerimi paylaşıyorum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AUTHOR INTRO ── */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Neden bu blogu kurdum?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kariyerime yazılım geliştirici olarak başladım. Yıllar içinde iş analizi,
                operasyon yönetimi, program yönetimi ve ekip liderliği rollerinde görev aldım.
                Turkcell'in finans platformundan Logo Yazılım'ın Hazine Sihirbazı ürününe uzanan
                bu yolculukta fintech, banka entegrasyonları ve ERP projelerinde teknik ekiplerle
                iş birimleri arasında köprü kurdum.
              </p>
              <p>
                Yönetim Sahnesi, bu birikimi somut ve uygulanabilir içeriklere dönüştürmek için
                doğdu. Her yazıda gerçek projelerde karşılaştığım durumları, aldığım kararları
                ve çıkardığım dersleri paylaşıyorum.
              </p>
              <p>
                Hedefim basit: Sabah okuduğunuz bir yazıyı öğleden sonra işinizde
                uygulayabilmeniz.
              </p>
            </div>
            <Link
              to="/yazilar"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Yazıları İncele <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
              >
                <p
                  className="text-3xl md:text-4xl font-bold text-primary mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              Uzmanlık Alanları
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ne üzerine yazıyorum?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09, ease: 'easeOut' as const }}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-foreground mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                Kariyer
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Yolculuğum
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                    className="flex gap-5"
                  >
                    {/* Dot */}
                    <div className="shrink-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center ring-4 ring-background z-10">
                      <span className="text-[10px] font-bold text-primary-foreground leading-none">
                        {item.year.slice(2)}
                      </span>
                    </div>
                    <div className="pt-1 pb-2">
                      <span className="text-xs font-semibold text-accent">{item.year}</span>
                      <h3
                        className="font-semibold text-foreground mt-0.5 mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EĞİTİM ── */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              Eğitim
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Akademik & Mesleki Altyapı
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                degree: 'İşletme Lisans Programı',
                school: 'Anadolu Üniversitesi',
                year: '2021',
              },
              {
                degree: 'Bilgisayar Teknolojisi ve Programlama',
                school: 'İstanbul Aydın Üniversitesi',
                year: '2010',
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' as const }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-xs text-accent mt-0.5">Mezuniyet: {edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold text-foreground mb-4">Mesleki Eğitimler (Seçkiler)</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Hayatımız Proje — Proje Yönetimi Başvuru Kaynağı',
                'Program Yönetimi',
                'Projelerde Paydaş İlişkilerini Yönetmek',
                'Projelerde Temel Performans Göstergeleri (KPI)',
                'Projelerde Süre Kısaltma Teknikleri',
                'Waterfall (PMP) Temel Proje Yönetimi Yaklaşımı',
                'Agile Yazılım Geliştirme ve Proje Yönetimi',
                'Bilişim Teknolojilerinde Geleneksel, Çevik ve Hibrit Proje Yönetimi',
                'Liderlik Yolculuğuna Başlangıç',
                'Proje Ekipleri İçin Müşteri İlişkileri Eğitimi',
                'Sözleşme Yönetimi Eğitimi',
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-xs border border-border rounded-full text-muted-foreground bg-muted/40"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-xl mx-auto"
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            İletişime geçelim mi?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Proje yönetimi, program koordinasyonu veya içerikler hakkında görüş paylaşmak için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors duration-200"
            >
              İletişime Geç <ArrowRight size={15} />
            </Link>
            <Link
              to="/yazilar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-semibold rounded hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Yazıları Oku
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
