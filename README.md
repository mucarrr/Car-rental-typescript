# 🚗 Car Rental - Araç Kiralama Uygulaması

Modern ve kullanıcı dostu bir araç kiralama web uygulaması. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

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

## Preview of the Project 
![](car-rental.gif)

