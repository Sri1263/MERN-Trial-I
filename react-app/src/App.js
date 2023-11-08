import AgroFarm from './AgroFarm/AgroFarm';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import NodeFS from './NodeFs/NodeFS';
import RRD from './RRD/RRD';
import About from './RRD/About';
import Semester from './RRD/Semester';
import Sem7 from './RRD/Sem7';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='/agro' element={<AgroFarm/>}/>
          <Route exact path='/nodefs' element={<NodeFS/>}/>
          <Route exact path='/rrd' element={<RRD/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/semester' element={<Semester/>}/>
          <Route exact path='/sem7' element={<Sem7/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
