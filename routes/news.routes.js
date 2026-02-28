const router = require("express").Router();
const newsController = require("../controllers/news.controller");
const { protect } = require("../middlewares/auth.middleware");

router.get("/news", protect, newsController.getNews);

module.exports = router;