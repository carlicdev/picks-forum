import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PostConsumer } from '../../../context';

import { MdToc } from 'react-icons/md';

export default class ForumThread extends Component {
  render() {
      const {title, text, date, author} = this.props.post;
      const shortText = text.substring(0,40);
    return (
        <PostConsumer>
              {(value) => (
                  
        <div className="row py-1 m-0 thread align-items-center">
            <div className="col-1">
                <MdToc  size={'2.5em'} className="text-bright" />
            </div>
            <div className="col-md-5">
                <h5 className="text-blue"><b>{title}</b></h5>
            </div>
            <div className="col-lg-1 text-center p-0">
                <p className="mb-0 text-muted"><small>Temas</small></p>
                <p className="mt-0"><small>4</small></p>
            </div>
            <div className="col-lg-1 text-center p-0">
                <p className="mb-0 text-muted"><small>Mensajes</small></p>
                <p><small>4.6k</small></p>
            </div>
            <div className="col-lg-4">
                <p className="text-blue mb-0"><small>{shortText}...</small></p>
                <p><small>{date}<span className="text-blue">{author}</span></small></p>
            </div>
               </div>
               )}
          </PostConsumer>
    );
  }
}
