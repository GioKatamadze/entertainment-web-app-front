import { StyledPage, StyledForm, Paragraph } from "./style.jsx"
import Logo from "svg/Logo.jsx";
import TextInput from "components/LoginComponents/textinput/TextInput.jsx"
import Button from "components/LoginComponents/login-button/LoginButton.jsx"

const LoginForm = () => {
    return (
        <StyledPage>
            <Logo />
            <StyledForm>
                <h1>Login</h1>
                <TextInput/>
                <TextInput/>
                <Button>Login to your account</Button>
                <Paragraph>
                    Don't have an account? Sign Up
                </Paragraph>
            </StyledForm>
        </StyledPage>
    )
}

export default LoginForm