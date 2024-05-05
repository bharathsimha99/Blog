import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerApi } from '../routerApi/userApi';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error,setError]=useState()
  //onchange form input data
  const onChangeFormData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((val) => ({ ...val, [name]: value }))
  }
  //on submitting form data into db
  const onSubmitFormData = async () => {
    try {
      const res = await registerApi(formData)
      console.log("formRegister",res.data.message)
    } catch (e) {
      console.log(e.response)
      setError(e.response.data.message)
    }

  }
  //preventing form data after form submit
  const onFormSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='formDetails'>
      <form onSubmit={onFormSubmit} >
        <h1><span style={{color:"green"}}>Blog</span>List</h1>
        <p style={{color:"red"}}>{error}</p>
        <TextField id="outlined-basic" type='text' label="UserName" variant="outlined" name='username' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <TextField id="outlined-basic" type='mail' label="Email" variant="outlined" name='email' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <TextField id="outlined-basic" type='password' label="Password" variant="outlined" name='password' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <TextField id="outlined-basic" type='password'  label="Confirm-Password" variant="outlined" name='confirmPassword' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <Button variant="contained" style={{ margin: '15px' }} onClick={onSubmitFormData}>Register</Button>

      </form>
    </div>
  )
}

export default Register
