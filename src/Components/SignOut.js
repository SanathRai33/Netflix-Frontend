import { useNavigate } from "react-router-dom";
import "../CSS/SignOut.css";
import logo from "../Images/Main/Netflix_Logo_PMS.png";

function SignOut() {
  const navigate = useNavigate();

  const handleLog = () => navigate("/Login");

  return (
    <div className="SignOut">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button onClick={handleLog}>Sign In</button>
      </header>
      <section>
        <div>
          <h1>Thank You for Visiting!</h1>
          <p>
            You have been successfully logged out of your Netflix account. <br/>
            But don’t worry — the entertainment never ends here! <br/> Tap “Login” below to come
            back and continue your journey through stories, thrills, and
            laughter.
          </p>
        </div>
      </section>
      <footer>
        <h6>
          Questions? Call <a href="/">000-800-919-1694</a>
        </h6>
        <div className="links">
          <div className="link">
            <a href="/">FAQ</a> <a href="/">Help Centre</a>
            <a href="/">Terms of Use</a>
            <a href="/">Privacy</a>
          </div>
          <div className="link">
            <a href="/">Coockies Preferences</a>
            <a href="/">Corparate Information</a>
          </div>
        </div>
        <select className="lan">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </footer>
    </div>
  );
}

export default SignOut;
