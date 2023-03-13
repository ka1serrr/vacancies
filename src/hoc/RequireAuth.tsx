import { useLocation, Navigate } from 'react-router-dom';
import { useTypedSelector } from '@/imports/hooks';

interface IRequireAuth {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuth) => {
  const location = useLocation();
  const { token } = useTypedSelector((state) => state.user);

  if (!token) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return children;
};
