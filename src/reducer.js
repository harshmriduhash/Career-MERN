import { combineReducers } from 'redux'

import { user } from './redux/user.redux'
import { chatuser } from './redux/chatuser.redux'
import { chat } from './redux/chat.redux'

// combine all the reducers and return (in order to pass all these reduces into the createStore method.)

export default combineReducers({ user, chatuser, chat })