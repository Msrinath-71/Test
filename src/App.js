import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Navbar from './Components/Common/Layout/NavMenu';
import ActivityReport from './Components/Common/Reports/ActivityReport';
import DynamicReport from './Components/Common/Reports/DynamicReport';


function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
          <Route path="/dynamicReport" component={DynamicReport}/>
          
        </Switch>
    </Router>
  );
}
export default App;
