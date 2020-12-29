import React, { Component } from 'react'
import {floatToDrahem} from 'drahem'
export default class Model extends Component {
    render() {
        return (
            <div style={{
                border  : "1px solid gray",
                width : this.props.drahemLettre.largeur + "mm",
                height :this.props.drahemLettre.hauteur + "mm",
                position : "relative"
            }}>

              <span
              style={{
                  position : 'absolute',
                  top : this.props.drahemLettre.haut + "mm",
                  right : this.props.drahemLettre.droite + "mm",
                  fontSize : 20
              }}
              
              >{floatToDrahem(this.props.drahemLettre.chiffre) }</span> 
            </div>
        )
    }
}
