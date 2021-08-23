import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import New from "./New";

function App() {
  return (<>
  <h1>Nav Bar</h1>
    <BrowserRouter>
      <Route path="/new" component={New}/>
    </BrowserRouter>
  </>);
}

export default App;
