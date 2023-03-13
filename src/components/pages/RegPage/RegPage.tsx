import { Reg } from '@/components/common/Reg/Reg';
import { useTitle } from 'react-use';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const RegPage = () => {
  useTitle('Registration Page');
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/profile';
  return (
    <div className='container'>
      <h1 className='title'>Registration</h1>
      <Reg prevPage={fromPage} />
      <div className='auth_help'>
        If you already have an account you may <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default RegPage;
