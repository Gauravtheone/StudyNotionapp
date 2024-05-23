import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sendOtp, signUp} from '../services/operations/authAPI';
import { Link } from 'react-router-dom';
const VerifyEmail = () => {
    const navigate = useNavigate();
  const {loading,signupData} = useSelector((state)=>state.auth)
   const [otp,setOtp] = useState("")
   const dispatch = useDispatch();
   useEffect(()=>{
    if(!signupData){
      navigate('/signup')
    }
  })
   const handleOnSubmit = (e)=>{
 e.preventDefault();
 const {
accountType,firstName,lastName,email,password,confirmPassword
} = signupData
dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate))
   }
    return (
    <div>
       {
        loading?(
        <div>
            Loading...
        </div>
        ):(
            <div className='text-white flex flex-col mt-10 justify-center items-center '>
                <h1>Verify Email</h1>
                <p>A verification code has been sent to you .Enter the code below</p>
                  <form  onSubmit={handleOnSubmit}>

         <OTPInput
         value= {otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props)=><input {...props} className='bg-richblack-800'></input>}
       
         ></OTPInput>

<button type= 'submit' className='bg-yelllow bg-white text-richblack-900'>
    Verify Email
</button>





                  </form>

                  <div>
            <Link to='/login'>
              <p>Back to Login</p>
            </Link>
          </div>


<button onClick={()=>dispatch(sendOtp(signupData.email,navigate))}>
    Resend it
</button>


                 </div>
        )



       }


    </div>
  )
}

export default VerifyEmail
