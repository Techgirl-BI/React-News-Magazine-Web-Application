// import { Fragment } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './component/Navbar';
import ContactUsPage from "./pages/contactUsPage";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactUsPage/>
    </div>
  );
}

export default App;
