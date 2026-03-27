# 🃏 Playing Cards REST API

A simple RESTful API built with **Express.js** to manage a collection of playing cards. This project demonstrates CRUD operations, pagination, and a clean layered architecture (MVC + Service pattern).

---

## 🚀 Features

* Create, Read, Update, Delete (CRUD) operations
* Pagination support
* Clean project structure (Controller, Service, Model, Routes)
* In-memory database (no external DB required)
* Easy to test using Postman

---

## 📁 Project Structure

```
project-root/
├─ index.js
├─ package.json
├─ controllers/
│  └─ card.controller.js
├─ models/
│  └─ card.model.js
├─ routes/
│  └─ card.routes.js
└─ services/
   └─ card.service.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/cards-api.git
cd cards-api
```

### 2. Install dependencies

```
pnpm install
```

### 3. Run the server

```
pnpm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🌐 API Endpoints

### 🔹 Base URL

```
http://localhost:3000
```

---

### 📌 1. Get All Cards

```
GET /cards
```

#### Query Parameters:

* `page` (default: 1)
* `limit` (default: 10)

#### Example:

```
/cards?page=1&limit=5
```

---

### 📌 2. Get Single Card

```
GET /cards/:id
```

---

### 📌 3. Create Card

```
POST /cards
```

#### Body (JSON):

```
{
  "suit": "hearts",
  "value": "ace",
  "collection": "classic"
}
```

---

### 📌 4. Update Card

```
PUT /cards/:id
```

#### Body:

```
{
  "value": "king"
}
```

---

### 📌 5. Delete Card

```
DELETE /cards/:id
```

---

## 📊 Sample Response (Pagination)

```
{
  "totalCards": 1,
  "totalPages": 1,
  "currentPage": 1,
  "limit": 10,
  "cards": [
    {
      "id": 171836785992,
      "suit": "diamonds",
      "value": "queen",
      "collection": "royal"
    }
  ],
  "next": { "page": 2, "limit": 10 },
  "previous": { "page": 1, "limit": 10 }
}
```

---

## 🧠 How It Works

1. **Routes** handle API endpoints
2. **Controllers** process requests and responses
3. **Services** contain business logic (pagination, processing)
4. **Models** manage data (in-memory array)

---

## ⚠️ Notes

* Data is stored in memory → it resets when the server restarts
* Make sure to use correct routes: `/cards` (not `/api/cards`)
* Always send JSON body for POST and PUT requests

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* CORS
* Nodemon

---

## 📌 Future Improvements

* Add MongoDB database
* Add authentication (JWT)
* Add filtering and sorting
* Deploy to cloud (Vercel/Render)

---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/your-username

---

## ⭐ Contributing

Feel free to fork this repo and improve it!

---
