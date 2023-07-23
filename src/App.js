import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import logo from './images/logo.svg';

function App() {
  return (
    <div class="app lg-grid12col sm-grid1col">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
