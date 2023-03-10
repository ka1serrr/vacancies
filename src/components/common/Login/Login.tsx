import { Form } from '@/components/UI/Form/Form';
import { useActions } from '@/imports/hooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const { setUser } = useActions();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
  };
  return (
    <div>
      <Form btnText='Login' handleClick={handleLogin} />
    </div>
  );
};
