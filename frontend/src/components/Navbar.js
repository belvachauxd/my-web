import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="./images/senopia_icon.png"
              alt="senopia"
              style={{ width: '30%', marginRight: '1rem' }}
            />
            <h1>Senopia</h1>
          </div>
        </Link>
        <nav>
          {user && (
            <div>
              <Link to="/myarticles">My Articles   </Link>
              <Link to="/quiz">Quiz</Link>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;