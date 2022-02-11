import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Comments = ({commentData}) => {
  const { state, toggleAmount } = useGlobalContext();

  const { id, date, content, score, user, replies} = commentData;
  const { username, image } = user;

  return <article>
   <header>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{date}</p>
   </header>

   <p>{content}</p>

  <footer>
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
       <button>
         <FaReply/><span>Reply</span>
       </button>
     </div>
   </footer>

  </article>;
};

export default Comments;