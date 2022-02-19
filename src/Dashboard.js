import React from 'react';
import Comments from './Comments';
import { useGlobalContext } from './Context';
import {v4 as uuid4 } from 'uuid';

const Dashboard = () => {
   const {state} = useGlobalContext()
  return <main>
  { 
  state.comments.map(comment => {
    const {id} = comment;
  return (
    <Comments key={id} commentData = {{...comment}}/>
  )
  })}   
  </main>;
};

export default Dashboard;
