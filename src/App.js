import './App.css';
import Header from './Helpers/Header'
import Body from './Home/Body';
import About from './Home/About';
import Footer from './Helpers/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
