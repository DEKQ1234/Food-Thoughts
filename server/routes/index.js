const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const restaurantController = require('../controllers/restaurantController');
const UserController = require('../controllers/UserController');
const reviewsController = require('../controllers/reviewsController');


router.route('/user') 
    .get()
    .post()


router.route('/search')
    // .get(searchController.search)
    .post(searchController.search)


router.route('/restaurant') 
    .get(restaurantController.CreateRestaurant)    
    .post()


router.route('/reviews') 
    .get(reviewsController.GetUserReview)
    .post(reviewsController.Createreview)
    



module.exports = router;