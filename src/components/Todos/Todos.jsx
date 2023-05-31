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


   function fetchTodo(limit, page) {
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
         .then(response => response.json())
         .then(json => {
            setTodos(prev => [...prev, ...json]);
            setPage(prev => prev + 1)
         });

   }
   const intersected = useScroll(parentRef, childrenRef, () => {
      fetchTodo(limit, page)
   })

   return (
      <div ref={parentRef} className="todos">
         {todos.map((todo) =>
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