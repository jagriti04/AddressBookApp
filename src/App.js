import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path={["/home","/"]}>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
