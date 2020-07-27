const ARTICLES = require('./mock-articles.js')

module.exports = function(app, sql) {
    app.get("/articles", function(request, response) {
        sql.getArticles(function(result) {
            response.send(result);
        });
    });

    app.get("/articles/:key", function(request, response) {
        response.send(
            ARTICLES.filter(articles => articles.key === request.params.key)[0]
        );
    });
};