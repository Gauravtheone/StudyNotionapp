import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getPasswordResetToken } from '../services/operations/authAPI'
const ForgotPassword = () => {
  const {loading} = useSelector((state)=>(state.auth))
  const [emailSent,setEmailSent ]  = useState(false)
  const [email ,setEmail] = useState("");
  const dispatch = useDispatch()
 const handleOnSubmit  = (e)=>{
e.preventDefault();
dispatch(getPasswordResetToken(email,setEmailSent))

 }
  return ( 
    <div className='mt-60 w- flex flex-col justify-center items-center text-white'>
      {

        loading?(
 
<div>Loading...</div>

        ):(


       <div>
       <h1>
        {
            !emailSent?"Reset Your Password": "check your email"
        }
       </h1>
       <p>
          {
            !emailSent?"Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery":`We have sent the reset email to
            ${email}`
          }


       </p>
              
        <form onSubmit={handleOnSubmit}>
             {
                !emailSent&&(
                    <label>
                        <p>Email Address</p>
                        <input
                        
                        required
                        type= "email"
                        name ="email"
                        value = {email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='Enter Your Email Address'
                        
                        ></input>
                    </label>
                )
             }
           <button type='submit'>
{ !emailSent? "reset Password":"Resend email"}

           </button>

        </form>
    <div>
        <Link to= "/login">
            <p>Back to LOgin</p>
        </Link>
    </div>



       </div>






        )



      }
    </div>
  )
}

export default ForgotPassword
