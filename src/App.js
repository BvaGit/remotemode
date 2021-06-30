import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/';
import Articles from './Components/Articles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Artic from './Components/Artic';
//import data from './data/data.json';
import firebase from 'firebase';

function App() {

  const [fireCollection, setFireCollection] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('data').get();
      setFireCollection(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  const artic = fireCollection.map((item) => {
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
