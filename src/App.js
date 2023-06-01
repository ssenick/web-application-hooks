import './App.css';
import MyInput from "./components/UI/MyInput/MyInput";
import Block from "./components/Block/Block";
import MyButton from "./components/UI/MyButton/MyButton";
import useInput from "./hooks/useInput";
import {useRef, useState} from "react";
import useHover from "./hooks/useHover";
import Todos from "./components/Todos/Todos";
import useDebounce from "./hooks/useDebounce";

function App() {
   // useInput
   const userNameInput = useInput('')
   const userPasswordInput = useInput('')
   const [resultInputs, setResultInputs] = useState({user: '', password: ''})

   function setAllInputs() {
      setResultInputs({user: userNameInput.value, password: userPasswordInput.value});
   }

   // useHover
   const ref = useRef();
   const isHovering = useHover(ref);

   // useScroll/useInfinitePagination
   // in <Todos/>


   // useDebounce
   const [valueDebounce, setValueDebounce] = useState('');
   const debouncedSearch = useDebounce(search, 500);
   const [fetching, setFetching] = useState({status: false, value: 'No request!'})

   function search(query) {
      fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
         .then(response => response.json())
         .then(json => {
            console.log(json);
            setFetching({status: true, value: 'Request...!'})
            setTimeout(() => {
               setFetching({status: false, value: 'No request!'})
            }, 501)
         });
   }

   const onChange = (e) => {
      setValueDebounce(e.target.value)
      debouncedSearch(e.target.value)
   }
   return (
      <div className="App">
         <div className="App__container">
            <Block title='Hook: useInput'>
               <h2>User name: {resultInputs.user}</h2>
               <h2>User password: {resultInputs.password}</h2>
               <MyInput {...userNameInput} type='text' placeholder='User name'/>
               <MyInput {...userPasswordInput} type='password' placeholder='User password'/>
               <MyButton onClick={setAllInputs}>Submit</MyButton>
            </Block>
            <Block title='Hook: useHover'>
               <div ref={ref} className={isHovering ? "square square_hover" : "square "}>Hover me</div>
            </Block>
            <Block title='Hooks: useScroll/useInfinitePagination'>
               <Todos/>
            </Block>
            <Block title='Hooks: useDebounce'>
               <h3 className="subtitle">Server request: {fetching.status
                  ? <span style={{color: 'green'}}>{fetching.value}</span>
                  : <span style={{color: 'red'}}>{fetching.value}</span>}
               </h3>
               <input onChange={onChange} value={valueDebounce} className="input" type="text"/>
            </Block>
         </div>
      </div>
   );
}

export default App;
