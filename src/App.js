import './App.css';
import MyInput from "./components/UI/MyInput/MyInput";
import Block from "./components/Block/Block";
import MyButton from "./components/UI/MyButton/MyButton";
import useInput from "./hooks/useInput";
import {useRef, useState} from "react";
import useHover from "./hooks/useHover";

function App() {
   const userNameInput = useInput('')
   const userPasswordInput = useInput('')
   const [resultInputs,setResultInputs] = useState({user:'',password:''})
   function setAllInputs (){
      setResultInputs({user:userNameInput.value,password:userPasswordInput.value})
   }

   const ref = useRef();
   const isHovering = useHover(ref)
   console.log(isHovering)

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
         </div>
      </div>
   );
}

export default App;
