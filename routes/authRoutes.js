const express = require("express");
const { body, validationResult } = require("express-validator");
const { register, login } = require("../controllers/authController");

const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();
//register route
router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return register(req, res);
  }
);

//login route
router.post("/login", login);

router.get("/admin", auth, authorize(["admin"]), (req, res) => {
  res.json({ message: "Admin access granted" });
});

module.exports = router;