import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumThread from '../Forum/ForumThread';

function compare(a, b) {
    if(a.date > b.date) {
        return -1;
    }
    if(a.date < b.date) {
        return 1;
    }
    else {
        return 0;
    }
  }

export default class ForumTopSubject extends Component {
  render() {
      console.log(this.props);
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
