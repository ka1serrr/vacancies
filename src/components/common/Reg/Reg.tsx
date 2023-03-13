import { Form } from '@/components/UI/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useActions } from '@/imports/hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Reg = () => {
  const { setUser } = useActions();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  console.log(error);
  const handleReg = async (email: string, password: string) => {
    const auth = getAuth();
    await setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
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
      .catch(({ message, code }) => {
        setError(code);
        setLoading(false);
      });
  };
  return (
    <div>
      <Form btnText='Registration' errorCode={error} loading={loading} handleClick={handleReg} />
    </div>
  );
};
