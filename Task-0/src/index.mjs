import express from "express"
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();


const app = express()
// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;



app.get("/",(request, response) => {
    response.status(200).json({
        email: "abdulgafarbusari49@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/abdulgafar01/HNG-backend"
      });
})


app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})

