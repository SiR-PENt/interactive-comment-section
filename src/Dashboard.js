import React, { useState } from 'react';
import data from './data';
import Comments from './Comments';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {

  return <main>
  {data.comments.map(comment => {

  let today = new Date();
  let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

  const id = uuidv4();

  const { content, score, user, replies } = comment;
  
  return (
   <Comments key={id} commentData = {{ date, content, score, user, replies}}/>
  )
  })}   
  </main>;
};

export default Dashboard;
