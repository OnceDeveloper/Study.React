import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
function App() {
  /**
   * SPA(Single Page Application) : 전체적인 페이지가 refresh되는 것이 아니고 부분적인 부분만 update 되는 것
   * 단점 : 원하는 페이지를 북마크하거나 history의 앞으로가기, 뒤로가기 등을 할 수 없다.
   * react-router : SPA에서 제공하는 장점을 그대로 유지하면서 라우팅(url을 붙임)을 할 수 있음
   * */
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        {/* 밑에와 같이 component={}에 넣으면 호출될때마다 새로운 컴포넌트가 생성되어 마운트되고 끝나면 언마운트되는 형식임 */}
        <Route path={['/', '/home']} exact component={Home}>
        </Route>
        {/* 위의 문제점을 보완하기 위해 component가 아닌 Route 하위에 컴포넌트를 적어주기로 하자 */}
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
