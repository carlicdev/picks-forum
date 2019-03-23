import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumThread from '../Forum/ForumThread';


export default class ForumTopSubject extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card my-3">
          <div className="card-header text-white bg-info">
            <h5>Deportes</h5>
          </div>
            <div className="card-body p-0">
            <ForumThread title={this.props.title} post={this.props.post} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
