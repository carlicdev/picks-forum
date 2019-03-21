import React from 'react'

export const Connected = (props) => {
  
    return (
      <div className="container p-1">
        <div className="card">
          <div className="card-header text-white bg-info">
            <h5>Conectados</h5>
          </div>
          <div className="card-body pt-4 pb-0">
                <p>{props.connectedUsers}</p>
          </div>
          <div className="card-footer p-1">
            <small>Total: 11 (usuarios: 1, invitados: 10)</small>
          </div>
        </div>
      </div>
    )
}
