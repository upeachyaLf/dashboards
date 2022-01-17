import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/overrides.css';
import './styles/global.css';

import Sidebar from './components/sidebar';

import routes from './constants/route';

import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import Storage from './pages/storage';
import Generation from './pages/generation';
import Consumption from './pages/consumption';

const App = () => (
  <>
    <BrowserRouter>
      <div>
        <Sidebar/>
        <div style={{
          marginLeft: "280px",
          padding: "25px",
          minHeight: "100vh",
          background: "#eceef0",
        }}>
          <Routes>
            <Route path = {routes.HOME} element={<Home/>}/>
            <Route path = {routes.GENERATION} element={<Generation/>} exact/>
            <Route path = {routes.CONSUMPTION} element={<Consumption/>} exact/>
            <Route path = {routes.STORAGE} element={<Storage/>} exact/>
            <Route path = {routes.EVENTS} element={<Events/>} exact/>
            <Route path = {routes.ABOUT} element={<About/>} exact/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
