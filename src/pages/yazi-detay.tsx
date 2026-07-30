import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Tag, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';

const allArticles = [
  {
    id: 1,
    category: 'Ekip Liderliği',
    title: 'Belirsizlik Dönemlerinde Ekibinizi Nasıl Yönetirsiniz?',
    excerpt:
      '15 yıllık sahadan öğrendiklerimle belirsizliği yönetmenin somut yolları.',
    readTime: '8 dk',
    date: '24 Haziran 2026',
    image: '/airo-assets/images/pages/home/hero-featured',
    content: `
Belirsizlik, kurumsal projelerin kaçınılmaz bir parçası. Banka entegrasyonları, ERP geçişleri, dijital dönüşüm programları... Bunların hepsinde bir noktada zemin kayar. Ekip liderinin görevi, zeminin kaymasını durdurmak değil, ekibin dengesini korumaktır.

## Belirsizliği Kabullenmek

İlk adım, belirsizliği bir tehdit olarak değil, yönetilebilir bir durum olarak görmektir. 15 yılda öğrendiğim en önemli ders şu: Belirsizliği ekibinizden saklamak, onu yönetmekten çok daha yorucu.

- **Kontrol edebildiklerinize odaklanın.** Tüm değişkenleri kontrol etmek mümkün değil; ancak süreçlerinizi, iletişiminizi ve ekip kültürünüzü şekillendirebilirsiniz.
- **Senaryolar üretin.** "Ya şöyle olursa?" sorusunu sistematik biçimde sormak, sizi olası gelişmelere hazırlar.
- **Küçük kazanımları görünür kılın.** Belirsizlik dönemlerinde motivasyonu canlı tutmak için kısa vadeli başarıları ekiple paylaşın.

## Şeffaf İletişim Kurun

Ekibiniz bilgi boşluğunu her zaman olumsuz senaryolarla doldurur. Bu nedenle "henüz bilmiyorum" demek, sessiz kalmaktan çok daha güçlü bir liderlik davranışıdır.

Düzenli ve kısa bilgilendirme toplantıları yapın. Neyi bildiğinizi, neyi bilmediğinizi ve hangi kararları ne zaman vereceğinizi açıkça paylaşın. Bu yaklaşım güven inşa eder ve spekülasyonları azaltır.

## Kararları Ertelemeyin

Belirsizlik, karar vermeyi zorlaştırır. Ancak karar vermemek de bir karardır — ve çoğunlukla en kötüsüdür. Mevcut bilgilerle alınabilecek en iyi kararı alın, gerektiğinde revize edin.

Geri dönülebilir kararları hızlı alın, geri dönülemez olanları ise daha dikkatli değerlendirin. Bu ayrımı yapmak, hem hızı hem de kaliteyi korumanızı sağlar.

## Kendinize de Bakın

Ekibinize güç verebilmek için önce kendinizin güçlü olması gerekir. Belirsizlik dönemlerinde liderlik kapasitenizdeki en büyük yatırım, kendi zihinsel ve fiziksel sağlığınızdır.

Belirsizlik geçici, liderliğinizin kalitesi kalıcıdır. Ekibiniz bu dönemde sizi nasıl yönettiğinizi uzun süre hatırlayacak.
    `,
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
    content: `
Tek bir projeyi yönetmek ile onlarca projeyi eş zamanlı yönetmek arasındaki fark, bisiklet sürmek ile trafik yönetmek arasındaki fark gibidir. Kurallar farklı, araçlar farklı, zihinsel model tamamen farklı.

24 aktif proje ve 80 bakım müşterisini aynı anda yönetirken geliştirdiğim 5 altın kuralı paylaşıyorum.

## 1. Önce Önceliklendirme Çerçevesi Kur

Tüm projeler eşit değildir. Stratejik önem, müşteri büyüklüğü, gelir etkisi ve risk seviyesine göre bir önceliklendirme matrisi oluşturun. Bu matris olmadan her acil talep sizi farklı yöne çeker.

## 2. Kaynak Planlamasını Gerçekçi Yap

En yaygın hata, kaynakları yüzde yüz kapasiteyle planlamaktır. Bakım talepleri, hastalık izinleri ve beklenmedik teknik sorunlar için mutlaka tampon bırakın. Yüzde seksen planlama, yüzde yüz planlamadan çok daha güvenlidir.

## 3. Standart Raporlama Ritmi Oluştur

Her proje için ayrı ayrı durum toplantısı yapmak yerine, standart bir haftalık raporlama şablonu oluşturun. Proje yöneticileri bu şablonu doldurur, siz özet görünümden sapmaları takip edersiniz.

## 4. Eskalasyon Yollarını Netleştir

Hangi sorunlar size gelir, hangilerini proje yöneticisi çözer? Bu sınırı net çizmeden portföy yönetimi yapılamaz. Eskalasyon kriterleri yazılı olmalı ve ekip tarafından bilinmeli.

## 5. Portföy Sağlığını Görselleştir

Tüm projelerin durumunu tek bir ekranda görebilmek, erken uyarı sistemi işlevi görür. Kırmızı-sarı-yeşil renk kodlaması basit ama etkilidir. Haftalık portföy toplantılarında bu görünümü kullanın.
    `,
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
    content: `
Risk yönetimi, proje yönetiminin en çok ihmal edilen alanlarından biridir. Çoğu ekip risk kayıtlarını oluşturur, ancak bunları aktif olarak yönetmez. Banka entegrasyonu ve ERP projelerinde karşılaştığım en yaygın 5 hatayı paylaşıyorum.

## 1. Riskleri Yalnızca Başlangıçta Tanımlamak

Risk yönetimi, proje başlangıcında yapılan tek seferlik bir egzersiz değildir. Proje ilerledikçe yeni riskler ortaya çıkar, mevcut riskler değişir. Haftalık veya iki haftada bir risk gözden geçirme toplantıları yapın.

## 2. Olasılık ve Etkiyi Ayrı Değerlendirmemek

"Bu risk yüksek" demek yeterli değil. Olasılık ve etki ayrı ayrı değerlendirilmeli. Düşük olasılıklı ama yüksek etkili riskler özellikle dikkat gerektirir; özellikle entegrasyon projelerinde bu tür riskler projeyi durdurabilir.

## 3. Risk Sahibi Atamamak

Her riskin bir sahibi olmalı. "Hepimizin sorumluluğu" pratikte "kimsenin sorumluluğu" anlamına gelir. Risk sahibi, o riskin takibinden ve yanıt planının uygulanmasından sorumludur.

## 4. Yalnızca Olumsuz Risklere Odaklanmak

Riskler sadece tehdit değil, fırsat da olabilir. Olumlu riskleri aktif olarak yönetmek, projenize rekabet avantajı sağlar. Bir entegrasyon projesinde erken tamamlanan bir modül, başka bir müşteriye referans olabilir.

## 5. Risk Yanıtlarını Planlamak Ama Uygulamaya Koymamak

En iyi risk planı, uygulanmayan plandır. Risk yanıtlarını proje planına entegre edin, takvime bağlayın ve düzenli olarak takip edin.
    `,
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
    content: `
4 kişilik bir ekiple 24 aktif proje ve 80 bakım müşterisini yönetmek, ekip performansının ne kadar kritik olduğunu her gün hatırlatıyor. Bireysel yetenek önemli; ama asıl fark yaratan, ekibin birlikte nasıl çalıştığı.

## Güven Kültürü Her Şeyin Temelidir

Ekip üyelerinin birbirine ve liderine güvenmediği bir ortamda yüksek performans mümkün değildir. Güven, söylemle değil davranışla inşa edilir.

- **Lider modeli olmalı.** Kendi hatalarınızı kabul edin, bilmediğinizi söyleyin, soru sorun.
- **Tutarlı olun.** Söylediğinizi yapın, yaptığınızı söyleyin.
- **Ekip üyelerini koruyun.** Dışarıdan gelen haksız baskılara karşı ekibinizin arkasında durun.

## Roller ve Sorumluluklar Net Olmalı

Belirsiz roller, çakışan sorumluluklar ve "bu kimin işi?" soruları ekip enerjisini tüketir. Her ekip üyesinin ne yapacağını, ne yapmayacağını ve kime raporlayacağını net biçimde tanımlayın.

## Geri Bildirim Kültürü Oluşturun

Düzenli ve yapıcı geri bildirim, ekibin gelişiminin motorudur. Yıllık performans değerlendirmeleri yeterli değil; haftalık birebir görüşmeler çok daha etkilidir.

## Çatışmayı Yönetin, Bastırmayın

Sağlıklı fikir ayrılıkları, ekibin daha iyi kararlar almasını sağlar. Çatışmayı kişisel olmaktan çıkarın, fikre odaklanın. Bastırılan çatışmalar ilerleyen dönemde çok daha büyük sorunlara yol açar.
    `,
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
    content: `
Paydaş yönetimi, proje yönetiminin en zorlu ve en az formüle edilebilir boyutudur. Teknik beceriler öğrenilebilir; ancak farklı çıkarları, beklentileri ve güç dinamiklerini dengelemek gerçek bir sanattır.

Büyük ölçekli müşterilerin dijital dönüşüm projelerinde edindiğim deneyimle şunu söyleyebilirim: Teknik olarak mükemmel ama paydaş yönetimi zayıf projeler başarısız olur. Teknik olarak ortalama ama paydaş yönetimi güçlü projeler başarılı olur.

## Paydaşları Tanıyın

Her paydaşın projeye ilgisi ve etkisi farklıdır. Güç/İlgi matrisi, paydaşlarınızı dört gruba ayırmanıza yardımcı olur: Yakın yönet, bilgilendir, tatmin et, izle.

## Beklentileri Erken Yönetin

Projenin başında paydaşlarla açık bir beklenti belirleme toplantısı yapın. "Başarı sizin için ne anlama geliyor?" sorusu, ilerleyen dönemlerde yaşanabilecek hayal kırıklıklarını önler.

## Düzenli ve Özelleştirilmiş İletişim

Her paydaş aynı bilgiyi aynı formatta almak istemez. Üst yönetim özet ve sonuçlara odaklanırken, teknik ekipler detaylara ihtiyaç duyar. İletişiminizi kişiselleştirin.

## Zor Haberleri Erken Verin

Kötü haberi geciktirmek, sorunu büyütür. Bir risk gerçekleştiğinde veya bir gecikme yaşandığında, paydaşları mümkün olan en kısa sürede bilgilendirin — çözüm önerinizle birlikte.
    `,
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
    content: `
ERP entegrasyon projeleri, kurumsal dünyanın en karmaşık ve en riskli proje türlerinden biridir. SAP ve Oracle projelerinde teknik ekip ile iş birimi arasında köprü kurarak edindiğim deneyimden en yaygın hataları paylaşıyorum.

## Kapsam Yönetimini Hafife Almak

ERP projelerinde kapsam kayması (scope creep) neredeyse kaçınılmazdır. İş birimleri projeyi ilerlerken yeni ihtiyaçlar keşfeder. Başlangıçta sağlam bir kapsam belgesi ve değişiklik yönetimi süreci olmadan bu talepleri yönetmek imkânsızlaşır.

## Veri Göçünü Küçümsemek

"Verileri taşırız" cümlesi, ERP projelerinin en tehlikeli cümlelerinden biridir. Veri kalitesi sorunları, eksik mapping'ler ve test süreçlerindeki yetersizlikler go-live'ı geciktirir. Veri göçüne ayrılan süreyi her zaman iki katına çıkarın.

## Kullanıcı Eğitimini Sona Bırakmak

Sistem hazır olsa bile kullanıcılar hazır değilse proje başarısız sayılır. Eğitim planlamasını proje başında yapın, go-live öncesi yeterli pratik süresi tanıyın.

## Teknik Ekip ile İş Birimi Arasındaki Uçurumu Kapatmamak

ERP projelerinin en büyük riski teknik değil, iletişimseldir. Teknik ekip "sistem bunu yapabilir" derken iş birimi "ama biz böyle çalışmıyoruz" der. Bu uçuru kapatmak proje yöneticisinin birincil görevidir.

## Paralel Çalışma Süresini Kısa Tutmak

Eski sistem ile yeni sistem arasındaki paralel çalışma süresi ne kadar kısa tutulursa risk o kadar artar. Kritik iş süreçleri için yeterli paralel çalışma süresi tanıyın.
    `,
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
    content: `
"Bu iş iki haftada biter" cümlesi, proje yönetiminin en tehlikeli cümlelerinden biridir. Neden? Çünkü bu tahmin neredeyse hiçbir zaman tutmaz.

Planlama yanılgısı (planning fallacy), insanların görevlerin ne kadar süreceğini sistematik olarak küçümseme eğilimidir. Bu sadece deneyimsizlikten kaynaklanmaz; deneyimli proje yöneticileri de bu tuzağa düşer.

## Neden Tahminler Tutmaz?

- **İyimserlik önyargısı:** Her şeyin yolunda gideceğini varsayarız.
- **Planlama yanılgısı:** Geçmiş gecikmeleri görmezden geliriz.
- **Bağımlılıkları gözden kaçırmak:** Bir görevin başka görevlere bağımlı olduğunu unuturuz.
- **Kesintileri hesaba katmamak:** Toplantılar, e-postalar, beklenmedik talepler zamanı yer.

## Daha İyi Tahmin İçin Pratik Teknikler

**Geçmiş verileri kullanın.** Benzer projelerde ne kadar sürdüğüne bakın. Sezgiye değil, veriye güvenin.

**Üç nokta tahmini yapın.** Her görev için iyimser, gerçekçi ve kötümser süre tahmin edin. Ağırlıklı ortalama alın.

**Tampon ekleyin.** Proje süresinin yüzde on beş ile yirmi arasında tampon bırakmak, kural değil zorunluluktur.

**Ekibi sürece dahil edin.** Görevi yapacak kişi en iyi tahmincidir. Yukarıdan dayatılan süreler gerçekçi olmaz.

## Tahmin Kültürü Oluşturun

Tahminlerin tutmaması cezalandırılmamalı; analiz edilmeli. Her proje sonunda "neden saptık?" sorusunu sormak, gelecekteki tahminleri iyileştirir.
    `,
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
    content: `
PMO (Proje Yönetim Ofisi) kurmak, organizasyonların proje yönetimi olgunluğunu artırmak için attığı en önemli adımlardan biridir. Ancak pek çok PMO girişimi, yanlış başlangıç noktası nedeniyle beklenen değeri üretemez.

## PMO'nun Amacını Netleştirin

PMO'lar üç farklı modelde çalışabilir: Destekleyici (araç ve şablon sağlar), Kontrol edici (standartlara uyumu denetler), Yönlendirici (projeleri doğrudan yönetir). Hangi modelin organizasyonunuza uygun olduğunu baştan belirleyin.

## Küçük Başlayın, Hızlı Değer Üretin

PMO'nun ilk altı ayında mükemmel bir metodoloji oluşturmaya çalışmak yerine, hızlı kazanımlar hedefleyin. Standart bir proje durum raporu şablonu bile büyük değer yaratabilir.

## Paydaş Desteğini Erken Kazanın

PMO'lar genellikle "bürokrasi" olarak algılanır. Bu algıyı kırmak için üst yönetimin desteğini ve proje yöneticilerinin güvenini erken kazanmak kritiktir.

## Araçları Sürece Göre Seçin

Önce süreçleri tanımlayın, sonra araçları seçin. Araç seçimini öne almak, süreci araca uydurmaya zorlar — bu her zaman yanlış sonuç verir.

## Olgunluk Değerlendirmesi Yapın

Başlamadan önce organizasyonun mevcut proje yönetimi olgunluk seviyesini değerlendirin. Bu değerlendirme, nereye odaklanmanız gerektiğini gösterir ve gerçekçi hedefler koymanızı sağlar.
    `,
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
    content: `
Banka entegrasyon projeleri, kurumsal yazılım dünyasının en zorlu proje türlerinden biridir. Teknik karmaşıklık, güvenlik gereksinimleri, banka tarafının süreçleri ve iş biriminin beklentileri aynı anda yönetilmek zorundadır.

12 yıl boyunca Turkcell'in finans yönetim süreçlerini destekleyen kurumsal platformda banka entegrasyonları üzerinde çalıştım. Bu deneyimden kritik başarı faktörlerini paylaşıyorum.

## Banka Tarafını Erken Sürece Dahil Edin

Banka entegrasyonlarında en büyük gecikme kaynağı, banka tarafının onay ve test süreçleridir. Bu süreçleri proje planına baştan entegre edin ve banka ile iletişimi erken başlatın.

## Web Servis Dokümantasyonunu Ciddiye Alın

Banka web servislerinin dokümantasyonu çoğu zaman eksik veya güncel değildir. Test ortamında karşılaşılan her tutarsızlığı kayıt altına alın ve banka ile yazılı olarak teyitleyin.

## SFTP Entegrasyonlarında Hata Yönetimini Tasarlayın

SFTP tabanlı entegrasyonlarda dosya transferi başarısız olduğunda ne olacağını baştan tasarlayın. Yeniden deneme mekanizmaları, hata bildirimleri ve manuel müdahale prosedürleri dokümante edilmeli.

## Test Senaryolarını İş Birimi ile Birlikte Yazın

Teknik testler yeterli değildir. İş biriminin gerçek kullanım senaryolarını test sürecine dahil edin. "Sistem çalışıyor" ile "iş süreci çalışıyor" farklı şeylerdir.

## Go-Live Sonrası Destek Planını Hazırlayın

Canlıya geçiş sonrası ilk iki hafta kritiktir. Teknik ekibin erişilebilirliğini, eskalasyon yollarını ve sorun çözüm sürelerini önceden belirleyin.
    `,
  },
  {
    id: 10,
    category: 'Paydaş Yönetimi',
    title: 'Proje Başarısını Belirleyen Gizli Faktör: Paydaş Güveni',
    excerpt:
      'Projeler çoğu zaman teknik nedenlerle değil, güven kaybı nedeniyle zorlaşır.',
    readTime: '7 dk',
    date: '26 Haziran 2026',
    image: '/airo-assets/images/pages/home/hero-featured',
    content: `
Proje yönetimi kariyerimizin büyük bölümünde kapsamı, zamanı, bütçeyi ve riskleri yönetmeye odaklanıyoruz. Başarıyı ölçerken de genellikle bu kriterleri referans alıyoruz. Proje zamanında tamamlandı mı? Bütçe hedefleri korundu mu? Beklenen çıktılar üretildi mi?

Ancak yıllar içinde farklı ölçeklerdeki projelerde edindiğim deneyim bana başka bir gerçeği gösterdi:

Projeler çoğu zaman teknik nedenlerle değil, güven kaybı nedeniyle zorlaşır.

Bugün aynı anda çok sayıda aktif proje, bakım operasyonu ve farklı müşteri beklentilerinin yönetildiği ortamlarda çalışırken görüyorum ki; kapsam değişiklikleri, entegrasyon sorunları, kaynak kısıtları veya beklenmeyen riskler çoğu zaman çözülebilir problemler. Fakat paydaşların projeye olan güveni kaybolduğunda, yönetilebilir problemler kısa sürede kriz algısına dönüşebiliyor.

Bu nedenle proje başarısının görünmeyen ancak en kritik bileşenlerinden birinin paydaş güveni olduğuna inanıyorum.

## Planlar Değil, İlişkiler Test Edilir

Bir projenin başlangıcında herkes aynı hedefe odaklanır. Takvimler hazırlanır, iş planları oluşturulur, kilometre taşları belirlenir.

Ancak projeler teoride değil, gerçek hayatın içinde yürütülür.

Yeni talepler ortaya çıkar. Öncelikler değişir. Beklenmeyen teknik sorunlar yaşanır. Kritik ekip üyeleri ayrılabilir. Bazen de proje başlangıcında öngörülmesi mümkün olmayan dış etkenler süreci etkiler.

İşte tam bu noktada projeyi ayakta tutan unsur, başlangıçta hazırlanan planlardan çok proje ekibi ile paydaşlar arasında kurulan ilişkidir.

Çünkü paydaşlar mükemmel proje beklemezler. Ancak süreci yöneten ekibin duruma hakim olduğuna, sorunları gizlemediğine ve doğru kararları aldığına inanmak isterler. Bu inanç ortadan kalktığında, en başarılı proje planı bile etkisini kaybetmeye başlar.

## Güven Bir Sonuçtur

Güven çoğu zaman bir yetkinlik gibi değerlendirilir. Oysa güven, proje yöneticisinin günlük davranışlarının doğal sonucudur.

Yıllar içinde özellikle dört davranışın güven oluşturma konusunda belirleyici olduğunu gözlemledim.

## Şeffaflık

Projelerde karşılaştığım en büyük risklerden biri, sorunların kendisinden çok geç paylaşılması oldu.

Bir gecikme yaşanabilir. Bir entegrasyon beklenenden uzun sürebilir. Bir teslimat tarihi revize edilebilir.

Ancak paydaşların güvenini sarsan konu genellikle bu olaylar değil, durumun son anda öğrenilmesidir.

Paydaşlar kötü haberi sevmezler ama sürprizlerden daha da az hoşlanırlar. Bu nedenle şeffaf iletişim yalnızca bir iletişim becerisi değil, güven oluşturmanın temel aracıdır.

## Gerçekçi Taahhütler

Proje yöneticileri zaman zaman tüm tarafları memnun etmek adına iyimser sözler verme eğiliminde olabilir. Ancak kısa vadeli memnuniyet yaratmak için verilen aşırı iyimser taahhütler, uzun vadede güven kaybına yol açar.

Deneyimlerim gösteriyor ki paydaşlar her zaman en hızlı cevabı beklemiyor. Daha çok, öngörülebilir ve tutarlı bir yaklaşım görmek istiyorlar.

Bazen "bu hedefe ulaşabiliriz" demek yerine, "bu hedefe ulaşmak için şu riskleri yönetmemiz gerekiyor" demek çok daha değerli olabiliyor.

## Erken Uyarı Kültürü

Başarılı projelerde riskler daha az olduğu için değil, daha erken görünür olduğu için yönetilebilir hale gelir.

Birçok projede yaşanan problemlerin kökenine baktığımızda, risklerin aslında haftalar öncesinden fark edildiğini görüyoruz. Ancak çeşitli nedenlerle bu bilgiler paylaşılmıyor veya yeterince görünür hale getirilmiyor.

Güven ortamı olan ekiplerde ise insanlar sorunları saklamaz. Çünkü amaç suçlu bulmak değil, çözüm üretmektir. Bu yaklaşım hem ekip içinde hem de müşteri tarafında güveni güçlendiren önemli bir unsur haline gelir.

## Tutarlılık

Güvenin belki de en sessiz bileşeni tutarlılıktır.

Paydaşlar proje yöneticisinin her zaman doğru karar vermesini beklemez. Ancak benzer durumlarda benzer prensiplerle hareket ettiğini görmek ister.

Karar mekanizmasının öngörülebilir olması, özellikle uzun soluklu projelerde güven seviyesini önemli ölçüde artırır.

## Güvenin Çarpan Etkisi

Paydaş güveninin ilginç bir özelliği vardır. Varlığında çoğu zaman fark edilmez. Yokluğunda ise her şey zorlaşır.

Güvenin yüksek olduğu projelerde değişiklik talepleri daha yapıcı değerlendirilir. Riskler daha erken paylaşılır. Kararlar daha hızlı alınır. Ekipler hata yapmaktan korkmadıkları için sorunları görünür hale getirir.

Sonuç olarak proje yönetiminin klasik başarı kriterleri olan zaman, maliyet ve kalite performansı da olumlu etkilenir.

Bir başka ifadeyle güven, proje yönetiminin "yumuşak" tarafı değil; sonuçları doğrudan etkileyen stratejik bir performans unsurudur.

## Sonuç

Son yıllarda vurgulandığı gibi proje yönetimi artık yalnızca süreçleri ve teslimatları yönetmekten ibaret değil. Değer yaratmak, değişimi yönetmek ve insanları ortak hedef etrafında bir araya getirmek her zamankinden daha önemli hale geliyor.

Bu noktada proje yöneticisinin rolü yalnızca planları takip etmek değil, güven ortamını oluşturmak ve korumaktır.

Çünkü projeler süreçlerle yönetilir. Ancak insanlar güvenle hareket eder. Ve çoğu zaman proje başarısını belirleyen en kritik unsur, proje sonunda teslim edilen çıktılardan önce, proje boyunca inşa edilen güven seviyesidir.
    `,
  },
];

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-foreground mt-10 mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('- **')) {
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={key++} className="mb-2 text-foreground/80 leading-relaxed">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2]}
          </li>
        );
      }
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="mb-2 text-foreground/80 leading-relaxed">
          {line.replace('- ', '')}
        </li>
      );
    } else if (line.startsWith('**')) {
      const text = line.replace(/\*\*/g, '');
      elements.push(
        <p key={key++} className="text-foreground/85 leading-relaxed mb-4">
          <strong className="text-foreground font-semibold">{text}</strong>
        </p>
      );
    } else {
      elements.push(
        <p key={key++} className="text-foreground/80 leading-relaxed mb-4 text-base md:text-lg">
          {line}
        </p>
      );
    }
  }

  // Wrap consecutive <li> elements in <ul>
  const wrapped: React.ReactNode[] = [];
  let listBuffer: React.ReactNode[] = [];
  let listKey = 0;

  elements.forEach((el) => {
    if ((el as React.ReactElement).type === 'li') {
      listBuffer.push(el);
    } else {
      if (listBuffer.length > 0) {
        wrapped.push(
          <ul key={`ul-${listKey++}`} className="list-disc list-inside mb-4 space-y-1 pl-2">
            {listBuffer}
          </ul>
        );
        listBuffer = [];
      }
      wrapped.push(el);
    }
  });
  if (listBuffer.length > 0) {
    wrapped.push(
      <ul key={`ul-${listKey++}`} className="list-disc list-inside mb-4 space-y-1 pl-2">
        {listBuffer}
      </ul>
    );
  }

  return wrapped;
}

export default function YaziDetayPage() {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || '1', 10);
  const article = allArticles.find((a) => a.id === articleId) || allArticles[0];

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2)
    .concat(allArticles.filter((a) => a.id !== article.id && a.category !== article.category).slice(0, 2 - allArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2).length));

  const prevArticle = allArticles.find((a) => a.id === articleId - 1);
  const nextArticle = allArticles.find((a) => a.id === articleId + 1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://umitkarakaya.com/yazilar/${article.id}#webpage`,
    headline: article.title,
    description: article.excerpt,
    url: `https://umitkarakaya.com/yazilar/${article.id}`,
    image: `https://umitkarakaya.com${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'tr',
    author: {
      '@type': 'Person',
      '@id': 'https://umitkarakaya.com/#person',
      name: 'Ümit Karakaya',
      url: 'https://umitkarakaya.com/hakkinda',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://umitkarakaya.com/#organization',
      name: 'Yönetim Sahnesi',
      url: 'https://umitkarakaya.com',
    },
    isPartOf: { '@id': 'https://umitkarakaya.com/#website' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://umitkarakaya.com/yazilar/${article.id}`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{article.title} — Yönetim Sahnesi</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://umitkarakaya.com/yazilar/${article.id}`} />
        <meta property="og:title" content={`${article.title} — Yönetim Sahnesi`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://umitkarakaya.com/yazilar/${article.id}`} />
        <meta property="og:image" content={`https://umitkarakaya.com${article.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${article.title} — Yönetim Sahnesi`} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={`https://umitkarakaya.com${article.image}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Article Content */}
      <div className="container mx-auto px-6 pt-12">
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Back link */}
          <Link
            to="/yazilar"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Tüm Yazılar
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                <Tag size={11} />
                {article.category}
              </span>
              <span className="text-muted-foreground/40 text-xs">·</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock size={11} />
                {article.readTime} okuma
              </span>
              <span className="text-muted-foreground/40 text-xs">·</span>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {article.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 border-l-4 border-accent pl-4">
              {article.excerpt}
            </p>

            {/* Author + Actions */}
            <div className="flex items-center justify-between py-4 border-y border-border mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary">ÜK</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Ümit Karakaya</p>
                  <p className="text-xs text-muted-foreground">Proje Yönetimi Ekip Lideri · Logo Yazılım</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label="Paylaş"
                >
                  <Share2 size={16} />
                </button>
                <button
                  className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label="Kaydet"
                >
                  <Bookmark size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="prose-custom"
          >
            {renderContent(article.content)}
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
            <span className="text-xs text-muted-foreground mr-1">Etiketler:</span>
            {[article.category, 'Proje Yönetimi', 'Liderlik'].map((tag) => (
              <Link
                key={tag}
                to="/yazilar"
                className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Prev / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {prevArticle ? (
              <Link
                to={`/yazilar/${prevArticle.id}`}
                className="group flex flex-col gap-1 p-4 border border-border rounded-lg hover:border-primary hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowLeft size={12} /> Önceki Yazı
                </span>
                <span
                  className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {prevArticle.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle ? (
              <Link
                to={`/yazilar/${nextArticle.id}`}
                className="group flex flex-col gap-1 p-4 border border-border rounded-lg hover:border-primary hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 sm:text-right"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 sm:justify-end">
                  Sonraki Yazı <ArrowRight size={12} />
                </span>
                <span
                  className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {nextArticle.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-2xl mx-auto mt-16 pb-16">
            <h2
              className="text-xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedArticles.slice(0, 2).map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' as const }}
                >
                  <Link
                    to={`/yazilar/${rel.id}`}
                    className="group flex gap-4 p-4 border border-border rounded-lg hover:border-primary hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-20 h-16 object-cover rounded shrink-0"
                      loading="lazy"
                      width={80}
                      height={64}
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent">{rel.category}</span>
                      <p
                        className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {rel.title}
                      </p>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock size={10} /> {rel.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
