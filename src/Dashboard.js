import React, { useState } from 'react';
import data from './data';
import Comments from './Comments';
import { v4 as uuidv4 } from 'uuid';


const Dashboard = () => {
 

  return <main>

  {data.comments.map(comment => {
  const id = uuidv4();
  const newComment = {...comment, id}//modify the new comment with the comment created from uuid function
  let today = new Date();
  let date = today.getFullYear()+'/'+(today.getMonth() + 1 )+'/'+today.getDate();

  const { content, score, user, replies } = newComment;
  
  return (
   <Comments key={id} commentData = {{ id, date, content, score, user, replies}}/>
  )
  })}   
  </main>;
};

export default Dashboard;
