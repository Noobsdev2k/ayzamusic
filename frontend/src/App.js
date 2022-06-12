import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
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
    </div>
  );
}

export default App;
