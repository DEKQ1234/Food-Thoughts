//combine all reducers using combineReducers
import { combineReducers } from 'redux';
import restaurantsreducer from './restaurantsreducer';
import active_restaurantreducer from './active_restaurantreducer'

const allreducers = combineReducers({

    restaurants: restaurantsreducer,
    active_restaurant: active_restaurantreducer
})

export default allreducers;