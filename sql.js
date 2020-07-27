const Sequelize = require("sequelize");
const articles = require("./articles");

const sequelize = new Sequelize("ngmethodex", "root", "nosib1235xp",
    {
        host: "localhost",
        dialect: "mariadb",
        port: 3308,
        dialectOptions: {
            timezone: process.env.db_timezone
        }
    });

const Article = sequelize.define('article', {
    title: { type: Sequelize.STRING },
    key: { type: Sequelize.STRING },
    date: { type: Sequelize.DATE },
    content: { type: Sequelize.TEXT },
    description: { type: Sequelize.STRING },
    imagePath: { type: Sequelize.STRING }
});

init = function () {
    sequelize.authenticate().then(() => {
        console.log("Connection has been established successfully.");
    }).catch(err => {
        console.error("Unable to connect to the database:", err);
    });

    Article.sync({force: true}).then(() => {
        Article.create({
            title: 'Over 80 million Americans under virtual lockdown',
            key: 'first-article',
            date: new Date(),
            content: 'Donec vel tempor ligula. Phasellus quis tempus augue, cursus vestibulum nunc. Pellentesque vel risus eu velit dictum blandit. Nam cursus, tellus id tristique tincidunt, arcu lacus semper lacus, quis consectetur nulla odio sit amet est. Mauris ac congue metus, a gravida urna. Nullam in diam vel ante tristique interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ligula nisi, volutpat quis diam sed, tempor posuere enim. Aliquam nisl metus, mattis a nisl quis, accumsan cursus libero. Aenean a vehicula purus. Morbi eget blandit nisi, in laoreet est. Donec bibendum, urna sit amet varius euismod, arcu turpis vestibulum metus, eu condimentum lectus velit vitae arcu.',
            description: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imagePath: "assets/img/blog/img1.jpg"
        });

        Article.create({
            title: 'People worldwide adjust to new life amid COVID-19',
            key: 'second-article',
            date: new Date(),
            content: 'Donec vel tempor ligula. Phasellus quis tempus augue, cursus vestibulum nunc. Pellentesque vel risus eu velit dictum blandit. Nam cursus, tellus id tristique tincidunt, arcu lacus semper lacus, quis consectetur nulla odio sit amet est. Mauris ac congue metus, a gravida urna. Nullam in diam vel ante tristique interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ligula nisi, volutpat quis diam sed, tempor posuere enim. Aliquam nisl metus, mattis a nisl quis, accumsan cursus libero. Aenean a vehicula purus. Morbi eget blandit nisi, in laoreet est. Donec bibendum, urna sit amet varius euismod, arcu turpis vestibulum metus, eu condimentum lectus velit vitae arcu.',
            description: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imagePath: "assets/img/blog/img2.jpg"
        });

        Article.create({
            title: 'Coronavirus stimulus checks: What you need to know',
            key: 'fird-article',
            date: new Date(),
            content: 'Donec vel tempor ligula. Phasellus quis tempus augue, cursus vestibulum nunc. Pellentesque vel risus eu velit dictum blandit. Nam cursus, tellus id tristique tincidunt, arcu lacus semper lacus, quis consectetur nulla odio sit amet est. Mauris ac congue metus, a gravida urna. Nullam in diam vel ante tristique interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ligula nisi, volutpat quis diam sed, tempor posuere enim. Aliquam nisl metus, mattis a nisl quis, accumsan cursus libero. Aenean a vehicula purus. Morbi eget blandit nisi, in laoreet est. Donec bibendum, urna sit amet varius euismod, arcu turpis vestibulum metus, eu condimentum lectus velit vitae arcu.',
            description: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imagePath: "assets/img/blog/img3.jpg"
        });
        Article.create({
            title: 'New Africa coronavirus crisis looms with internal spread',
            key: 'fourth-article',
            date: new Date(),
            content: 'Donec vel tempor ligula. Phasellus quis tempus augue, cursus vestibulum nunc. Pellentesque vel risus eu velit dictum blandit. Nam cursus, tellus id tristique tincidunt, arcu lacus semper lacus, quis consectetur nulla odio sit amet est. Mauris ac congue metus, a gravida urna. Nullam in diam vel ante tristique interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ligula nisi, volutpat quis diam sed, tempor posuere enim. Aliquam nisl metus, mattis a nisl quis, accumsan cursus libero. Aenean a vehicula purus. Morbi eget blandit nisi, in laoreet est. Donec bibendum, urna sit amet varius euismod, arcu turpis vestibulum metus, eu condimentum lectus velit vitae arcu.',
            description: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imagePath: "assets/img/blog/img4.jpg"
        });
        Article.create({
            title: 'Spain death toll up by almost 400 as cases rise around the globe',
            key: 'fith-article',
            date: new Date(),
            content: 'Donec vel tempor ligula. Phasellus quis tempus augue, cursus vestibulum nunc. Pellentesque vel risus eu velit dictum blandit. Nam cursus, tellus id tristique tincidunt, arcu lacus semper lacus, quis consectetur nulla odio sit amet est. Mauris ac congue metus, a gravida urna. Nullam in diam vel ante tristique interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ligula nisi, volutpat quis diam sed, tempor posuere enim. Aliquam nisl metus, mattis a nisl quis, accumsan cursus libero. Aenean a vehicula purus. Morbi eget blandit nisi, in laoreet est. Donec bibendum, urna sit amet varius euismod, arcu turpis vestibulum metus, eu condimentum lectus velit vitae arcu.',
            description: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imagePath: "assets/img/blog/img5.jpg"
        });
        Article.create({
            title: 'Can a face mask protect me from coronavirus-2020?',
            key: 'sixth-article',
            date: new Date(),
            content: 'Donec vel tempor ligula. Phasellus quis tempus augue, cursus vestibulum nunc. Pellentesque vel risus eu velit dictum blandit. Nam cursus, tellus id tristique tincidunt, arcu lacus semper lacus, quis consectetur nulla odio sit amet est. Mauris ac congue metus, a gravida urna. Nullam in diam vel ante tristique interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ligula nisi, volutpat quis diam sed, tempor posuere enim. Aliquam nisl metus, mattis a nisl quis, accumsan cursus libero. Aenean a vehicula purus. Morbi eget blandit nisi, in laoreet est. Donec bibendum, urna sit amet varius euismod, arcu turpis vestibulum metus, eu condimentum lectus velit vitae arcu.',
            description: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imagePath: "assets/img/blog/img6.jpg"
        }); 
    });
};

getArticles = function(callback) {
    Article.findAll({ order: sequelize.literal("date DESC")}).then(articles => callback(articles));
}

getArticleByKey = function(options, callback) {
    Article.findOne({ where: { key: options.key }}).then(article => callback(article));
}

module.exports.init = init;
module.exports.getArticles = getArticles;
module.exports.getArticleByKey = getArticleByKey;