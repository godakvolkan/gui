# 🏗️ Modern Mimarlık Web Sitesi

Modern, responsive ve kullanıcı dostu bir mimarlık firması web sitesi. React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## ✨ Özellikler

### 🎨 Tasarım & Kullanıcı Deneyimi

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Dark/Light Mode**: Kullanıcı tercihine göre tema değiştirme
- **Animasyonlar**: Smooth geçişler ve interaktif animasyonlar
- **Gradient Renkler**: Modern gradient tasarım öğeleri
- **Glassmorphism Efektleri**: Şeffaf ve bulanık arka plan efektleri

### 📱 Sayfalar & Bölümler

- **Ana Sayfa**: Hero section, hizmetler, istatistikler, referanslar
- **Hakkımızda**: Şirket bilgileri ve değerler
- **Projeler**: Portföy ve tamamlanan projeler
- **Hizmetler**: Sunulan mimarlık hizmetleri
- **İletişim**: Harita entegrasyonu ve iletişim bilgileri
- **Sertifikalar**: Şirket sertifikaları ve başarılar
- **Süreç**: Proje yönetim süreci
- **Fiyatlandırma**: Hizmet paketleri ve fiyatlar
- **SSS**: Sık sorulan sorular
- **Yeni Evli İndirimi**: Özel kampanya sayfası

### 🛠️ Teknik Özellikler

- **React 19**: En güncel React sürümü
- **TypeScript**: Tip güvenliği
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Sayfa yönlendirme
- **Google Maps**: Harita entegrasyonu
- **Lucide React**: Modern ikonlar
- **Formik & Yup**: Form yönetimi ve validasyon
- **Axios**: HTTP istekleri
- **Leaflet**: Alternatif harita çözümü

## 🚀 Kurulum

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

### Adım 1: Projeyi Klonlayın

```bash
git clone <repository-url>
cd projem
```

### Adım 2: Bağımlılıkları Yükleyin

```bash
npm install
# veya
yarn install
```

### Adım 3: Google Maps API Anahtarı

1. [Google Cloud Console](https://console.cloud.google.com/)'a gidin
2. Yeni bir proje oluşturun
3. Maps JavaScript API'yi etkinleştirin
4. API anahtarı oluşturun
5. `src/components/MapSection.tsx` dosyasında API anahtarını güncelleyin:

```typescript
const loader = new Loader({
  apiKey: "YOUR_ACTUAL_API_KEY_HERE", // Buraya gerçek API anahtarınızı ekleyin
  version: "weekly",
  libraries: ["places"],
});
```

### Adım 4: Projeyi Çalıştırın

```bash
npm start
# veya
yarn start
```

Proje [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── HomePage.tsx    # Ana sayfa
│   ├── About.tsx       # Hakkımızda sayfası
│   ├── ProjectsPage.tsx # Projeler sayfası
│   ├── ServicesPage.tsx # Hizmetler sayfası
│   ├── Contact.tsx     # İletişim sayfası
│   ├── MapSection.tsx  # Harita bileşeni
│   ├── Navigation.tsx  # Navigasyon menüsü
│   ├── Footer.tsx      # Alt bilgi
│   └── ...            # Diğer bileşenler
├── contexts/           # React context'leri
│   └── ThemeContext.tsx # Tema yönetimi
├── App.tsx            # Ana uygulama bileşeni
├── index.tsx          # Uygulama giriş noktası
└── index.css          # Global stiller
```

## 🎯 Kullanılan Teknolojiler

### Frontend

- **React 19.1.0**: Modern React sürümü
- **TypeScript 4.9.5**: Tip güvenliği
- **Tailwind CSS 3.4.0**: Utility-first CSS
- **React Router 7.6.2**: Sayfa yönlendirme

### UI/UX

- **Lucide React 0.519.0**: Modern ikonlar
- **Tailwind Forms**: Form stilleri
- **Custom Animations**: Özel animasyonlar

### Harita & Konum

- **Google Maps JS API**: Ana harita çözümü
- **Leaflet 1.9.4**: Alternatif harita
- **React Leaflet 5.0.0**: React Leaflet entegrasyonu

### Form & Validasyon

- **Formik 2.4.6**: Form yönetimi
- **Yup 1.6.1**: Form validasyonu
- **React Hook Form 7.58.1**: Alternatif form yönetimi

### HTTP & API

- **Axios 1.10.0**: HTTP istekleri

### Test & Geliştirme

- **Jest**: Test framework
- **React Testing Library**: Component testleri
- **ESLint**: Kod kalitesi

## 🎨 Tema Sistemi

Proje dark/light mode desteği ile gelir. Tema değiştirme `ThemeToggle` bileşeni ile yapılır:

```typescript
// Tema değiştirme
const { theme, toggleTheme } = useTheme();
```

### Renk Paleti

- **Primary**: Blue gradient (#2563EB → #7C3AED)
- **Secondary**: Purple gradient (#7C3AED → #EC4899)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

## 📱 Responsive Tasarım

Proje tüm cihaz boyutlarında optimize edilmiştir:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm start

# Production build oluştur
npm run build

# Testleri çalıştır
npm test

# Build'i test et
npm run eject
```

## 🌐 Deployment

### Netlify

1. Netlify hesabınıza giriş yapın
2. "New site from Git" seçin
3. Repository'nizi bağlayın
4. Build komutunu `npm run build` olarak ayarlayın
5. Publish directory'yi `build` olarak ayarlayın

### Vercel

1. Vercel hesabınıza giriş yapın
2. "New Project" seçin
3. Repository'nizi import edin
4. Framework preset'i "Create React App" olarak seçin
5. Deploy edin

## 🔒 Güvenlik

- Google Maps API anahtarınızı environment variable olarak saklayın
- Production'da API anahtarınızı kısıtlayın
- HTTPS kullanın

## 📈 Performans

- **Lazy Loading**: Sayfa bileşenleri lazy load edilir
- **Image Optimization**: Optimize edilmiş görseller
- **Code Splitting**: Otomatik kod bölme
- **Caching**: Browser caching optimizasyonu

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Adres**: Esenevler, İsmet İnönü Blv. No:14, 55200 Atakum / Samsun
- **Telefon**: +90 312 123 45 67
- **E-posta**: info@mimarlikofisi.com
- **Çalışma Saatleri**: Pazartesi - Cuma: 09:00 - 18:00, Cumartesi: 09:00 - 14:00

## 🙏 Teşekkürler

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library
- [Google Maps](https://developers.google.com/maps) - Harita servisi

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
