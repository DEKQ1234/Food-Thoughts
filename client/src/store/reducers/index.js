//combine all reducers using combineReducers
import { combineReducers } from 'redux';
import active_restaurantreducer from './active_restaurantreducer'
import restaurantReducer from './reducer-search-res';
import userreducer from './userreducer';
import reviewsreducer from './reviewsreducer';
import editBio from './editbio';
import active_user from './active_userreducer'

const allreducers = combineReducers({

    // restaurants: restaurantsreducer,
    active_restaurant: active_restaurantreducer,
    restaurants: restaurantReducer,
    user: userreducer,
    reviews: reviewsreducer,
    editBio: editBio,
    active_user: active_user
})

export default allreducers;