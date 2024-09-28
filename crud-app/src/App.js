import logo from './logo.svg';
import './App.css';

//Components
import NavBar from './components/NavBar';
import AddUsers from './components/AddUsers';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';

//Routing
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path = "/add" element = {<AddUsers />}/>
        <Route path = "/all" element = {<AllUsers />}/>
        <Route path = "/" element = {<CodeforInterview />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
