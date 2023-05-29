 const express = require('express')
const { 
    createArticle,
    getArticle,
    getArticles,
    deleteArticle,
    updateArticle
 } = require('../controllers/articleController')
 const requireAuth = require('../middleware/requireAuth')
 
 const router = express.Router()

 router.use(requireAuth)

 router.get('/', getArticles)

 router.get('/:id', getArticle)

 router.post('/', createArticle)

 router.delete('/:id', deleteArticle)

 router.patch('/:id', updateArticle)

 module.exports = router