import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginApi } from '../routerApi/userApi';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const[error,setError]=useState()
const navigate=useNavigate()

  const onChangeFormData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((val) => ({ ...val, [name]: value }))
  }

  const onSubmitFormData = async () => {
    try {
      const res = await loginApi(formData)
      console.log("formLogin",res.data.token)
      if(res.data.token){
        navigate("/task",{state:res.data.token})
      }else{
        navigate("/",{state:null})
      }

    } catch (e) {
      console.log(e.response)
      setError(e.response.data.message)
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='formDetails'>
      <form onSubmit={onFormSubmit} >
      <h1><span style={{color:"green"}}>Blog</span>List</h1>
       <p style={{color:"red"}}>{error}</p>
        <TextField id="outlined-basic" type='mail' label="Email" variant="outlined" name='email' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <TextField id="outlined-basic" type='password' label="Password" variant="outlined" name='password' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <Button variant="contained" style={{ margin: '15px' }} onClick={onSubmitFormData}>login</Button>

      </form>
    </div>
  )
}

export default Login
