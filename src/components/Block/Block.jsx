import React from 'react';
import './Block.css';

const Block = ({title,children}) => {
   return (
      <div className="block">
         <h2 className="block__title">{title}</h2>
         <div className="block__content">{children}</div>
      </div>
   );
};

export default Block;