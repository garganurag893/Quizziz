import './App.css';
import Post from './components/Post';
import data from './constants/data';

function App() {
  return (
    <div className="App">
      <Post postData={data}/>
    </div>
  );
}

export default App;
