import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { IChildren } from '@/types/jsxChildren.interface';

export const RequireAuth = ({ children }: IChildren) => {
  const location = useLocation();
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return children;
};
