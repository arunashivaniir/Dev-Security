const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("DB Error:", err));

const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const sanitizeBody = require("./middleware/sanitize");
const logger = require("./middleware/logger");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();


// Core middleware
app.use(express.json());
app.use(helmet());

// CORS
app.use(cors({ origin: "*" }));

// Rate Limit
app.use(rateLimit({ windowMs: 60 * 1000, max: 20 }));

// Sanitizer
app.use(sanitizeBody);

// Logger
app.use(logger);

// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

// 404
app.use((req, res) => res.status(404).json({ msg: "Route not found" }));

// Error handler
app.use((err, req, res, next) => {
  console.error("ERROR:", err);
  res.status(500).json({ msg: "Internal Server Error" });
});

app.listen(3000, () => console.log("Server running on 3000"));
