import { Form } from '@/components/UI/Form/Form';

export const Reg = () => {
  const handleClick = () => {
    console.log('submit');
  };
  return (
    <div>
      <Form btnText='Registration' handleClick={handleClick}></Form>
    </div>
  );
};
