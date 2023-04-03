import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Explore from "./tuiter/explore/explore-page";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

// TO DEPLOY AGAIN!
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/*" element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter"
                         element={<Tuiter/>}/>
                  <Route path="/tuiter/explore"
                         element={<Explore/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;

