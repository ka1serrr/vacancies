import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTitle } from 'react-use';
import { Login } from '@/components/common/Login/Login';

const LoginPage = () => {
  useTitle('Login Page');

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/profile';

  return (
    <div className='container'>
      <h1 className='title'>Login</h1>
      <Login prevPage={fromPage} />
      <div className='auth_help'>
        If you do not have an account you may <Link to='/registration'>Register</Link>
      </div>
    </div>
  );
};

export default LoginPage;
