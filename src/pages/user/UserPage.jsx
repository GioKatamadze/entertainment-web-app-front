import styled from "styled-components"
import Logo from "svg/Logo.jsx"

import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetDetailsQuery } from "services/authServices"
import { logout, setCredentials } from "store/slices/auth-slice"
import { NavLink } from "react-router-dom"
import { Navigate } from "react-router-dom"

const StyledContainer = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #10141e;
`;

const StyledForm = styled.div`
    transform: translateY(-40px);
    background-color: #161d2f;
    border-radius: 10px;
    width: 75vw;
    max-width: 400px;
    padding: 24px;
    margin-top: 50px;

    h2 {
        margin-top: 50px;
      font-size: 22px;
      font-weight: 300;
      letter-spacing: -0.5px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 30px;
      text-decoration: none;
    }
    .button {
      color: #ffffff;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 22px;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      text-decoration: inherit;
      transition: all 0.2s ease;
    }

    .buttonDiv, #home {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        background: #fc4747;
        border: 0 solid transparent;
        border-radius: 6px;
        transition: all 0.2s ease;
        text-decoration: inherit;
        margin-top: 20px;
        &:not(:disabled):hover {
            cursor: pointer;
            color: #1d1c1c;
            background: #ffffff;
            .button {
                color: #161414;
            }
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;

const UserPage = () => {

    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return (
        <StyledContainer>
            <StyledForm>
            <Logo />
                <div className="wrapper" >
                    <h2>
                        {userInfo !== null
                            ? `Logged in as ${userInfo.email}`
                            : "You're not logged in"}
                    </h2>
                    <NavLink id="home" className='buttonDiv' to='/'>
                        <button className='button'>
                            Back to Home
                        </button>
                    </NavLink>  
                    <div className='buttonDiv'>
                        {userInfo ? (
                            <button className='button' onClick={() => dispatch(logout())}>
                            Logout
                            </button>
                        ) : (
                            <Navigate to='/login'/>
                        )}
                    </div>          
                </div>
        </StyledForm>
        </StyledContainer>
    )
}

export default UserPage