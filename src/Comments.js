import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import Replies from './Replies';
import { v4 as uuidv4 } from 'uuid';

const Comments = ({commentData}) => {
const { id: commentId , content, createdAt, score, user, replies} = commentData;
const { username, image } = user;
const { state, toggleCommentScore, handleNewReplySubmit, handleCommentDelete, handleCommentEdit} = useGlobalContext()
const [showReply, setShowReply] = useState(false);
const [newContent, setNewContent] = useState('');
const [isEditing, setIsEditing] = useState(false);


const startEdit = () => {
  setShowReply(true);
  setIsEditing(true);
 
}

const setToDefault = () => {
  setNewContent('')
  setShowReply(false)
  setIsEditing(false);
}
const generateNewId = uuidv4();

  return <article>
   <header>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{createdAt}</p>
   </header>

   <p>{content}</p>

  
   <div>
    <button onClick={() => toggleCommentScore(commentId, 'inc')}>
      <AiOutlinePlus />
    </button>

    <span>
      {score}
      </span>

    <button onClick={() => toggleCommentScore(commentId, 'dec')}>
      <AiOutlineMinus />
    </button>
     </div>

     <div>
    <button onClick={() => setShowReply(true)}>
         <FaReply/>
         <span>
           Reply
           </span>
       </button>
     </div>

    { 
    ( user.username === state.currentUser.username ) && <div>
    <button onClick={() => handleCommentDelete(commentId)}>
      delete
    </button>
    <button onClick={() => handleCommentEdit(commentId,
      startEdit, 
      setNewContent)}>
      edit
    </button>
  </div>
    }


  { showReply &&  
  <form onSubmit={handleNewReplySubmit(commentId, 
  newContent, 
  setToDefault, 
  generateNewId, 
  isEditing
  )} >
    <div>
    <textarea name='reply' value={newContent} onChange={(e) => setNewContent(e.target.value)}>
    </textarea>
    </div>

     <div>
       <button type='submit'>{isEditing ? 'Update' : 'Reply' }</button>
     </div>
   </form> }

   {
    replies.length > 0 ? replies.map(singleReply => { 
    const newReply = {...singleReply}
    return <Replies key = {singleReply.id} reply={newReply} commentId={commentId} />}) : 
   <p>No replies yet</p>  
  }
  </article>
};

export default Comments;