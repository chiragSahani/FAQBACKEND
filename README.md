
# 🎯 FAQBACKEND – Frequently Asked Questions API

A **powerful & efficient backend** for managing FAQ entries using **Node.js, Express, and MongoDB**. 🚀

---

## 🔥 Features
✅ Retrieve all FAQ entries by language  
✅ Add new FAQ entries in Hindi, Gujarati, Marathi, or Bengali  
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
- Node.js (v14 or higher)  
- MongoDB or **MongoDB Atlas**  
- Git  

### 🛠 Installation  

1️⃣ **Clone the repository:**  
```bash
git clone https://github.com/chiragSahani/FAQBACKEND.git
cd FAQBACKEND
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Set up environment variables:

Create a .env file in the project root and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4️⃣ Run the development server:

```bash
npm start
```

🌐 The server will be running at http://localhost:3000.

## 👀 API Endpoints

| **Method** | **Endpoint**        | **Description**                                        | **Auth Required** |
|------------|---------------------|--------------------------------------------------------|-------------------|
| `GET`      | `/api/faqs`         | Fetch all FAQs or filter by language (`?lang=hi`, `?lang=gu`, `?lang=mr`, `?lang=bn`) | ❌ No             |
| `POST`     | `/api/faqs`         | Add a new FAQ                                          | ✅ Yes            |
| `PUT`      | `/api/faqs/:id`     | Update an existing FAQ entry                           | ✅ Yes            |
| `DELETE`   | `/api/faqs/:id`     | Delete a specific FAQ entry                            | ✅ Yes            |


📌 Example API Requests
📌 Fetch All FAQs  
Request:

```bash
GET /api/faqs?lang=hi
```

Response:

```json
[
  {
    "id": "1",
    "question": "FAQ क्या है?",
    "answer": "FAQ का अर्थ है अक्सर पूछे जाने वाले प्रश्न।",
    "language": "hi"
  }
]
```

📌 Add a New FAQ  
Request:

```bash
POST /api/faqs
```

Request Body:

```json
{
  "question": "Node.js क्या है?",
  "answer": "Node.js एक JavaScript runtime है।",
  "language": "hi"
}
```
### Request Body for Bengali (`bn`):
```json
{
  "question": "Node.js কী?",
  "answer": "Node.js একটি JavaScript runtime।",
  "language": "bn"
}

```
### Request Body for Marathi (`mr`):
```json
{
  "question": "Node.js काय आहे?",
  "answer": "Node.js एक JavaScript runtime आहे.",
  "language": "mr"
}
```

### Request Body for Gujarati (`gu`):
```json
{
  "question": "Node.js શું છે?",
  "answer": "Node.js એ JavaScript runtime છે.",
  "language": "gu"
}
```
📌 Update an FAQ  
Request:

```bash
PUT /api/faqs/:id
```

Request Body:

```json
{
  "question": "Updated question?",
  "answer": "Updated answer.",
  "language": "gu"
}
```

📌 Delete an FAQ  
Request:

```bash
DELETE /api/faqs/:id
```

Response:

```json
{
  "message": "FAQ deleted successfully."
}
```

🤝 Contributing  
Fork the repository.

Create a new branch:

```bash
git checkout -b feature-branch
```

Commit your changes:

```bash
git commit -am 'Add new feature'
```

Push to your branch:

```bash
git push origin feature-branch
```

Open a Pull Request.

📝 License  
```
This project is licensed under the MIT License – see the LICENSE file for details.
```
💡 Happy Coding! 🚀
