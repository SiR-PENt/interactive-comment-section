import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import Replies from './Replies';
import { v4 as uuidv4 } from 'uuid';

const Comments = ({commentData}) => {
const { id, content, createdAt, score, user, replies} = commentData;
const { username, image } = user;
const { toggleAmount, handleSubmit} = useGlobalContext()
const [showReply, setShowReply] = useState(false);
const [newContent, setNewContent] = useState('');


  return <article>
   <header>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{createdAt}</p>
   </header>

   <p>{content}</p>

  
   <div>
    <button onClick={() => toggleAmount(id, 'inc')}>
      <AiOutlinePlus />
    </button>

    <span>
      {score}
      </span>

    <button onClick={() => toggleAmount(id, 'dec')}>
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

  { showReply && 
  
  <form onSubmit={handleSubmit(id, newContent)} >
    <div>
    <textarea name='reply' value={newContent} onChange={(e) => setNewContent(e.target.value)}>
    </textarea>
    </div>

     <div>
       <button type='submit'>Reply</button>
     </div>
   </form> }

   {
    replies.length > 0 ? replies.map(reply => { 
    const id = uuidv4();
    const today = new Date();
    const createdAt = today.getFullYear()+'/'+(today.getMonth() + 1 )+'/'+today.getDate();
    const newReply = {...reply, id, createdAt}
    return <Replies key = {id} reply={newReply}/>}) : 
   <p>No replies yet</p>  
  }
  </article>
};

export default Comments;