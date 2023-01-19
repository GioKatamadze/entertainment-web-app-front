import { StyledPage, StyledForm, Paragraph } from "./style.jsx"
import Logo from "svg/Logo.jsx";
import TextInput from "components/SignUpComponents/textinput/TextInput.jsx"
import Button from "components/SignUpComponents/signup-button/SignupButton.jsx"

const SignUpForm = () => {
    return (
        <StyledPage>
            <Logo />
            <StyledForm>
                <h1>Sign Up</h1>
                <TextInput/>
                <TextInput/>
                <TextInput/>
                <Button>Create an account</Button>
                <Paragraph>
                    Already have an account? Login
                </Paragraph>
            </StyledForm>
        </StyledPage>
    )
}

export default SignUpForm