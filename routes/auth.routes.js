const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const preferenceController = require("../controllers/preferences.controller");
const newsController = require("../controllers/news.controller");
const { protect } = require("../middlewares/auth.middleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/preferences",protect, preferenceController.getPreferences);
router.put("/preferences",protect, preferenceController.updatePreferences);
router.get("/news", protect, newsController.getNews);


module.exports = router;