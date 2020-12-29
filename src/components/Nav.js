import React, { Component } from 'react';



export default class Nav extends Component {
    handleInputChange = (e) =>{
        if(!isNaN(e.target.value) && e.target.value !== "" )
      this.props.sendData({
          [e.target.name] : e.target.value
      })

    }

    handlePrint = () =>{
        this.props.print()

    }
    render() {
        return (
            <div>
            <input type="number" onChange={this.handleInputChange} name="chiffre" placeholder="chiffre" />
            <input type="number" onChange={this.handleInputChange} name="droite" placeholder="droite" />
            <input type="number" onChange={this.handleInputChange} name="haut" placeholder="Haut" />

<br />

            <input type="number" onChange={this.handleInputChange} name="largeur" placeholder="largeur" />
            <input type="number" onChange={this.handleInputChange} name="hauteur" placeholder="Hauteur" />






            <button onClick={this.handlePrint} >Imprimer</button>
                
            </div>
        )
    }
}
