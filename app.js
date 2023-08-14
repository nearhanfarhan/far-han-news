const express = require("express");
const { getAllTopics } = require("./controllers/topics.controllers");
const { getArticleById } = require("./controllers/articles.controllers");
const { handleCustomErrors, handle400Errors } = require("./errors/errors");
const app = express()

app.get("/api/topics", getAllTopics)

app.get("/api/articles/:article_id", getArticleById)

app.use(handleCustomErrors)

app.use(handle400Errors)

app.use((err, request, response, next) => {
    console.log(err);
    res.status(500).send({ msg: "err" });
  });

module.exports = app