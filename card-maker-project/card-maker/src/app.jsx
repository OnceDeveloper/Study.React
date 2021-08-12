import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import CardList from './components/card/cardList';
import Login from './components/login/login';

function App() {


  return (
    <div className={styles.app}>
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
    </div>
  );
}

export default App;
