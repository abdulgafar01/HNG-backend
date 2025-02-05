# Number Classification API

## Overview
The **Number Classification API** is a simple API built with **Express.js** that classifies a given number based on various mathematical properties and provides a fun fact about the number using the **Numbers API**.

## Features
- Checks if a number is **prime number**.
- Checks if a number is **perfect number**.
- Determines if a number is an **Armstrong number**.
- Determines if a number is **odd** or **even**.
- Calculates the **sum of its digits**.
- Fetches a **fun fact** about the number from an external API.
- Handles **CORS** for cross-origin requests.
- Provides **JSON responses** with appropriate HTTP status codes.

## Technologies Used
- **Node.js**
- **Express.js**
- **Axios** (for external API calls)
- **CORS** (to enable cross-origin requests)

## API Specification
### Endpoint
`GET /api/classify-number?number=<num>`

### Query Parameter
| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| number    | Integer | Yes      | The number to classify         |

### Responses
#### **200 OK** (Valid Number Input)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### **400 Bad Request** (Invalid Input)
```json
{
    "number": "alphabet",
    "error": true
}
```

#### **500 Internal Server Error** (Failure to Fetch Fun Fact)
```json
{
    "error": "Failed to fetch fun fact from numberapi"
}
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone "https://github.com/abdulgafar01/HNG-backend.git"
cd Task-2
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the API Locally
```sh
node index.js
```
The server will start on `http://localhost:3000`.

## Deployment
You can deploy the API using any cloud platform, such as:
- **Vercel**
- **Render**

### Deployment Steps
1. **Push the code to GitHub**
```sh
git add .
git commit -m "Initial commit"
git push origin main
```
2. **Deploy using your preferred platform**.
3. **Set the deployed URL in your submission.**

## Usage Example
### Request
```sh
curl -X GET "http://localhost:3000/api/classify-number?number=371"
```

### Response
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Contributing
If you would like to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is open-source and available under the **MIT License**.

## Author
Developed by **Busari Abdulgafar**.
