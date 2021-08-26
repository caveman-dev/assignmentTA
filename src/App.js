import { useState, } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Resources from './components/Resources';
function App(props) {
  const[value,setValue]=useState(false)
  return (
    <div className="App">
      <Link to='/' />
      <Link to='/resources'><button onClick={()=>setValue(!value)} disabled={value}>Resources</button></Link>
      <Route path='/resources'   component={Resources} />
      <Route path='/'  component={Home}/>
    </div>
  );
}

export default App;
