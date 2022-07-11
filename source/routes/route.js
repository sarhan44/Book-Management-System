//=================================[ Requirements ]=================================
const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')
const reviewController = require('../controllers/reviewController')
const middleware = require('../middlewares/auth')


//---------------[User APIs]----------------
router.post("/register", userController.createUser)
router.post("/login", userController.loginUser)

//---------------[Book APIs]----------------
router.post("/books",middleware.authenticate, bookController.createBook)
router.get("/books",middleware.authenticate, bookController.getBook)
router.get("/books/:bookId",middleware.authenticate, bookController.getBookById)
router.put("/books/:bookId",middleware.authenticate, bookController.updateBook)
router.delete("/books/:bookId",middleware.authenticate, bookController.deleteBook)

//---------------[Reviews APIs]--------------
router.post("/books/:bookId/review",middleware.authenticate, reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",middleware.authenticate, reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",middleware.authenticate, reviewController.deleteReview)

module.exports = router
