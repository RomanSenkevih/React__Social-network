
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <Nav />
        <div className='main'>
          <Routes>
            <Route path="/Profile/*" element={<Profile/>} />
            <Route path="/Dialogs/*" element={<Dialogs/>} />
            <Route path="/Music/*" element={<Music/>} />
            <Route path="/News/*" element={<News/>} />
            <Route path="/Settings/*" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
        
  );
}

export default App;
