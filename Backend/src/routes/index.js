const express = require("express");
const router = express.Router();

const registerRoute = require("./registerRoute");
const loginRoute = require("./loginRoute");
const alumniListRoute = require("./alumniListRoute");
const jobRoutes = require("./jobRoutes");
const eventRoutes = require("./eventRoutes");

// Health Check Route
router.get("/", (req, res) => {
  console.log("Server is up and running.");
  res.send("Server is up and running.");
});

// Route Definitions
router.use("/register", registerRoute);
router.use("/events", eventRoutes); // Changed from /event to /events
router.use("/auth", loginRoute);
router.use("/alumni", alumniListRoute); // Changed from / to /alumni
router.use("/jobs", jobRoutes);

module.exports = router;
