import { Form } from '@/components/UI/Form/Form';
import { useActions } from '@/imports/hooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface ILogin {
  prevPage: string;
}
export const Login = ({ prevPage }: ILogin) => {
  const { setUser } = useActions();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    await setError(null);
    const auth = getAuth();
    await setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          id: user.uid,
          // @ts-ignore
          token: user.accessToken,
        });
        setLoading(false);
        navigate(prevPage);
      })
      .catch(({ code }) => {
        setLoading(false);
        setError(code);
      });
  };

  return (
    <div>
      <Form loading={loading} errorCode={error} btnText='Login' handleClick={handleLogin} />
    </div>
  );
};
