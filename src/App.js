import './App.css';
import data from './sample.json'
import { Navbar } from './Components/Navbar';
import { Dashboard } from './Components/Dashboard';

function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
