import {combineReducers} from 'redux'
import isLoggedIn from './isLoggedReducer'
import counter from './counterReducer'


const allReducers=combineReducers({
    counter,
    isLoggedIn
})

export default allReducers