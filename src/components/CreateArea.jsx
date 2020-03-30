import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea (props) {
  const [isExpanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  function handleChange (event) {
    const { name, value } = event.target

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote (event) {
    props.onAdd(note)
    setNote({
      title: '',
      content: ''
    })
    event.preventDefault()
  }

  function expand () {
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default CreateArea