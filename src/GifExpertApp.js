import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = (props) => {
  


  const [categories, setCategories] = useState(['Dragon Ball']);
  
  // const hanleAdd = () => {
  //   // setCategories([...categories, 'Otra serie']   );
  //   setCategories( cats => [...cats, 'Otra Serie']);

  
    return (
<>
<h2 className='animate__flash' >GifExpertApp</h2>

<AddCategory  setCategories={setCategories}/>

<hr />

<ol>
      {
        categories.map(category => 
        <GifGrid 
        key={category}
        category={category} />
        )
      }

</ol>


</>

  )};



export default GifExpertApp;
