import Header from "./components/header/header.component";
import Body from "./components/body/body,component";
import Footer from "./components/footer/footer.component";
import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  return (
    
    <div className="bg-[#18191C] h-full">
      <ToastContainer position="top-center" limit={1} />
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="body-wrapper">
        <Body />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
