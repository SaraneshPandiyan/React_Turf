import Dashboard from "./Dashboard"
import { useNavigate } from "react-router-dom";


export default function Signup() {

    const navi = useNavigate()

    const handleAcc = (e) => {
        e.preventDefault();
        const Firstname = document.getElementById("saran").value;
        alert("happy 2 see u in... Move to Dashboard")
        navi("/home/dashboard", {
            state: { name: Firstname }
        });
    }

    return (
        <>
            <form onSubmit={handleAcc}>
                <h1>Sign up</h1>
                <input type="text" id="saran" placeholder="First Name" required /><br /><br />
                <input type="text" placeholder="Last Name" required /><br /><br />
                <input type="email" placeholder="Email" required /><br /><br />
                <input type="password" maxLength={12} minLength={6} placeholder="Password" required /><br /><br />
                <button type="submit">Create a Account</button>
            </form>
        </>
    );
}