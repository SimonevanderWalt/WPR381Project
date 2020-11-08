import Main from './main';
import WeatherData from './weather';

import {
  BrowserRouter as Router,
  Switch, /*useLocation, Redirect,*/ 
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/Weather" render={(props) => <WeatherData {...props}/>}/>
          {/* <Route path="/Weather" >
            <WeatherData />
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
