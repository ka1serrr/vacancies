import './app.scss'
import {ErrorBoundary} from "react-error-boundary";
import {Content} from "../pages/Content/Content";

function App() {
  return (
    <div className="app">
        <div className="container">
            <h1 className="title">List of vacancies</h1>
        </div>
        <Content/>
    </div>
  )
}

export default App
