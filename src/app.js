import express from "express";
import cors from "cors";
const app = express();

// Basic Configuration for Express
app.use(
  express.json({
    limit: "16kb",
  }),
);
app.use(
  express.urlencoded({
    limit: "16kb",
    extended: true,
  }),
);

app.use(express.static("public"));

//cors configuration

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
