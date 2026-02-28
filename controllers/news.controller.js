const axios = require("axios");

exports.getNews = async (req, res, next) => {

  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const preferences = req.user.preferences;

    if (!preferences || preferences.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No preferences found for user",
      });
    }

    // Convert preferences array to query string
    const query = preferences.join(" OR ");

    const response = await axios.get(process.env.NEWS_BASE_URL, {
      params: {
        q: query,
        apiKey: process.env.NEWS_API_KEY,
        
        language: "en",
      },
    });

    if (!response.data || response.data.status !== "ok") {
      return res.status(502).json({
        success: false,
        message: "Failed to fetch news from external provider",
      });
    }

    return res.status(200).json({
  news: response.data.articles,
});

  } catch (error) {
    console.error("News API Error:", error.message);

    // External API error handling
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data.message || "News API error",
      });
    }

    next(error);
  }
};