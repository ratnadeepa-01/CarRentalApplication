import express from "express";
import passport from "passport";

const router = express.Router();

// Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect("http://localhost:5173");
  }
);

// Github login
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// Github callback
router.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  (req, res) => {
    res.redirect("http://localhost:5173");
  }
);

export default router;