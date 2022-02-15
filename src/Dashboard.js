import React, { useState } from 'react';
import Comments from './Comments';
import dataComments from './dataComments'
import { useGlobalContext } from './Context';


const Dashboard = () => {
  const { state, newComments } = useGlobalContext();
  //setting and fetching cometns to and from the server
  
 //useState
const [comments, setComments] = useState(state);

  return <main>
  { 
  comments.map(comment => {
  
  const { id, content, score, user, replies } = comment;
  
  return (
   <Comments key={id} commentData = {{ id, content, score, user, replies}}/>
  )
  })}   
  </main>;
};

export default Dashboard;
