const ARTICLES = require('./mock-articles.js')

module.exports = function(app) {
    app.get("/articles", function(request, response) {
        response.send(ARTICLES);
    });

    app.get("/articles/:key", function(request, response) {
        response.send(ARTICLES.filter(articles => articles.key === request.params.key)[0]
        );
    });
};