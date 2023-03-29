import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";


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
