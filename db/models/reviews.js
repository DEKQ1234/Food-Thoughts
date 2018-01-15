const Sequelize = require('sequelize');
const db = require('../');

const Reviews = db.define('Reviews', {
  rating: {
    type: Sequelize.DECIMAL(3, 2)
  },
  // comments: {
  //   type: Sequelize.STRING
  // },
  restaurantid: {
    type: Sequelize.STRING
  },

});

module.exports = Reviews;