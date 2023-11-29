import { useState,useEffect } from "react";
import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { loginAsync, selectUserData } from "../../Features/Auth/authSlice";


const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const userData = useSelector(selectUserData);
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  
  useEffect(() => {
    if (userData.isAuthenticated) navigate("/profile");
  }, [userData.isAuthenticated, navigate]);
  const dispatch= useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(loginState));
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
