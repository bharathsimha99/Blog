import axios from 'axios'

//connecting Url to backend
let url=" http://localhost:5000"


//Register api

const registerApi=async(formData)=>{
    try{
        const res=axios.post(url+"/register",formData)
        return res

    }catch(e){
        console.log(e)
    }

}

//Login api
const loginApi=(formData)=>{
    try{
const res=axios.post(url+"/login",formData)
return res
    }catch(e){
        console.log(e)
    }
}

export{registerApi,loginApi}