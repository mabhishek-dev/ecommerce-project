# React E-Commerce Project

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A **React-based e-commerce application** built using **React, Vite, JavaScript, and TypeScript**.  
The project replicates a simplified online shopping experience including product browsing, cart management, checkout flow, order tracking, and navigation across multiple pages.

The application consists of a **React frontend** that communicates with a **locally running backend API**. Both services must be running locally for the application to function properly.

---

## Tech Stack

Frontend:

- **React**
- **JavaScript**
- **TypeScript**
- **Vite**
- **CSS**
- **React Router**

Backend (used locally by the frontend):

- **Node.js**
- **Express**

---

## Features

- Product listing page
- Add products to cart
- Dynamic cart updates
- Checkout page with **order summary** and **payment summary**
- Orders page displaying placed orders
- Tracking page for order tracking
- Navigation between pages using **React Router**
- Communication with a locally running backend API for product and order data

---

## Project Structure

```
ecommerce-project/
│
├── ecommerce-backend/
│   └── ...
│
└── ecommerce-project/
    │
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   │   ├── home/
    │   │   ├── checkout/
    │   │   ├── orders/
    │   │   └── tracking/
    │   ├── utils/
    │   └── assets/
    │
    ├── screenshots/
    │   ├── main-page.png
    │   ├── checkout-page.png
    │   └── orders-page.png
    │
    ├── public/
    ├── index.html
    └── vite.config.ts
```

---

## Running the Project Locally

Both the **backend and frontend must be running** for the application to work.

### 1. Clone the Repository

```bash
git clone https://github.com/mabhishek-dev/ecommerce-project.git
cd ecommerce-project
```

---

### 2. Start the Backend

Open a terminal and run:

```bash
cd ecommerce-backend
npm install
npm run dev
```

The backend API must be running before starting the frontend.

---

### 3. Start the Frontend

Open a **second terminal** and run:

```bash
cd ecommerce-project
npm install
npm run dev
```

The frontend will connect to the locally running backend API.

After the server starts, open the **local development URL shown in the terminal** (typically `http://localhost:5173`) in your browser.

---

## Screenshots

### Main Page
![Main Page](ecommerce-project/screenshots/main-page.png)

### Checkout Page
![Checkout Page](ecommerce-project/screenshots/checkout-page.png)

### Orders Page
![Orders Page](ecommerce-project/screenshots/orders-page.png)

---

## License

This project is licensed under the **MIT License**.
