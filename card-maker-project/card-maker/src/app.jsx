import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import CardList from './components/card/cardList';
import Login from './components/login/login';

function App() {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={['/', '/login']} exact>
            <Login />
          </Route>
          <Route path="/cardList">
            <CardList />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
