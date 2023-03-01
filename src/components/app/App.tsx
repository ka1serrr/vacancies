import './app.scss';
import loadable from '@loadable/component';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../UI/Layout/Layout';
import { LoaderComponent } from '@/components/UI/LoaderComponent/LoaderComponent';

const Content = loadable(() => import('@/components/pages/Content/Content'));
const CardItem = loadable(() => import('@/components/pages/CardItem/CardItem'));
const LoginPage = loadable(() => import('@/components/pages/LoginPage/LoginPage'));
const RegPage = loadable(() => import('@/components/pages/RegPage/RegPage'));
function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Content fallback={<LoaderComponent title='List of vacancies' />} />} />
        <Route path={`/login`} element={<LoginPage />} />
        <Route path={'/registration'} element={<RegPage />} />
        <Route path={'/vacancies/:id'} element={<CardItem />} />
        <Route path={'/favourites'} />
      </Routes>
    </Layout>
  );
}

export default App;
