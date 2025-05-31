import { useNavigate } from "react-router-dom";
import "../CSS/SignIn.css";

const SignIn = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/home')
    }

    return(
        <div className="Sign">
            <div className="header">
                <div className="img"></div>
            </div>
            <div className="body">
                <div className="form">
                    <form onClick={handleSubmit}>
                        <h1>Sign In</h1>
                        <input type="Email" placeholder="Email" required/>
                        <input type="password" placeholder="Password" required/>
                        <button type="submit" className="first-btn">Sign In</button>
                        <h5>OR</h5>
                        <button type="submit" className="second-btn">Use a sign-in code</button>
                        <a href="/" className="a">Forgot password?</a>
                        <div className="check">
                            <input type="checkbox" />
                            <h6>Remember me</h6>
                        </div>
                        <div className="txt">
                            <h6>New to Netflix? </h6>
                            <a href="/"  className="b"> Sign up now.</a>
                        </div>
                        <div className="txt">
                            <h6>This page is protected by Google reCAPTCHA to<br/>
                            to ensure you're not a bot.<a href="/" className="learn">Learn more</a></h6>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <h6>Questions? Call <a href='/'>000-800-919-1694</a></h6>
                <div className="links">
                     <div className="link">
                        <a href='/'>FAQ</a> <a href='/'>Help Centre</a><a href='/'>Terms of Use</a><a href='/'>Privacy</a>
                     </div>
                    <div className="link">
                        <a href='/'>Coockies Preferences</a><a href='/'>Corparate Information</a>
                    </div>
                </div>
                <select className='lan'>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
        </div>
    )
} 

export default SignIn;