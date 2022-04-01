import './App.css';
import CreateUser from './component/CreateUser';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserData from './component/UserData';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/UserData" element={<UserData/>} />
          <Route exact path="/CreateUser" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
