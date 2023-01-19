import { StyledForm, Paragraph } from "./style.jsx"
import Logo from "svg/Logo.jsx";
import Button from "components/LoginComponents/login-button/LoginButton.jsx"
import { HashLink } from 'react-router-hash-link';

const LoginForm = () => {
    return (
        <StyledForm>
            <Logo />

            <form>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email address"
                    required/>
                <input
                    type="password"
                    placeholder="Password"
                    required/>
                    <Button type="submit" >Login to your account</Button>
                    <Paragraph>
                        Don't have an account? 
                        <HashLink className="nostyle" smooth to="/signup">Sign Up</HashLink>
                    </Paragraph>
            </form>

        </StyledForm>
    )
}

export default LoginForm