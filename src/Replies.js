import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context'
import {v4 as uuid} from 'uuid';
const Replies = ({reply, commentId}) => {
   const {id, content, createdAt, user, score, replyingTo} = reply;
   const {state, toggleReplyScore, handleReply} = useGlobalContext();
   const { username, image } = user;
   const [ showReply, setShowReply ] = useState(false)
   const [ newContent, setNewContent ] = useState('')
   const generateNewId = uuid();
   const setToDefault = () => {
     setNewContent('')
     setShowReply(false);
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
    { ( user.username === state.currentUser.username ) && <div>
    <button>
      delete
    </button>
    <button>
      edit
    </button>
  </div>}
     {
       showReply &&  <form onSubmit={handleReply(commentId, id, newContent, generateNewId, setToDefault)}>
    <div>
    <textarea name='reply' value={newContent} onChange={(e) => setNewContent(e.target.value)}>
    </textarea>
    </div>

     <div>
       <button type='submit'>Reply</button>
     </div>
   </form>
     }
    </article>
  )
}

export default Replies;