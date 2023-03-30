import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";


const App = () => {
  return (
    <section className="page">
        <Header />
        <Nav />
        <Profile />
        <Footer />
      </section>
  );
}

export default App;
