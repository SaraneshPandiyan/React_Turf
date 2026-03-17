import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navi = useNavigate()
  const location = useLocation();

  const handlelogin = () => {
    alert("Do you want to logout")
    navi("/")
  }
  const name = location.state?.name;
  const username = location.state?.username;
  return (
    <>
      <form onSubmit={handlelogin}>
        <h1>Dashboard</h1>
        <h2 style={{ backgroundColor: "red" }}>welcome to the page {name || username}</h2>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}