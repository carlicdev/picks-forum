import React, { Component } from 'react'
import { FaCommentAlt } from 'react-icons/fa';

export default class NewComment extends Component {
  render() {
    return (
      <div className="row justify-content-end mr-1">
      <button type="button" className="btn btn-info">
        <span>
            <FaCommentAlt />
        </span> Nuevos Comentarios
      </button>
      </div>
    )
  }
}
