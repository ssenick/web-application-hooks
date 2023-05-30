import React from 'react';
import './MyInput.css'
const MyInput = ({...props}) => {
   return (
      <input {...props} className='input'/>
   );
};

export default MyInput;