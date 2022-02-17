import React from 'react';
import Comments from './Comments';
import { useGlobalContext } from './Context';


const Dashboard = () => {
  const { state } = useGlobalContext();
 
 //useState
  return <main>
  { 
  state.map(comment => {
  const { id, content, score, createdAt, user, replies } = comment;
  
  return (
   <Comments key={id} commentData = {{ id, content, score, user, createdAt, replies}}/>
  )
  })}   
  </main>;
};

export default Dashboard;
