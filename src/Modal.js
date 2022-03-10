
import React from 'react'

const Modal = () => {
  return (
    <div className='modal-overlay show-modal'>
        <div className='modal-container'>
         <h1>Delete Comment</h1>
        <p>
         Are you sure you want to delete this comment? This will remove the comment and can't be undone
        </p>
        <footer>
            <div>
            <button className='dont_delete'>
            No, Cancel
            </button>
            </div>
            <div>          
            <button className='delete'>
            Yes, Delete
            </button>
            </div>
        </footer>
        </div>
    </div>
  )
}

export default Modal