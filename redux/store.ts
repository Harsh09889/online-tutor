// ** Redux Imports
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {createLogger} from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  diff: true
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})
export { store }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
