import axios from "axios";
const base = "http://localhost:3000/";

export async function Login(data) {
  try {
    const res = await axios({
      method: "post",
      url: `${base}api/v1/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: data.emailAddress,
        password: data.password,
      },
    });
    console.log(res)
    console.log(res?.data);
    return {
      message: res?.data,
      status:res.status
    };
  } catch (error) {
    console.log(error);
  }
}
export async function Signup(data) {
  try {
    const res = await axios({
      method: "post",
      url: `${base}api/v1/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userName: data.username,
        email: data.emailAddress,
        password: data.password,
      },
    });
    console.log(res?.data);
    return {
      message: "Success",
    };
  } catch (error) {
    console.log(error);
  }
}
export async function User(data) {
  try {
    const res = await axios({
      method: "get",
      url: "",
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    const userData = res.data;
    const user = {
      Name: userData.fullName,
      Email: userData.email,
      State: userData.state,
      City: userData.city,
      Gender: userData.gender,
      Grade: userData.grade,
      DOB: userData.dob,
      Qualification: userData.currentQualification,
    };
    return { data: user };
  } catch (error) {
    console.log(error);
  }
}

export async function Logout(data) {
  console.log(data);
}
