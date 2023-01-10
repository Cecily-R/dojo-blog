import Navbar from './navBar';
import Home from './home';

function App() {
  return (
    <div className="navBar">
      <Navbar />
      <div className="content">
        <Home />
      </div>
     
    </div>
  );
}

export default App;
