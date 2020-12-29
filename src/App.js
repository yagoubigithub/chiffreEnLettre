import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Model from './components/Model';
import ReactDOMServer from "react-dom/server";
class App extends Component{
  state = {

    chiffre : 0,
    droite : 0,
    haut : 0,
    largeur : 200,
    hauteur : 100
  }

  getData = (drahemLettre) =>{

    this.setState({...drahemLettre})
  }
  handlePrint = ()=>{
   const toPrint =  ReactDOMServer.renderToString(<Model  drahemLettre={{...this.state}} />);
   var myWindow=window.open('');
   myWindow.document.write(toPrint);
   myWindow.print();
  }
  render(){
    return (
    <div >
    <Nav print={this.handlePrint} sendData={this.getData} />
    <Model  drahemLettre={{...this.state}} />
    </div>
  );
  }
  
}

export default App;
