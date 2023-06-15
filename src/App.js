import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Navbar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
