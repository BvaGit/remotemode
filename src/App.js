import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/';
import Articles from './Components/Articles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Artic from './Components/Artic';
import data from './data/data.json';

function App() {
  const artic = data.map((item) => {
   return (<Route exact path={`/artic/${item.id}`} key={item.id}>
            <Artic title={item.title} imageUrl={item.imageUrl} description={item.description}/>
          </Route>)
  });
  return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Articles} />
            { artic }
          </Switch>
        </Router>
      </div>
  );
}

export default App;
