
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/layout/Header'
import Home from './Screens/Home' 
import Document from './Screens/Documents'
import Footer from './components/layout/Footer'
import Faq from './pages/faq'
import TermsConditions from './pages/termsconditions'
import PrivacyPolicy from './pages/privacypolicy'
import OurPartners from './pages/ourpartners'
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}

          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/documents" exact component={Document} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/termsconditions" exact component={TermsConditions} />
            <Route path="/privacypolicy" exact component={PrivacyPolicy} />
            <Route path="/ourpartners" exact component={OurPartners} />

          </Switch>
          
        <Footer />
      </Router>
    </div>
  );
}

export default App;
