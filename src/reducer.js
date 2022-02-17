

const reducer = (state, action) => {
  //action is an object that contains type and payload
  
  if (action.type === 'TOGGLE_AMOUNT'){
    
   const tempComment = state.map(comment => {
     
           if(comment.id === action.payload.id){
          
           if(action.payload.type === 'inc'){

            return {...comment, score: comment.score + 1}   
           }

            if(action.payload.type === 'dec'){
            return {...comment, score: comment.score - 1}   
           }
       }
       return comment;
   })
      return tempComment; 
  }
  
  
  throw new Error( 'no matching type')
}

export default reducer