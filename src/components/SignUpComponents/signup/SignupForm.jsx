import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import { useNavigate  } from 'react-router-dom';
import { registerUser } from "store/actions/authActions.js";
import { HashLink } from 'react-router-hash-link';

import Button from "components/LoginComponents/login-button/LoginButton.jsx"
import Logo from "svg/Logo.jsx";
import Error from "components/Error/Error.js";
import Spinner from "components/Spinner/Spinner.jsx";

import { StyledForm, Paragraph } from "./style.jsx"

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

const LoginForm = () => {

  const [customError, setCustomError] = useState(null)
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (userInfo) navigate('/')
    if (success) navigate('/login')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }

    return (
        <StyledForm>
            <Logo />
            {error && <Error>{error}</Error>}
            {customError && <Error>{customError}</Error>}
            <form onSubmit={handleSubmit(submitForm)}>
                <h1>Sign Up</h1>
                <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    {...register('email')}
                    required/>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register('password')}
                    required/>

                <input
                    type="password"
                    placeholder="Repeat password"
                    name="confirmPassword"
                    {...register('confirmPassword')}
                    required/>

                <Button 
                    className="button" 
                    type="submit" 
                    disabled={loading}
                    >
                      {loading ? <Spinner /> : 'Create an account'}
                </Button>

                    <Paragraph>
                        Already have an account? 
                        <HashLink className="nostyle" smooth to="/login">Login</HashLink>
                    </Paragraph>
            </form>

        </StyledForm>
    )
}

export default LoginForm