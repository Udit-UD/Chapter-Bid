import { useState } from 'react';
import { signupFields } from "../../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";

const URL = "http://localhost:3000/api/register";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(signupState.password!=signupState.confirmPassword){
        console.log("Passwords do not match")
    }
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=async()=>{
    console.log("working")
    try {
        const res=await axios({
            method: 'post',
            url: URL,
            data: {
              userName: signupState.username,
              email: signupState.emailAddress,
              password:signupState.password
            }
          });
          console.log(res?.data);
        
    } catch (error) {
        console.log(error);
    }
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
    )
}