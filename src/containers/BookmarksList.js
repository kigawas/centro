import React from 'react'
import { connect } from 'react-redux'
import Bookmark from '../components/Bookmark'
import { deleteBookmark } from '../actions'
import PropTypes from 'prop-types'

function BookmarksList ({ bookmarks, onDelete }) {
  return (
    <div>
      {bookmarks.map(bookmark => {
        return (
          <Bookmark bookmark={bookmark} onDelete={onDelete} key={bookmark.id} />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    bookmarks: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteBookmark(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksList)

BookmarksList.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  onDelete: PropTypes.func.isRequired
}
