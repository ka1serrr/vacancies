import { useActions, useTypedSelector } from '@/imports/hooks';
import { useTitle } from 'react-use';
import './profile.scss';
import { Button } from '@/components/UI/Button/Button';
import { ProfileContent } from '@/components/UI/ProfileContent/ProfileContent';
const Profile = () => {
  useTitle('Profile');
  const { logOutUser } = useActions();
  const email = useTypedSelector((state) => state.user.email);
  return (
    <div className='profile'>
      <div className='container'>
        <h1 className='title'>It is your profile, {email}</h1>
        <Button title='Log Out' onClick={logOutUser}></Button>
        <ProfileContent />
      </div>
    </div>
  );
};

export default Profile;
