import './app.scss';
import loadable from '@loadable/component';

import { Route, Routes } from 'react-router-dom';
import { Layout } from '../UI/Layout/Layout';
import { LoaderComponent } from '@/components/UI/LoaderComponent/LoaderComponent';
import { RequireAuth } from '@/hoc/RequireAuth';
import { AlreadyAuthed } from '@/hoc/AlreadyAuthed';

const Content = loadable(() => import('@/components/pages/Content/Content'));
const CardItem = loadable(() => import('@/components/pages/CardItem/CardItem'));
const LoginPage = loadable(() => import('@/components/pages/LoginPage/LoginPage'));
const RegPage = loadable(() => import('@/components/pages/RegPage/RegPage'));
const Profile = loadable(() => import('@/components/pages/Profile/Profile'));
function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Content fallback={<LoaderComponent title='List of vacancies' />} />} />
        <Route
          path={`/login`}
          element={
            <AlreadyAuthed>
              <LoginPage />
            </AlreadyAuthed>
          }
        />
        <Route
          path={'/registration'}
          element={
            <AlreadyAuthed>
              <RegPage />
            </AlreadyAuthed>
          }
        />
        <Route path={'/vacancies/:id'} element={<CardItem />} />
        <Route
          path={'/profile'}
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
