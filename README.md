# 🎯 FAQBACKEND – Frequently Asked Questions API

![FAQ API](https://img.shields.io/badge/API-FAQ--Backend-blue?style=for-the-badge)  
A **powerful & efficient backend** for managing FAQ entries using **Node.js, Express, and MongoDB**. 🚀

---

## 🔥 Features
✅ Retrieve all FAQ entries  
✅ Add new FAQ entries  
✅ Update existing FAQ entries  
✅ Delete FAQ entries  
✅ Follows RESTful API standards  

---

## 🛠 Tech Stack
| Technology  | Description  |
|-------------|-------------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **dotenv** | Environment variables |

---

## 🚀 Getting Started  

### ✅ Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (v14 or higher)  
- [MongoDB](https://www.mongodb.com/) or **MongoDB Atlas**  
- [Git](https://git-scm.com/)  

### 🛠 Installation  

1️⃣ **Clone the repository:**  
```bash
git clone https://github.com/chiragSahani/FAQBACKEND.git
cd FAQBACKEND
```

2️⃣ **Install dependencies:**  
```bash
npm install
```

3️⃣ **Set up environment variables:**  
Create a `.env` file in the project root and add:  
```ini
MONGO_URI=your_mongodb_connection_string
```

4️⃣ **Run the development server:**  
```bash
npm start
```
🌐 The server will be running at **http://localhost:3000**

---

## 👀 API Endpoints

| Method  | Endpoint        | Description         | Auth Required |
|---------|----------------|---------------------|--------------|
| `GET`   | `/api/faqs`     | Fetch all FAQs      | ❌ No        |
| `POST`  | `/api/faqs`     | Add a new FAQ       | ✅ Yes       |
| `PUT`   | `/api/faqs/:id` | Update an FAQ       | ✅ Yes       |
| `DELETE`| `/api/faqs/:id` | Delete an FAQ       | ✅ Yes       |

### 📌 Example API Requests  

#### 📌 Fetch All FAQs  
```http
GET /api/faqs
```
📌 **Response:**  
```json
[
  {
    "id": "1",
    "question": "What is FAQ?",
    "answer": "FAQ stands for Frequently Asked Questions."
  }
]
```

#### 📌 Add a New FAQ  
```http
POST /api/faqs
```
📌 **Request Body:**  
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
}
```

#### 📌 Update an FAQ  
```http
PUT /api/faqs/:id
```
📌 **Request Body:**  
```json
{
  "question": "Updated question?",
  "answer": "Updated answer."
}
```

#### 📌 Delete an FAQ  
```http
DELETE /api/faqs/:id
```
📌 **Response:**  
```json
{
  "message": "FAQ deleted successfully."
}
```

---

## 🤝 Contributing  

1. **Fork** the repository  
2. Create a new branch:  
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit** your changes:  
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push** to your branch:  
   ```bash
   git push origin feature-branch
   ```
5. **Open a Pull Request**  

---

## 📝 License  
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

💡 _Happy Coding!_ 🚀  
