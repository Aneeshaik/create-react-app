// import { useState } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
   const changeHandler = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   if(Object.keys(errors).length > 0){
  //     console.log(errors);
      
  //   }
  // }, [errors])

  const submitHandler = (event) => {
    event.preventDefault();
    const newErrors = validate(formData);
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);      
    } else {
      setErrors({});
      console.log("Submitted successfully");
    }
    console.log(formData);
  }
  
  if(Object.keys(errors).length > 0){
    console.log(errors);
  }

  const validate = (formData) => {
    const newErrors = {};
    if(!formData.username){
      newErrors.username = "User name is required"
    }
    if(!formData.password){
      newErrors.password = "Password is required";
    } else if(formData.password.length < 8){
      newErrors.password = "Password must be more than 8 letters"
    }
    return newErrors;
  }
  return (
    <div>
      <form id='form' onSubmit={submitHandler}>
        <div>
        <p>{formData.username}</p>
        <p>{formData.password}</p>
        <label htmlFor='username' >username:</label>
        <input id='username' type='text' name='username' autoComplete='on' onChange={changeHandler} value={formData.username}></input> <br />
        <label htmlFor='password'>password:</label>
        <input id='password' type='password' name='password' onChange={changeHandler} value={formData.password}></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;