const express = require("express");

const { getAllTopics } = require("./controllers/topics.controllers");

const { getAllArticles, patchArticleVotes } = require("./controllers/articles.controllers");

const { getArticleById } = require("./controllers/articles.controllers");

const { handleCustomErrors, handle400Errors} = require("./errors/errors");

const { getEndpoints } = require("./controllers/api.controllers");
const { getCommentsByArticle, postCommentsByArticle } = require("./controllers/comments.controllers");

const app = express()

app.use(express.json())

app.get("/api/topics", getAllTopics);

app.get("/api/articles", getAllArticles);

app.get("/api/articles/:article_id", getArticleById)

app.get("/api", getEndpoints)

app.get("/api/articles/:article_id/comments", getCommentsByArticle)


app.post("/api/articles/:article_id/comments", postCommentsByArticle)

app.patch("/api/articles/:article_id", patchArticleVotes)


app.use((request, response) => {
  response.status(404).send({ msg: "Not found" });
});

app.use(handleCustomErrors)

app.use(handle400Errors)

app.use((err, request, response, next) => {
  console.log(err);
  res.status(500).send({ msg: "err" });
});

module.exports = app;
