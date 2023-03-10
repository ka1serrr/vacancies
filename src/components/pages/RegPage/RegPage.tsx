import { Reg } from '@/components/common/Reg/Reg';
import { useTitle } from 'react-use';
const RegPage = () => {
  useTitle('Registration Page');
  return (
    <div className='container'>
      <h1 className='title'>Registration</h1>
      <Reg />
    </div>
  );
};

export default RegPage;
