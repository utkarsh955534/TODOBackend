const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

// Error Handler (LAST me hona chahiye)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Server Error"
  });
});

module.exports = app;