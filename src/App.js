
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Home from './Screens/Home' 
import Footer from './components/layout/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

          <Switch>
            <Route path="/" exact component={Home} />

          </Switch>
          
        <Footer />
      </Router>
    </div>
  );
}

export default App;
