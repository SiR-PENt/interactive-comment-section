
import React from 'react'

const Modal = () => {
  return (
    <div>
        <h1>Delete Comment</h1>
        <p>
         Are you sure you want to delete this comment? This will remove the comment and can't be undone
        </p>
        <footer>
            <div>
            <button>
            No, Cancel
            </button>
            </div>
              <div>          
            <button>
            Yes, Delete
            </button>
            </div>
        </footer>
    </div>
  )
}

export default Modal