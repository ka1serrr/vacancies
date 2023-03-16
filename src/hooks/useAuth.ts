import { useTypedSelector } from '@/imports/hooks';

export const useAuth = () => {
  const { email, token, id } = useTypedSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
