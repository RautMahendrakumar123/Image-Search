
import './App.css';
import { ImageProvider } from './components/ImageContext';
import ImageSearch from './components/ImageSearch';

function App() {
  return (
    <div className="App">
     <ImageProvider>
      <ImageSearch />
     </ImageProvider>
    </div>
  );
}

export default App;
