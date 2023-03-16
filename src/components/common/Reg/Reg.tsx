import { Form } from '@/components/UI/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useActions } from '@/imports/hooks';
import { useNavigate } from 'react-router-dom';
import { useStatus } from '@/hooks/useStatus';

interface IReg {
  prevPage: string;
}

export const Reg = ({ prevPage }: IReg) => {
  const { setUser } = useActions();
  const navigate = useNavigate();
  const { error, setError, loading, setLoading } = useStatus();
  const handleReg = async (email: string, password: string) => {
    await setError(null);
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
        navigate(prevPage);
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
