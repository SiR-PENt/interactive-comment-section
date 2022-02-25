
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
      action.payload.setToDefault()
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
      
      const addNewComment = [newComment, ...state.comments]
      
      action.payload.setToEmptyString(); 
      return {...state, comments: addNewComment}
  }

  if (action.type === 'TOGGLE_COMMENT'){
        const tempComments = state.comments.map(comment => {
           if(comment.id === action.payload.id) {  

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
 
  if (action.type === 'TOGGLE_REPLY'){
    const tempComments = state.comments.map(comment => {

      const {replies} = comment
      const modifiedReply = replies.map( reply => {
         if (reply.id === action.payload.id){
           if (action.payload.type === 'inc'){
             return {...reply, score: reply.score + 1}
           }
           if (action.payload.type === 'dec'){
             return {...reply, score: reply.score - 1}
           }
         }
         return reply;
      })
      return {...comment, replies: modifiedReply}
    })
    return {...state, comments: tempComments}
  }

  if (action.type === 'HANDLE_REPLY'){

    action.payload.e.preventDefault();
    const newComment = state.comments.map(comment => { // loop through the comment to se which of the comment's id matches that which was clicked

      if (comment.id === action.payload.commentId){ //if it matches, destructure the replies and loop through it and find reply that matches id
        const {replies} = comment;
        const addReply = replies.map(reply => {
          if (reply.id === action.payload.replyId){
          const {user} = reply //destructure user from the reply so we can use the user.username in the newReply

          const newReply = { // create new reply
          id: action.payload.newId,
          content: action.payload.content,
          createdAt: '1 week ago',
          score: 0,
          replyingTo: user.username,
          user: {
            image: { 
              png: state.currentUser.image.png,
              webp:state.currentUser.image.webp
            },
          username: state.currentUser.username
          }
        } 
         return [reply, newReply] //this returns an array of the reply and the newReply    
          }
         return reply
        }) 
        const flattenAddReply = addReply.flat() //remove inner arrays from addReply
        return {...comment, replies: flattenAddReply }
      }
      return comment
    })
    action.payload.toDefault();
    return {...state, comments: newComment}
  }
  throw new Error( 'no matching type')
}

export default reducer