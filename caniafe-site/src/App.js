import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home  from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Store from './pages/Store'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/custom-order" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
