import React from 'react';
import './MyButton.css'
const MyButton = ({children,...props}) => {
   return (
      <button className='button' {...props}>{children}</button>
   );
};

export default MyButton;