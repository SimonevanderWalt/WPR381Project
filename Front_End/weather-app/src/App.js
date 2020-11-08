import Main from './main';
import WeatherData from './weather';
import NotFound from './NotFound';

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
          <Route exact path="/current-weather" render={(props) => <WeatherData {...props} />} />
          <Route exact path="/">
            <Main />
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
