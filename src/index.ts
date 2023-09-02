import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Server is Ready"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
