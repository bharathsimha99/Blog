import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Home = () => {
    const [homeData, setHomeData] = useState("login")


    const ondisplay = (type) => {
        if (type==="login") {
            setHomeData("login")
        } else {
            setHomeData("register")
        }
    }



    
    return (
        <div className='homeContainer'>
            {
                homeData==="login"?(
                    <div >
                        <Login />
                        <p>or</p>
                        <button className='btn' onClick={() => ondisplay("register")}>Create Account</button>
                    </div>
                ) :
                    (<div >
                        <Register/>
                        <p>or</p>
                        <button className='btn' onClick={()=>ondisplay("login")}>Already have account</button>

                    </div>)
            }
        </div>
    )
}

export default Home

