import React, { Component } from 'react'

export default class Breadcrumb extends Component {
  render() {
    return (
        <React.Fragment>
            <ol className="breadcrumb">
              <li className="breadcrumb-item-active" aria-current="page">Inicio</li> 
            </ol>
        </React.Fragment>
    );
  }
}
