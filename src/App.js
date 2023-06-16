import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages and components
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route
          path= "/"
          element={ <Home /> }
          />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
