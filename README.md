# 📊 SmartExpense – AI Budget Predictor
A modern, intelligent financial tracking web app built using **React**, 
**TailwindCSS**, **Recharts**, and **Framer Motion**.  
SmartExpense helps users upload their bank SMS/expense logs, analyze their 
spending patterns, and get early predictions about overspending.  

---

## 🚀 Live Demo  
[(live server)](https://v0-smart-expense-react-ui.vercel.app/)

---

## 🎯 Project Overview  
SmartExpense is an AI-assisted budget prediction app that visualizes your daily 
expenses, categorizes them, and predicts when you may exceed your monthly budget.  
The UI is fully responsive, futuristic, and built with a glassmorphism theme.

---

## 🌟 Features

### ✅ **1. File Upload & Parsing**
- Upload `.txt`, `.csv`, or `.json` bank SMS logs  
- Extract expenses, categories, dates  
- Fast client-side parsing  

### ✅ **2. Smart Categorization**
Automatically detects categories such as:
- Food  
- Travel  
- Shopping  
- Bills  
- Miscellaneous  

### ✅ **3. Trend Visualizations**
Beautiful charts using **Recharts**:
- Line chart → daily spending  
- Bar chart → monthly comparison  
- Pie chart → category distribution  

### ✅ **4. Budget Prediction**
Predicts:
- Overspending date  
- Risk level (Low / Medium / High)  
- Financial health score  

### ✅ **5. Interactive Dashboard**
- Animated summary cards  
- Alerts for exceeding daily average  
- Real-time updates using state management  

### ✅ **6. Elegant UI**
- Glassmorphism design  
- Neon accents  
- Smooth animations  
- Fully responsive  

---

## 🏗️ Tech Stack

### **Frontend**
- React (Vite)
- TailwindCSS
- Recharts
- Framer Motion
- React Router

### **Backend (Future)**
- Python + FastAPI  
- ML forecasting models (Prophet / Linear Regression)  

---

## 📁 Folder Structure
SmartExpense/
├── src/
│ ├── components/
│ │ ├── FileUpload.jsx
│ │ ├── SummaryCard.jsx
│ │ ├── TrendChart.jsx
│ │ ├── MonthlyBarChart.jsx
│ │ ├── CategoryPie.jsx
│ │ ├── PredictionAlert.jsx
│ │ ├── RiskLevelIndicator.jsx
│ │ ├── RecommendationCard.jsx
│ │ ├── Navbar.jsx
│ │ └── Loader.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── Prediction.jsx
│ │ └── Upload.jsx
│ ├── utils/
│ │ ├── parseLogs.js
│ │ ├── categorize.js
│ │ ├── predict.js
│ │ └── storage.js
│ ├── App.jsx
│ └── main.jsx
├── public/
├── package.json
└── README.md

---
