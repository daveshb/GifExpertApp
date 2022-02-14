import React, { useState } from 'react';
import ProTypes from 'prop-types';
;

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');


const handleImputChange = (e) => {
    setinputValue(e.target.value);
}

const handleSubmit = (e) => {
    
    e.preventDefault();
    
    if (inputValue.trim().length>2){
        
        setCategories(cats => [inputValue,...cats]);
        setinputValue('');
        // console.log('Submit ');
}
}

  return( 

    <form onSubmit={handleSubmit}>
      <h2>Escribe un Tema</h2>
      <input 
      type="text"
      value={inputValue}
      onChange={handleImputChange}

        />
    </form>
    
  )
  
}


AddCategory.proTypes ={
    setCategories: ProTypes.func.isRequired
}


