import React, { useState } from 'react';


const GifExpertApp = (props) => {
  
  
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  

  const hanleAdd = () => {

    // setCategories([...categories, 'Otra serie']   );
    setCategories( cats => [...cats, 'Otra Serie']);

     }
  
  
    return (
<>
<h2>GifExpertApp</h2>
<hr />

<button onClick={hanleAdd}>Agregar</button>

<ol>
      {
        categories.map(category => {
          return <li key={category}> {category} </li>
        })
      }

</ol>




</>

  )};



export default GifExpertApp;
