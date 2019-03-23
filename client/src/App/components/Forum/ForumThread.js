import React, { Component } from 'react';

import { FaRegComments, FaUserTag } from 'react-icons/fa';
import { IoIosCalendar } from 'react-icons/io';
import { onDay } from '../../helpers';

export default class ForumThread extends Component {
  render() {
      const { subject, title, timestamp, author } = this.props.post;
      const date = onDay(timestamp);
      //const shortText = comment.substring(0,40);
      
    return (
        <div className="row py-1 m-0 thread align-items-center">
            <div className="col-1">
                <FaRegComments  size={'2.5em'} className="text-green" />
            </div>
            <div className="col-md-5">
                <h5 className="text-blue"><b>{subject}</b></h5>
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
                <p className="text-blue mb-0"><small>{title}</small></p>
                <p><span><IoIosCalendar className="text-green"/></span><small>{date} - <span><FaUserTag className="text-green" /></span><span className="text-blue"> {author}</span></small></p>
            </div>      
        </div>
               )
  }
}
