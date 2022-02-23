
const reducer = (state, action) => {
  //action is an object that contains type and payload

  //when replying a comment
  if (action.type === 'HANDLE_REPLY_SUBMIT'){ 

      action.payload.e.preventDefault();//prevent default
      const newReply =  {
          id: action.payload.newId,
          content: action.payload.content,
          createdAt: '',
          score: 0,
          replyingTo: '',
          user: {
            image: { 
              png: state.currentUser.image.png,
              webp: state.currentUser.image.webp
            },
            username: state.currentUser.username,
          }
        };

      const addNewReply = state.comments.map(comment => {
        const {replies, user} = comment;
        if (comment.id === action.payload.id){ 
          const modifiedReply = {...newReply, replyingTo:user.username}
          replies.unshift(modifiedReply);
        }
          return comment;
      })
      action.payload.setToEmptyString()
      action.payload.setToFalse()
      return {...state, comments:addNewReply}
  
  }
  //to create new Comment
  if (action.type === 'HANDLE_COMMENT_SUBMIT' ){
      action.payload.e.preventDefault();

      const newComment = {
      id: action.payload.id,
      content: action.payload.content,
      createdAt: "1 month ago",
      score: 0,
      user: {
        image: { 
          png: state.currentUser.image.png,
          webp: state.currentUser.image.webp
        },
        username: state.currentUser.username
      },
      replies: [] 
      }
      
      const addNewReply = [newComment, ...state.comments]
     
      action.payload.setToEmptyString(); 
      return {...state, comments: addNewReply}
  }

  if (action.type === 'TOGGLE_COMMENT'){

          const tempComments = state.comments.map(comment => {

           if(comment.id === action.payload.id)       
           {   

           if(action.payload.type === 'inc'){
            return {...comment, score: comment.score + 1}   
           }

           if(action.payload.type === 'dec'){              
            return {...comment, score: comment.score - 1}  
           }
       }
       return comment;
   })
     
      const newState = {...state, comments:tempComments}; 
      return newState;
  }
 if (action.type === 'TROGGLE_REPLY'){
   
 } 
  throw new Error( 'no matching type')
}

export default reducer