require('dotenv').config()
const knex = require('knex')
const ArticlesService = require('./articles-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

console.log(ArticlesService.getAllArticles())



ArticlesService
    .createArticle(db, { title: 'Test Aricle', conetnet: 'text text text'})
    .then(newArticle => {
        console.log(newArticle);
        return ArticlesServers.getAllArticles(db);
    })
    .then