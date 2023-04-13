// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import BasicInfo from "./components/basic";
import SocialInfo from "./components/social";
import PersonalInfo from "./components/personal";
import Summary from "./components/summary";
import FromProvider from "./contextapi/conextprovider";
function App() {
  return (
    <FromProvider>
      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/socialinfo" element={<SocialInfo />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </FromProvider>
  );
}

export default App;
