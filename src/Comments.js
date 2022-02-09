import React from 'react';
import edit from './icon-edit.svg';
import minus from './icon-minus.svg';
import plus from './icon-plus.svg';
import reply from './icon-reply.svg';

const Comments = ({commentData}) => {

  const { date, content, score, user, replies} = commentData;
  const { username, image } = user;

  return <article>
   <header>
     <h1>{username}</h1>
     <p>{date}</p>
   </header>
   <p>{content}</p>
   <p>
    <span>{plus}</span>
    <span>{score}</span>
    <span>{minus}</span>
     </p>
  </article>;
};

export default Comments;
