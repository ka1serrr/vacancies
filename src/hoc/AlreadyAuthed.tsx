import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { IChildren } from '@/types/jsxChildren.interface';

export const AlreadyAuthed = ({ children }: IChildren) => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return children;
};
