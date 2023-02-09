import React, { useState } from 'react'

const Todos = () => {
    const [todos,setTodos] = useState([]);
    const [values,setValues] = useState({});
    // const [title,setTitle] = useState('');
    // const [body,setBody] = useState('');
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(values.title,values.body);
      setTodos(prevState=> ([{title:values.title,body:values.body},...prevState]));

  }
  const handelChange = (e) =>{
    const { name, value } = e.target;
    console.log(name,value);
  //   if (name === 'title') {
  //     setTitle(value);
  //   }
  //  else {
  //       setBody(value);
  //   };
    
  setValues((prevState)=>({...prevState,[name]:value

  }));
  }
  
      
  return (
    <div>
      <ul>

        {todos.map((todo,index) => (
              <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              </li> 

        )

       
        )}
      </ul>
      <form onSubmit={handleSubmit} >
        <input type='text' name='title' onChange={handelChange} value={todos.title} />
        <input type='text' name='body' onChange={handelChange} value={todos.body} />
        <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default Todos