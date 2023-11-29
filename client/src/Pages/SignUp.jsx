import Header from "../components/Auth/Header";
import Signup from "../components/Auth/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </>
    )
}