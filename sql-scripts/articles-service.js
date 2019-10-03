const ArticlesService = {
    getAllArticles : function() {
        return db('blogful_articles')
            .select('*');
    },

    createArticles : function (db, newArticle) {
        return db('blogful_articles')
            .insert(newArticle)
            .returning('*')
            .then(res => res[0]);
    }
}

module.exports = ArticlesService