import { useNavigate } from 'react-router-dom'
import '../CSS/Navbar.css'
import logo from '../Images/Main/Netflix_Logo_PMS.png'

export default function Navbar() {

  const navigate = useNavigate()

  const handleOut = () => navigate('/signout')

  return (
    <div className='Navbar'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="btns">
            <p>UNLIMITED TV SHOWS & MOVIES</p>
            <button>Join now</button>
            <button onClick={handleOut}>Sign Out</button>
        </div>
    </div>
  )
}
