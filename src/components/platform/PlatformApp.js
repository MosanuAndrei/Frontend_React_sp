import React, {Component} from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddSeriesComponent from './AddSeriesComponent';
import ListSeriesComponent from './ListSeriesComponent';

class PlatformApp extends Component {
  render(){
    return(
      <div className="container">
        <Router>
          <div className="col-md-6">
            <Switch>
              <Route path="/" exact component={ListSeriesComponent}/>
              <Route path="/add-series" exact component={AddSeriesComponent}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default PlatformApp;
