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
                const { posts } = value;
                return (
                  <div className="container p-0">
                      <div className="row">
                        <div className="col-sm-8 text-left">
                         <p className="text-green">Temas:</p>
                        </div>
                        <div className="col-sm-4 text-right">
                        10
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-8">
                        <p className="text-green">Mensajes:</p>
                      </div>
                      <div className="col-4 text-right">
                       <p className="text-blue">{posts.length}</p>
                      </div>
                    </div>
                      <div className="row">
                      <div className="col-8">
                        <p className="text-green">Usuarios:</p>
                      </div>
                      <div className="col-4 text-right">
                        2
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-6">
                      <p className="text-green"><small>Ultimo usuario</small>:</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>alguien</p>
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
