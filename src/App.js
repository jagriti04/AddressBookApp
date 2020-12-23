import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home"
import RegistrationPage from './components/registration-page/registration-page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path={["/home","/"]}>
              <Home />
            </Route>
            <Route exact path="/register">
              <RegistrationPage />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
