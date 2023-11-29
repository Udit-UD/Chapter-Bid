import { useState,useEffect } from 'react';
import { signupFields } from "../../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { signupAsync, selectUserData } from "../../Features/Auth/authSlice";



const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);
  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});
  const dispatch = useDispatch();
  useEffect(() => {
    if (userData.isAuthenticated) navigate("/login");
  }, [userData.isAuthenticated, navigate]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(signupState.password!=signupState.confirmPassword){
        console.log("Passwords do not match")
    }
    console.log(signupState)
    dispatch(signupAsync(signupState));
  }

    return(
      <div className='w-full flex justify-center items-center m-0 p-0'>
        <form className="space-y-6 w-1/3" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
      </div>
        
    )
}