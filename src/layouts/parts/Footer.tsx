import { Link } from 'react-router-dom';
import { Linkedin, Rss } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const recentPosts = [
    { title: 'Belirsizlik Dönemlerinde Ekibinizi Nasıl Yönetirsiniz?', href: '/yazilar/1' },
    { title: 'Çoklu Proje Portföyünü Yönetmenin 5 Altın Kuralı', href: '/yazilar/2' },
    { title: 'Risk Yönetiminde 5 Kritik Hata', href: '/yazilar/3' },
    { title: 'Yüksek Performanslı Ekipler Nasıl İnşa Edilir?', href: '/yazilar/4' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/airo-assets/images/logo/horizontal"
                alt="Yönetim Sahnesi"
                className="h-9 w-auto object-contain brightness-0 invert shrink-0"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Proje yönetimi, liderlik ve ekip dinamikleri üzerine profesyonel içerikler.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://linkedin.com/in/umitkarakaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="/rss.xml" aria-label="RSS" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                <Rss size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-4">
              Sayfalar
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/yazilar', label: 'Tüm Yazılar' },
                { href: '/hakkinda', label: 'Hakkımda' },
                { href: '/iletisim', label: 'İletişim' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-4">
              Son Yazılar
            </h4>
            <nav className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.title}
                  to={post.href}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 leading-snug"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {currentYear} Yönetim Sahnesi. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5">
            <Link to="/gizlilik" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link to="/kullanim-kosullari" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
