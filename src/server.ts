import app from "./app";
import { config } from "dotenv";
import { connectDB } from "./db";


config();

const port = process.env.PORT || 4000;

app.listen(port, async () => {
   await connectDB();
    
  console.log(`Server is running on port ${port}`);
});
