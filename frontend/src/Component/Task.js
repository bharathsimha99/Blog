import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteTaskApi } from '../routerApi/taskApi';
import Button from '@mui/material/Button';

const Task = () => {
  const location = useLocation()
  console.log("location", location.state)
  const [token, setToken] = useState(location.state)
  const navigate = useNavigate()
  const [taskData, setTaskData] = useState([])
  //get data
  const getAllData = async () => {
    try {
      if (token === null) {
        navigate("/", { state: null })

      } else {
        const res = await axios.get(" http://localhost:5000/myData", { headers: { "N-Token": token } })
        console.log("res", res.data)
        setTaskData(res.data)
      }

    } catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    getAllData()
  }, [token])

  const onCreateTask = () => {
    navigate("/addTask", { state: token })
  }
  const onEditTask = (val) => {
    let action = "update"
    navigate("/addTask", { state: [val, action, token] })
  }


  const onDeleteTask = async (id) => {
    try {
      const res = await deleteTaskApi(id)
      console.log(res.data)
      if (res.data.message === "task is deleted") {
        getAllData()
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      
      <nav>
        <button type="button" class="btn btn-success m-3 text-white" onClick={onCreateTask}>Create</button>
        <button style={{marginLeft:"85%"}} type="button" class="btn btn-primary  text-white" onClick={() => setToken(null)}>LogOut</button>
        <h1 className='Tit'><span style={{color:"green"}}>Blog</span> List</h1>
      </nav>
      <div className='mainCard'>
      {
        taskData.map((val) => {
          return (
            
            <div class="card">
             <div class="card-body">
                <h5 class="card-title text-danger">{val.title}</h5>
                <p class="card-text">{val.description}</p>
                <Button style={{ margin: "5px" }} onClick={() => onEditTask(val)}><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></Button>
                <Button style={{ margin: "5px" }} onClick={() => onDeleteTask(val._id)}><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></Button>
                </div>
            </div>

          )
        })
      }
</div>
    </div>
  )
}

export default Task
    