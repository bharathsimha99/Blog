import axios from "axios"

let url=" http://localhost:5000"

//Add api

const addTaskApi=(formData)=>{
try{
    const res=axios.post(url+"/addTask",formData)
    return res

}catch(e){
    console.log(e)
}
}


//update api

const updateTaskApi=(id,formData)=>{
    try{
        const res=axios.patch(url+`/addTask/${id}`,formData)
return res
    }catch(e){
        console.log(e)
    }
}

//Delete api

const deleteTaskApi=(id)=>{
    try{
const res=axios.delete(url+`/${id}`)
return res
    }catch(e){
        console.log(e)
    }
}


export{addTaskApi,updateTaskApi,deleteTaskApi}