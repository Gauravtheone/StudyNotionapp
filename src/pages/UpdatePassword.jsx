import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { password, confirmPassword } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  };

  return (
    <div className='text-white'>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>Choose new Password</h1>
          <p>Almost Done: Enter Your new Password</p>
          <form onSubmit={handleOnSubmit}>
            <label>
              <p>New Password</p>
              <input
                required
                type={showPassword ? "text" : 'password'}
                name='password'
                value={password}
                onChange={handleOnChange}
                placeholder='Password'
                className='text-black'
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )}
              </span>
            </label>
            <label>
              <p>Confirm Password</p>
              <input
                required
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder='Confirm Password'
                className='text-black'
              />
              <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )}
              </span>
            </label>
            <button type='submit'>Reset Password</button>
          </form>
          <div>
            <Link to='/login'>
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
