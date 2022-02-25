import React, {useState} from 'react';
import Comments from './Comments';
import { useGlobalContext } from './Context';
import {v4 as uuid4} from 'uuid';
const Dashboard = () => {
   const {state, handleNewCommentSubmit} = useGlobalContext();
   const [content, setContent] = useState('')
   const setContentToEmptyString = () => setContent('');
   const newCommentId = uuid4();

  return <main>
  { 
  state.comments.map(comment => {
 
  return (
    <Comments key={comment.id} commentData = {{...comment}}/>
  )
  })}   
  <footer>
    
    <form onSubmit={handleNewCommentSubmit( newCommentId, content, setContentToEmptyString)}>
     <img src={state.currentUser.image.png} alt={state.currentUser.username}/>
    <textarea name='newCommentContent' value={content} onChange={(e) => setContent(e.target.value)}>
    </textarea>
    <button type='submit'>
      send
    </button>
    </form>
  </footer>
  </main>;
};

export default Dashboard;
