import { Modal } from "antd";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ModalLogin } from "./components/Models/Login";
import Sidebar from "./components/Sidebar";
import Routes from "./config/routes";

import "./sass/app.scss";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Sidebar setOpenModal={setOpenModal} />
        <div className="main">
          <Header />
          <Routes />
        </div>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={openModal}
          onOk={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
          footer={null}
        >
          <ModalLogin />
        </Modal>
      </BrowserRouter>
    </div>
  );
}

export default App;
