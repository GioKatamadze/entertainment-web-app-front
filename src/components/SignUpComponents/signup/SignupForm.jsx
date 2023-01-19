import { StyledForm, Paragraph } from "./style.jsx"
import Logo from "svg/Logo.jsx";
import Button from "components/LoginComponents/login-button/LoginButton.jsx"
import { HashLink } from 'react-router-hash-link';

const SignUpForm = () => {
    return (
        <StyledForm>
            <Logo />

            <form>
                <h1>Sign Up</h1>
                <input
                    type="email"
                    placeholder="Email address"
                    required/>
                <input
                    type="password"
                    placeholder="Password"
                    required/>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    required/>
                    <Button type="submit" >Create an account</Button>
                    <Paragraph>
                        Already have an account? 
                        <HashLink className="nostyle" smooth to="/login">Login</HashLink>
                    </Paragraph>
            </form>

        </StyledForm>
    )
}

export default SignUpForm