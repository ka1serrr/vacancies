import { Form } from '@/components/UI/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useActions } from '@/imports/hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export const Reg = () => {
  const { setUser } = useActions();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReg = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          id: user.uid,
          // @ts-ignore
          token: user.accessToken,
        });
        navigate('/');
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form btnText='Registration' handleClick={handleReg} />
    </div>
  );
};
