import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaReply } from 'react-icons/fa';

const Replies = ({reply}) => {
   const {id, content, createdAt, user, score, replyingTo} = reply;

    const { username, image } = user;
    const [count, setCount] = useState(score);
     const increment = () => setCount(count + 1);
     const decrement = () => {
         setCount(count - 1);
         console.log(score);
     }
  return (
    <article>  
   <header>
     <img src={image.png} alt={`${username} 'img'`}/>
     <h1>{username}</h1>
     <p>{createdAt}</p>
   </header>

   <p>{content}</p>

  
   <div>
    <button onClick={increment}>
      {/* type inc for the increment btn*/}
      <AiOutlinePlus />
    </button>
    <span>
      {count}
      </span>
    <button onClick={decrement}>
      {/* type dec for the decrement btn */}
      <AiOutlineMinus />
    </button>
     </div>

     <div>
       <button>
         <FaReply/><span>Reply</span>
       </button>
     </div>
    </article>
  )
}

export default Replies;