import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home  from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Store from './pages/Store'
import ProductDetails from './pages/ProductDetails'
import CustomOrder from './pages/CustomOrder'
import PaintedKits from './pages/PaintedKits'
import DiyKits from './pages/DiyKits'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/store/painted-kits" component={PaintedKits} />
      <Route exact path="/store/diy-kits" component={DiyKits} />
      <Route exact path="/custom-order" component={CustomOrder} />
      </Switch>
    </div>
  );
}

export default App;
