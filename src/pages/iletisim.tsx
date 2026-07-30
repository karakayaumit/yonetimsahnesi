import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { getSiteUrl } from '@/lib/use-site-url';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Ümit Karakaya',
    href: 'https://linkedin.com/in/umitkarakaya',
    desc: 'Profesyonel bağlantı ve güncel paylaşımlar.',
  },
  {
    icon: Mail,
    label: 'E-posta',
    handle: 'karakayaumit@outlook.com',
    href: 'mailto:karakayaumit@outlook.com',
    desc: 'Doğrudan iletişim için.',
  },
];

type FormState = 'idle' | 'submitting' | 'success';

export default function IletisimPage() {
  const site = getSiteUrl();
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${site}/iletisim#webpage`,
    name: 'İletişim — Yönetim Sahnesi',
    url: 'https://umitkarakaya.com/iletisim',
    email: 'karakayaumit@outlook.com',
    isPartOf: { '@id': `${site}/#website` },
    about: { '@id': `${site}/#organization` },
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? 'Sunucu hatası');
      }
      setFormState('success');
    } catch (err) {
      console.error(err);
      setFormState('idle');
      alert('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    }
  }

  return (
    <>
      <Helmet>
        <title>İletişim — Yönetim Sahnesi</title>
        <meta
          name="description"
          content="Yönetim Sahnesi hakkında görüş, soru veya geri bildiriminizi paylaşmak için iletişime geçin. Formu doldurun veya sosyal medya kanallarından ulaşın."
        />
        <link rel="canonical" href="https://umitkarakaya.com/iletisim" />
        <meta property="og:title" content="İletişim — Yönetim Sahnesi" />
        <meta
          property="og:description"
          content="Görüş, soru veya geri bildiriminizi paylaşmak için iletişime geçin."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umitkarakaya.com/iletisim" />
        <meta property="og:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim — Yönetim Sahnesi" />
        <meta name="twitter:description" content="Görüş, soru veya geri bildiriminizi paylaşmak için iletişime geçin." />
        <meta name="twitter:image" content="https://umitkarakaya.com/airo-assets/images/pages/home/hero-featured" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── PAGE HEADER ── */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              İletişim
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Benimle İletişime Geçin
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              Yazılar hakkında görüş, soru veya geri bildiriminizi paylaşmak için mesaj gönderebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">

          {/* ── CONTACT FORM ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <h2
              className="text-xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Mesaj Gönderin
            </h2>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center text-center py-16 px-6 border border-border rounded-xl bg-card"
              >
                <CheckCircle size={48} className="text-accent mb-4" />
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Mesajınız İletildi!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  En kısa sürede geri döneceğim. Genellikle 1–2 iş günü içinde yanıt veriyorum.
                </p>
                <button
                  onClick={() => { setFormState('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Yeni mesaj gönder
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Adınız <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      E-posta <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    Konu <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  >
                    <option value="" disabled>Konu seçin...</option>
                    <option value="yorum">Yazı Hakkında Yorum</option>
                    <option value="soru">Soru</option>
                    <option value="geribildirim">Geri Bildirim</option>
                    <option value="isbirligi">İş Birliği Önerisi</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Mesajınız <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Gönder
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── SIDEBAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Response time */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <h3
                className="font-semibold text-foreground mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Yanıt Süresi
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mesajlara genellikle <strong className="text-foreground">1–2 iş günü</strong> içinde
                yanıt veriyorum.
              </p>
            </div>

            {/* Social channels */}
            <div>
              <h3
                className="font-semibold text-foreground mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Sosyal Medya
              </h3>
              <div className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3.5 rounded-lg border border-border hover:border-primary hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {s.label}
                        </p>
                        <p className="text-xs text-accent">{s.handle}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
