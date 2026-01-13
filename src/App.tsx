import './App.css';
import Header from './components/header/Header';
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './components/login/Login';
import Messages from './pages/Messages';
import Webinars from './features/webinars';
// import MySchedule from './features/webinars/pages/Schedule';
import SchedulePage from './features/webinars/pages/Schedule';
import WebinarsList from './features/webinars/pages/WebinarsList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/messages" element={<Messages/>} />

        <Route path="/webinars/*" element={<Webinars />}>
          {/* <Route index element={<liveHero />} /> */}
          <Route path="schedule" element={<SchedulePage />} />
           <Route path="webinar-list" element={<WebinarsList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
