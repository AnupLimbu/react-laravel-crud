import Header from './Header'
import AddProduct from './AddProduct';
import Home from './Home'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UpdateProduct from './UpdateProduct';
import AddSuccess from './AddSuccess';


function App() {

  
  return (
    <div className="App">
       <Header/>
       <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/addproduct" component={AddProduct}>
              </Route>
              <Route exact path="/updateproduct/:id" component={UpdateProduct}>
              </Route>
              <Route exact path="/addsuccess" component={AddSuccess}>
              </Route>
          </Switch>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
