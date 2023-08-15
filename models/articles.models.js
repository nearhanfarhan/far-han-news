const db = require("../db/connection");

exports.fetchArticleById = (article_id) => {
  const text = "SELECT * FROM articles WHERE article_id = $1;";
  const params = [article_id];
  return db.query(text, params).then(({ rows }) => {
    if (rows.length === 0) {
      return Promise.reject({ status: 400, msg: "Bad request" });
    }
    return rows;
  });
};

exports.fetchAllArticles = () => {
  const text =
    "SELECT articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url, COUNT(comments.comment_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY created_at DESC;";
  return db.query(text).then(({ rows }) => {
    return rows;
  });
};
