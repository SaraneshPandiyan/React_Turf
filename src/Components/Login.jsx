
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [mail,setmail] = useState("")
    const [pass,setpass] = useState("")
    const Navi = useNavigate();
  
  const handlemail = (e)=>{
    // prevent.default();
    setmail(e.target.value)
    console.log(e.target.value)
    setpass(e.target.value)

    // console.log(mail)
  }

  const handlepass = (e)=>{
    setpass(e.target.value)
  }

      const handlelogin = () =>{
          if(mail==="saran" && pass==="123"){
            Navi("/home/dashboard")
          }
          else{
            alert("nil")
          }
      }
  return (
    <>
      <form onSubmit={handlelogin}>
      <h1>Login</h1>
      <input type="text" placeholder="Enter Email" onChange={handlemail} name="email"/><br /><br />
      <input type="password" placeholder="Enter Password" onChange={handlepass} name="password"/><br /><br />
      <button type="submit"> LOGIN IN</button>
      <p>Create a account by <button>Sign up</button></p>
      </form>
    </>
  );
}