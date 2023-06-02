import React, {useEffect, useRef, useState} from 'react';
import ItemTodo from "../ItemTodo/ItemTodo";
import './Todos.css'
import useScroll from "../../hooks/useScroll";

const Todos = () => {
   const [todos, setTodos] = useState([])
   const parentRef = useRef();
   const childrenRef = useRef();
   const [page, setPage] = useState(1);
   const limit = 15;
   const [status,setStatus] = useState(false);
   const intersected = useScroll(parentRef, childrenRef, async() => {
     await fetchTodo(limit, page)
   });



    function   fetchTodo(limit, page) {
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
         .then(  response => response.json())
         .then( json => {
            setStatus(true)
            if(status){
               setTodos(prev => [...prev, ...json]);
               setPage(prev => prev + 1)
               setStatus(false)
            }
         });

   }



   return (
      <div ref={parentRef} className="todos">
         {todos && todos.map((todo) =>
            <ItemTodo
               key={todo.id}
               id={todo.id}
               title={todo.title}
               completed={todo.completed}
            />
         )}
         <div ref={childrenRef} style={{height: '1px'}}></div>
      </div>
   );
};

export default Todos;