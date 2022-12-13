
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cast from './Pages/Cast/Cast';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cast' element={<Cast></Cast>}></Route>
          <Route path='/details/:id' element={<Details></Details>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
