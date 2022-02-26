import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context'
import {v4 as uuid} from 'uuid';

const Replies = ({reply, commentId}) => {
   const {id, content, createdAt, user, score, replyingTo} = reply;
   const { state, toggleReplyScore, handleReplyToReply, handleReplyDelete, handleReplyEdit } = useGlobalContext();
   const { username, image } = user;
   const [ showReply, setShowReply ] = useState(false)
   const [ newContent, setNewContent ] = useState('');
   const [isEditing, setIsEditing] = useState(false);
   const [editId, setEditId] = useState(null)
   const generateNewId = uuid();
  
   const initializeEdit = () => {
     setShowReply(true);
     setIsEditing(true);
     setEditId(id);
   }

   const setToDefault = () => {
     setNewContent('')
     setShowReply(false);
     setEditId(null)
   }

  return (
    <article>  
   <header>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{createdAt}</p>
   </header>

   <p><span>@{replyingTo}</span> {content}</p>

  
   <div>
    <button onClick={() => toggleReplyScore(id, 'inc')}>
      {/* type inc for the increment btn*/}
      <AiOutlinePlus />
    </button>
    <span>
      {score}
      </span>
    <button onClick={() => toggleReplyScore(id, 'dec')}>
      {/* type dec for the decrement btn */}
      <AiOutlineMinus />
    </button>
     </div>
 
     <div>
       <button onClick={() => setShowReply(true)}>
         <FaReply/><span>Reply</span>
       </button>
     </div>

    {
    ( user.username === state.currentUser.username ) && <div>
    <button onClick={() => handleReplyDelete(commentId, id)}>
      delete
    </button>

    <button onClick={() => handleReplyEdit(commentId, id, initializeEdit, setNewContent)}>
      edit
    </button>
  </div>
  }

     {
       showReply &&  <form onSubmit={handleReplyToReply(commentId, 
       id, 
       newContent, 
       generateNewId, 
       setToDefault, 
       isEditing, 
       editId)}>
    <div>
    <textarea name='reply' value={newContent} onChange={(e) => setNewContent(e.target.value)}>
    </textarea>
    </div>

     <div>
       <button type='submit'>{isEditing ? 'Update' : 'Reply'}</button>
     </div>
   </form>
     }
    </article>
  )
}

export default Replies;