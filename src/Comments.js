import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Comments = ({commentData}) => {

  const { toggleAmount } = useGlobalContext();

const [showReply, setShowReply] = useState(false);
  const { id, content, createdAt, score, user, replies} = commentData;

  const { username, image } = user;

  return <article>
   <header>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{createdAt}</p>
   </header>

   <p>{content}</p>

  
   <div>
    <button onClick={() => toggleAmount(id, 'inc')}>
      {/* type inc for the increment btn*/}
      <AiOutlinePlus />
    </button>
    <span>
      {score}
      </span>
    <button onClick={() => toggleAmount(id, 'dec')}>
      {/* type dec for the decrement btn */}
      <AiOutlineMinus />
    </button>
     </div>

     <div>
       <button onClick={() => setShowReply(true)}>
         <FaReply/><span>Reply</span>
       </button>
     </div>

  { showReply && <form>
    <div>
  <textarea name='reply'>
  </textarea>
     </div>

     <div>
       <button type='submit'>Reply</button>
     </div>
   </form> }
  </article>;
};

export default Comments;