import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import { userRegisterReducer } from './reducers/userReducers'
import thunk from 'redux-thunk'



const reducer = combineReducers({
    userRegister: userRegisterReducer,
})

const initialState = {
     
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

