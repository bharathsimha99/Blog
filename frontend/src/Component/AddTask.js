import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addTaskApi, updateTaskApi } from '../routerApi/taskApi'
import TextField from '@mui/material/TextField';

const AddTask = () => {
    const navigate=useNavigate()
 const[formData,setFormData]=useState({
    title:"",
    description:""
 })

 const onChangeFormData=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setFormData((val)=>({...val,[name]:value}))
 }
const location=useLocation()
const [token,setToken]=useState(location.state)

let actionChange=location.state && location.state[1]==="update"?"Update Task":"Add Task"
 const actionChangeForm=()=>{
    if(location.state&&location.state[1]==="update"){
document.getElementById("title").value=location.state[0].title
document.getElementById("descr").value=location.state[0].description
setFormData({
    title:location.state[0].title,
    description:location.state[0].description
})
    }
 }
useEffect(()=>{
    actionChangeForm()
},[])

const onSubmitFormTask=async()=>{
    try{
        if(actionChange==="Add Task"){
            await addTaskApi(formData)
            navigate("/task",{state:token})
           
        }else{
            let resId=location.state[0]._id
            const res=await updateTaskApi(resId,formData)
            if(res.data.message==="Task is Updated"){
                navigate("/task",{state:location.state[2]})
            }
        }

    }catch(e){
        console.log(e)
    }

}
const displayTask=()=>{
    if(token===null){
        navigate('/',{state:null})
    }
}
useEffect(()=>{
    displayTask()
},[token])

 const onFormSubmit=(e)=>{
e.preventDefault()
 }
  return (
   <div className='addContainer'>

    <form onSubmit={onFormSubmit} >
    <h1>To<span style={{color:"green"}}>Do</span> List</h1>
       <TextField id="title"  label="Title" variant="outlined" name='title' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <TextField id="descr" placeholder='type here....' label="Discription" variant="outlined" name='description' style={{ margin: '15px' }} onChange={onChangeFormData} />
        <br />
        <button  onClick={onSubmitFormTask}>{actionChange}</button>

      </form>
   </div>
       
      
   
  )
}

export default AddTask
