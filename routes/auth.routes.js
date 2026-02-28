const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const preferenceController = require("../controllers/preferences.controller");
const { protect } = require("../middlewares/auth.middleware");

router.post("/signup", authController.register);
router.post("/login", authController.login);
router.get("/preferences",protect, preferenceController.getPreferences);
router.put("/preferences",protect, preferenceController.updatePreferences);


module.exports = router;