import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [mail, setmail] = useState("")
  const [pass, setpass] = useState("")
  const Navi = useNavigate();

  const handlemail = (e) => {
    setmail(e.target.value)
  }

  const handlepass = (e) => {
    setpass(e.target.value)
  }

  const handlelogin = (e) => {
    e.preventDefault();
    if (mail === "saran" && pass === "123") {
      Navi("/home/dashboard", {
        state: { username: mail }
      })
    }
    else {
      alert("No Data found create a new Account")
      Navi("/home/signup")
    }
  }
  const handlesignin = () => {
    Navi("/home/signup")
  }

  return (
    <>
      <form onSubmit={handlelogin}>
        <h1>Login</h1>
        <input type="text" placeholder="Enter Email" id="user" onChange={handlemail} name="email" required /><br /><br />
        <input type="password" placeholder="Enter Password" minLength={3} onChange={handlepass} name="password" required /><br /><br />
        <input type="checkbox" ></input>
        <label style={{ color: "black" }}>Remember Me</label>
        <button type="submit" > LOGIN IN</button>
        <p>Create a account by <button type="button" onClick={handlesignin}>Sign up</button></p>
      </form>
    </>
  );
}