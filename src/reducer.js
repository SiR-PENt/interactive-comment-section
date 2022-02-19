
const reducer = (state, action) => {
  //action is an object that contains type and payload
  
  if (action.type === 'TOGGLE_AMOUNT'){

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
  
  
  throw new Error( 'no matching type')
}

export default reducer