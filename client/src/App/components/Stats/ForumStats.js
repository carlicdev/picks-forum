import React, { Component } from 'react';
import { PostConsumer } from '../../../context';

export default class ForumStats extends Component {
  render() {
    return (
      <div className="container p-1">
        <div className="card">
          <div className="card-header text-white bg-info">
            <h5>Estadisticas del Foro</h5>
          </div>
          <div className="card-body pt-4 pb-0">
            <PostConsumer>
              {(value) => {
                return (
                  <div className="container text-center">
                      <div className="row">
                        <div classname="col-sm-8">
                         <p>Temas:</p>
                        </div>
                        <div className="col-sm-4">
                        10
                        </div>
                      </div>
                      <div className="row">
                      <div classname="col-8">
                        <p>Mensajes:</p>
                      </div>
                      <div className="col-4">
                      100
                      </div>
                    </div>
                      <div className="row">
                      <div classname="col-8">
                        <p>Usuarios:</p>
                      </div>
                      <div className="col-4">
                        2
                      </div>
                    </div>
                    <div className="row">
                    <div classname="col-8">
                      <p>Ultimo usuario:</p>
                    </div>
                    <div className="col-4">
                      Alguien
                    </div>
                  </div> 
                </div>                                            
                );
              }}
            </PostConsumer>
          </div>
        </div>
      </div>
    )
  }
}
