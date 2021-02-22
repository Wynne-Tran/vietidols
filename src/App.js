import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './component/Home/Home'
import SignUp from './component/SignUp/SignUp'
import SignIn from './component/SignIn/SignIn'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route render={ () => <h1>404 Error</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
