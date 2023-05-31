import React from 'react';
import './ItemTodo.css'
const ItemTodo = ({id,title,completed}) => {
   return (
      <div className="item-todo">
         <div className="item-todo__content">
            {id}. {title}
         </div>
         <div className="item-todo__result">
            {completed ? <span style={{color:"green"}}>OK</span> : <span style={{color:"red"}}>NOT OK</span> }
         </div>
      </div>
   );
};

export default ItemTodo;