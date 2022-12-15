import './app.scss'
import loadable from '@loadable/component'

import {Route, Routes} from "react-router-dom";
const Content = loadable(() => import("@/components/pages/Content/Content"))
const CardItem = loadable(() => import('@/components/pages/CardItem/CardItem'))
import {Layout} from "../UI/Layout/Layout";
import {LoaderComponent} from "@/components/UI/LoaderComponent/LoaderComponent";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Content fallback={<LoaderComponent/>}/>}/>
        <Route path={'/vacancies/:id'} element={<CardItem/>}/>
        <Route path={'/favourites'} />
      </Routes>
    </Layout>
  )
}

export default App
