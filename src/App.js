import React,{Component} from 'react'
import Navber from './component/Navber'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import './style.css';
import Home from './component/Home';
import Features from './component/Features';
import Pricing from './component/Pricing';
import mypicture from "./imageInSrc.png" ;
class  App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
       <Navber />
       
       <Route path="/home" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/pricing" component={Pricing} />

        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

           <h1 className="titlered">BADR king</h1>
           <img src={mypicture}/>
           <img src="/imageInPublic.png"/>

        </div>

            <video width="320" height="240" controls>
            <source src="myVideo.mp4" type="video/mp4"/> 
            </video>

            
  
      </div>
    </BrowserRouter>
  )};
}
export default App;
