import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ModalComponents } from "./components/ModalComponents";

import Sidebar from "./components/Sidebar";
import Routes from "./config/routes";

import "./sass/app.scss";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div className="main">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
      <ModalComponents />
    </div>
  );
}

export default App;
