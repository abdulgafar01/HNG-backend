# Public API Retrieve Basic Information HNG-intenship

This is a **public API** built with **Node.js** and **Express.js** that provides:  
- The **current datetime** in **ISO 8601 (UTC)** format.  
- An **email address**.  
- The **GitHub repository URL** for this project.  

##  Features
- Returns JSON response with `email`, `current_datetime`, and `github_url`
- Supports **CORS (Cross-Origin Resource Sharing)**  
- Uses **ES Modules (import syntax)**  
- Deployed to a **publicly accessible URL**  Render

---

##  API Endpoint

### **Base URL**
[https://hng-backend-e0pu.onrender.com/](https://hng-backend-e0pu.onrender.com/)

### Request/response format.

- Retrieve Basic Information
- Request
Method: GET

URL: /

Parameters: None
- Response
Status: 200 OK

Content-Type: application/json

Response Body:
```
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/abdulgafar01/HNG-backend"
}
```

##   Setup Instructions

### Clone the Repository
git clone [https://github.com/abdulgafar01/HNG-backend.git](https://github.com/abdulgafar01/HNG-backend/)

cd HNG-backend
### Install Dependencies
npm install
### Run Locally
npm run start:dev

The API will be accessible at:
http://localhost:3000


## Example Usage
### Using Curl
curl -X GET [https://hng-backend-e0pu.onrender.com](https://hng-backend-e0pu.onrender.com)/

### Using JavaScript Fetch
```
fetch("https://hng-backend-e0pu.onrender.com")
  .then(response => response.json())
  .then(data => console.log(data));

  ```



## License
This project is licensed under the MIT License.

