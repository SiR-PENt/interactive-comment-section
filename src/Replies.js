import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context'
const Replies = ({reply}) => {
   const {id, content, createdAt, user, score, replyingTo} = reply;
   const {state, toggleReplyScore} = useGlobalContext();
    const { username, image } = user;
   
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
       <button>
         <FaReply/><span>Reply</span>
       </button>
     </div>
    { ( user.username === state.currentUser.username ) && <div>
    <button>
      delete
    </button>
    <button>
      edit
    </button>
  </div>}
    </article>
  )
}

export default Replies;