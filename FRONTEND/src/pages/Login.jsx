import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <form>
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>No account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
}
