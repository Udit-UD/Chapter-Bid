import { useState } from "react";
import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const URL = "http://localhost:3000/api/v1/login";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = async() => {
    console.log("working")
    try {
        const res=await axios({
            method: 'post',
            url: URL,
            data: {
              email: loginState.emailAddress,
              password:loginState.password
            }
        });
      console.log(res?.data)
      console.log(res?.status)
      {
        res.status==200 && navigate('/home')
      }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="space-y-6 w-1/3" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </div>
  );
}
