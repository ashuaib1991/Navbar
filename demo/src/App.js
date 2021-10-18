import logo from './logo.svg';
import './App.css';
import First from './components/First'

import Welcome from './components/Welcome'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'
import Eigth from './components/Eigth'
import Ninth from './components/Ninth'
import Change from './components/Change'
import Baby from './components/FunctionEvent'
import Babies from './components/ClassEvent'
import ClassWork from './components/ClassWork'
import Condition from './components/Condition'
import Ternary from './components/Ternary'
import Bind from './components/Bind'
import List from './components/List'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component='Home'></Route>
          <Route path='/services' exact component='Services'></Route>
        </Switch>
      </Router>
     
          {/* <Bind></Bind> */}
          {/* <List></List> */}
      
      {/* <First/> */}
      {/* <Second></Second> */}
      {/* <Welcome></Welcome> */}
      {/* <Third name='Dunmoye' school='Unilag'/>
      <Third name='Isaac' school='Lautech'/>
      <Third name='Adetayo' school='OOU'/> */}
      {/* <Third>
        <p>This is a boy</p>
        <p>This is a girl</p>
        <p>This is another girl</p>
        <button>Click Me</button>
      </Third> */}
      {/* <Fourth name='Dunmoye' school='Unilag'/>
      <Fourth name='Isaac' school='Lautech'/>
      <Fourth name='Adetayo' school='OOU'/>  */}
      {/* <Fifth></Fifth> */}
      {/* <Sixth></Sixth> */}

       {/* <Eight person='Dunmoye' food='Semo/> */}
      {/* <Seventh name='Isaac' school='Lautech'/>
      <Seventh name='Adetayo' school='OOU'/>   */}
      {/* <Eigth person="Dunmoye's" food="Semo and Ogbono plus catfish"/> */}
      {/* <Ninth city='Ogba' state='Lagos'/> */}
      {/* <Change/> */}
      {/* <Baby/> */}
      {/* <Babies/> */}
      {/* <ClassWork/> */}
      {/* <Condition/> */}
      {/* <Ternary/> */}

      

    </div>
  );
}

export default App;
