import './styles/App.css';
import Header from './Header.js';
import HeaderNav from './HeaderNav.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {
  return (
    <div className="app lg-grid12col sm-grid1col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
