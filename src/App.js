
import './App.css';
//default
// import MyComponent from './Components/Greet';
//named
import { Greet } from './Components/Greet';
function App() {
  return (
    <div className="App">
      <Greet/>
    </div>
  );
}

export default App;
