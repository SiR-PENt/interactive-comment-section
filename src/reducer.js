

const reducer = (state, action) => {
  //action is an object that contains type and payload
  
  if (action.type === 'TOGGLE_AMOUNT'){
    
   const tempComment = state.map(comment => {
      console.log(comment.id);
      console.log(action.payload.id);
             if(comment.id === action.payload.id){
          
           if(action.payload.type === 'inc'){
             console.log(comment.score)

            return {...comment, score: comment.score + 1}   
           }

            if(action.payload.type === 'dec'){
            return {...comment, score: comment.score - 1}   
           }
       }
       return comment;
   })

   return [...tempComment];
  }
}

export default reducer