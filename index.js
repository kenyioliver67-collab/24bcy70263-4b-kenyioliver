import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
    res.send("Welcome to Playing Cards API");
});

// Routes
app.use("/cards", cardRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});