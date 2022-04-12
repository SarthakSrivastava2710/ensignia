import './Navbar.css';
import logo from '../assets/Ensignia.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='left'>
        <NavLink to='/main'>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>
      <div className='right'>
        <ul>
          <li>
            <NavLink to='/challenges/challenges'> Challenges</NavLink>
          </li>
          <li>
            <NavLink to='/scoreboard/Scoreboard'> Scoreboard</NavLink>
          </li>
          <li>
            <NavLink to='/teams/team'> Team</NavLink>
          </li>
          <li>
            <NavLink to='/login/Login'> Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
