require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

/* ================= MIDDLEWARES ================= */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* ================= ROUTES ================= */
app.use("/users", authRoutes);

/* ================= ERROR HANDLER ================= */
app.use(errorMiddleware);

/* ================= DATABASE + SERVER ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });