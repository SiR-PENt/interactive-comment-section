import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import {MdDelete} from 'react-icons/md'
import {MdOutlineEdit} from 'react-icons/md'
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

  return <article className='comment'>

   <section>
   <header className='comment_header'>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{createdAt}</p>
   </header>

   <p>{content}</p>

  {/*beginning of toggle  */}
   <div className='toggle'>
    <p>
    <button onClick={() => toggleCommentScore(commentId, 'inc')} >
      <AiOutlinePlus />
    </button>
   
     {score}
  
    <button onClick={() => toggleCommentScore(commentId, 'dec')} >
      <AiOutlineMinus />
    </button>
    </p>
    </div>  
{/* end of toggle */}


   {  ( user.username !== state.currentUser.username ) && <div className='reply_container'>

    <button onClick={() => setShowReply(true)} className='btn_open_reply'>
         <FaReply/>
         <span>
           Reply
         </span>
    </button>

     </div>  }  


    { 
    ( user.username === state.currentUser.username ) && <div className='reply_container'>
    <div className='userBtn_container'>
    <button onClick={() => handleCommentDelete(commentId)} className='btn_danger'>
      <MdDelete/>
      Delete
    </button>

    <button onClick={() => handleCommentEdit(commentId,
      startEdit, 
      setNewContent)} className="btn_primary">
       <MdOutlineEdit/>
      Edit
    </button>
    </div>
  </div>
    }
  </section>

  { showReply &&  
   <form onSubmit={handleNewReplySubmit(commentId, 
    newContent, 
    setToDefault, 
    generateNewId, 
    isEditing
  )} className='reply_form'>

    <div className='img-container'>
      <img src={state.currentUser.image.png} width='35' height='35' alt={state.currentUser.username}/>
    </div>
    <div className='textarea_container'>
    <textarea name='reply' value={newContent} onChange={(e) => setNewContent(e.target.value)} placeholder='Add a reply...'>
    </textarea>
    </div>

     <div className='submit_container'>
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