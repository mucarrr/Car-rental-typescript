## 🚗 Car Rental Application
A modern and user-friendly car rental web application. Developed with React, TypeScript, and Tailwind CSS.

##🌟 Features
🔍 Filter cars by make, model, and year
📱 Fully responsive design
🖼️ Realistic car visuals
📊 Pagination system
💰 Automatic price calculation
🔍 Detailed vehicle information

## 🛠️ Technologies
Frontend: React 19, TypeScript
Routing: React Router DOM 7
Styling: Tailwind CSS 4
Bundler: Vite 6
Animation: Motion
Component Libraries: React Select, React Paginate

## 📂 Proje Yapısı

├src/
├── components/         # UI components
│   ├── button/         # Button components
│   ├── filter/         # Filtering components
│   ├── header/         # Header component
│   ├── hero/           # Home page hero component
│   ├── list/           # Vehicle list and card components
│   ├── modal/          # Modal component
│   └── warning/        # Warning messages component
├── pages/              # Page components
│   └── home/           # Home page
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
│   ├── CalcPrice.ts    # Price calculation
│   ├── constants.ts    # Constant values
│   ├── generateImage.ts # Vehicle image generation
│   └── service.ts      # API services
├── App.tsx             # Main application component
├── index.css           # Global CSS
└── main.tsx            # Application entry point


## 🔄 API Usage
The application fetches vehicle data from the OpenDataSoft API. The API provides the ability to filter vehicles by parameters such as make, model, and year.

## Preview of the Project 
![](car-rental.gif)

