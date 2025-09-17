

# 📚 MERN Stack Bookstore

This repository contains a full-stack Bookstore application built with the MERN stack (**MongoDB**, **Express.js**, **React**, **Node.js**). It features a RESTful API for managing book and user data, a responsive React frontend for browsing and purchasing, and MongoDB for storage. Ideal for learning full-stack development with MERN.

## 🌟 Features

- 🛒 **Browse Books:** Explore a wide variety of books available in the store.
- 📖 **Book Details:** View detailed information about each book, including price and description.
- 💼 **User Management:** Create and manage user accounts (signup/login).
- 🛍️ **Add to Cart:** Add your favorite books to the shopping cart.
- � **Multiple Payment Options:** (UI only)
- 👤 **Admin Panel:** (UI only)
- �🚀 **Fast and Responsive:** Enjoy a smooth and responsive user interface.

## 🌐 Live Demo

[Bookstore Live Frontend](https://bookstore-frontend-qo8o.onrender.com/)

---

## 🚀 Getting Started (Local Development)

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/dhruvjain-github/Bookstore.git
cd Bookstore
```

### 2. Setup the Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory with the following content:

```env
PORT=4000
MONGODBURI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

### 3. Setup the Frontend

In a new terminal:

```bash
cd ../Frontend
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## 📁 Project Structure

```
Bookstore/
├── Backend/
│   ├── app.js
│   ├── controllers/
│   ├── model/
│   ├── routes/
│   └── package.json
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the ISC License.

