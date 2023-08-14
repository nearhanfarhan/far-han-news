const { fetchArticleById } = require("../models/articles.models")

exports.getArticleById = (request, response, next) => {
    const {article_id} = request.params
    fetchArticleById(article_id).then((article) => {
        console.log({article : article})
        response.status(200).send({article : article})
    }).catch((err)=>{
        next(err)
    })


}