import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Dogs from './components/Dogs/Dogs';
import NavBar from './components/Nav/Nav';
import DogDetails from './components/DogDetail/DogDetail';
import CreateDog from './components/CreateDog/CreateDog';
import LandingPage from './components/Landingpage/Landingpage';
import ArgentinianDogo from './components/ArgentinianDogo/ArgentinianDogo';
import Hachiko from './components/Hachiko/Hachiko';
import GermanSheperd from './components/GermanShepherd/GermanShepherd';
import SaintBernard from './components/SaintBernard/SaintBernard';
import Poodle from './components/Poodle/Poodle';
import DogPack from './components/DogPack/DogPack';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<LandingPage/>} />
        
        <Route path="/dogs" element=
          {
            <div>
            <NavBar />
            <Dogs />
            </div>
          } 
          />
        
        <Route exact path="/dogs/:id" element=
          {
            <div>
            <NavBar />
            <DogDetails />
            </div>
          } 
          />

        <Route path="/create" element=
          {
            <div>
            <NavBar />
            <CreateDog />
            </div>
          } 
          />
        {/* <Route path="/dogs" element={<NavBar/>} /> */}
        <Route path='/dogpack' element={<DogPack/>} />
        <Route path='/dogo' element={<ArgentinianDogo/>} />
        <Route path='/hachiko' element={<Hachiko/>} />
        <Route path='/german' element={<GermanSheperd/>} />
        <Route path='/saintbernard' element={<SaintBernard/>} />
        <Route path='/poodle' element={<Poodle/>} />
      </Routes>
    </div>
  );
}

export default App;
