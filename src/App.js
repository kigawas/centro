import React, { Component } from 'react'
import AddBookmark from './containers/AddBookmark'
import BookmarksList from './containers/BookmarksList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <AddBookmark />
          <BookmarksList />
        </div>
      </Provider>
    )
  }
}
