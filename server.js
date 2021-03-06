const express = require("express");
const cors = require("cors");
const sql = require("./sql");

const app = express();

var corsOptions = {
    origin: ["http://localhost:4200", "http://localhost:4201"]
}

app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log("Server is started and listening");
    sql.init();
});

app.get("/", function(request, response) {
    response.send("Hello Node.Js! :)");
});

require("./articles.js")(app, sql);