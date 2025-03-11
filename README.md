# 🚗 Car Rental - Araç Kiralama Uygulaması

Modern ve kullanıcı dostu bir araç kiralama web uygulaması. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

![Car Rental App](https://via.placeholder.com/800x400?text=Car+Rental+App)

## 🌟 Özellikler

- 🔍 Araçları marka, model ve yıla göre filtreleme
- 📱 Tamamen responsive tasarım
- 🖼️ Gerçekçi araç görselleri
- 📊 Sayfalama sistemi
- 💰 Otomatik fiyat hesaplama
- 🔍 Detaylı araç bilgileri

## 🛠️ Teknolojiler

- **Frontend**: React 19, TypeScript
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 4
- **Bundler**: Vite 6
- **Animation**: Motion
- **Component Libraries**: React Select, React Paginate

## 🚀 Kurulum ve Çalıştırma

### Gereksinimleri

- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. Repoyu klonlayın:

   ```bash
   git clone https://github.com/yourusername/car_rental.git
   cd car_rental
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   # veya
   yarn install
   ```

3. Geliştirme sunucusunu başlatın:

   ```bash
   npm run dev
   # veya
   yarn dev
   ```

4. Tarayıcınızda açın:
   ```
   http://localhost:5173
   ```

## 📂 Proje Yapısı

```
src/
├── components/         # UI bileşenleri
│   ├── button/         # Buton bileşenleri
│   ├── filter/         # Filtreleme bileşenleri
│   ├── header/         # Başlık bileşeni
│   ├── hero/           # Ana sayfa hero bileşeni
│   ├── list/           # Araç listesi ve kart bileşenleri
│   ├── modal/          # Modal bileşeni
│   └── warning/        # Uyarı mesajları bileşeni
├── pages/              # Sayfa bileşenleri
│   └── home/           # Ana sayfa
├── types/              # TypeScript tip tanımlamaları
├── utils/              # Yardımcı fonksiyonlar
│   ├── CalcPrice.ts    # Fiyat hesaplama
│   ├── constants.ts    # Sabit değerler
│   ├── generateImage.ts # Araç görseli oluşturma
│   └── service.ts      # API servisleri
├── App.tsx             # Ana uygulama bileşeni
├── index.css           # Global CSS
└── main.tsx            # Uygulama giriş noktası
```

## 🔄 API Kullanımı

Uygulama, araç verilerini [OpenDataSoft API](https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model) üzerinden çekmektedir. API, araçları marka, model ve yıl gibi parametrelere göre filtreleme imkanı sunmaktadır.

## 📱 Ekran Görüntüleri

### Ana Sayfa

![Ana Sayfa](https://via.placeholder.com/400x200?text=Ana+Sayfa)

### Araç Listesi

![Araç Listesi](https://via.placeholder.com/400x200?text=Araç+Listesi)

### Araç Detayları

![Araç Detayları](https://via.placeholder.com/400x200?text=Araç+Detayları)

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

## 📞 İletişim

Sorularınız veya geri bildirimleriniz için [email protected] adresine e-posta gönderebilirsiniz.

---

⭐️ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐️
