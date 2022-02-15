import data from './data.json';
import { v4 as uuidv4 } from 'uuid';

const dataComments = () => {
   
        const modifiedComment = data.comments.map(comment => {
        const id = uuidv4();
        const today = new Date();
        const createdAt = today.getFullYear()+'/'+(today.getMonth() + 1 )+'/'+today.getDate();
        const newComment = {...comment, id, createdAt}
        return newComment;
    })
        return modifiedComment;    
}

export default dataComments;