import { Form } from '@/components/UI/Form/Form';
import { useActions } from '@/imports/hooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { setUser } = useActions();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          id: user.uid,
          // @ts-ignore
          token: user.accessToken,
        });
        setLoading(false);
        navigate('/');
      })
      .catch(({ code }) => setError(code));
  };
  return (
    <div>
      <Form loading={loading} errorCode={error} btnText='Login' handleClick={handleLogin} />
    </div>
  );
};
