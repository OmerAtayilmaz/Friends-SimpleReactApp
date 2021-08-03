import './App.css';
import React,{Component} from 'react';
import Navbar from './components/Navbar';
import Profiles from './components/Profiles';
import AddProfile from './components/AddProfile';

class App extends Component{

  
  render(){
  return (
    <div className="App">
      <Navbar titleBrand="Friends"/>
     
     <main className="container-fluid">
       <AddProfile/>
       <Profiles/>
     </main>

    
    </div>
  ); 
}
}

export default App;
