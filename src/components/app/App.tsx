import './app.scss'
import {ErrorBoundary} from "react-error-boundary";
import {Content} from "../pages/Content/Content";
import {Route, Routes} from "react-router-dom";
import {CardItem} from "../pages/CardItem/CardItem";
import {Layout} from "../UI/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Content/>}/>
        <Route path={'/vacancies/:id'} element={<CardItem/>}/>
        <Route path={'/favourites'} />
      </Routes>
    </Layout>
  )
}

export default App
