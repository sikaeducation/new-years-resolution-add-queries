const express = require("express");

const app = express();

const resolutions = require("./routes/resolutions");

app.use(express.json());

app.use("/resolutions", resolutions);

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
