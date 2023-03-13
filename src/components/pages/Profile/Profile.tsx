import { useActions } from '@/imports/hooks';

const Profile = () => {
  const { logOutUser } = useActions();
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={logOutUser}>log out</button>
    </div>
  );
};

export default Profile;
