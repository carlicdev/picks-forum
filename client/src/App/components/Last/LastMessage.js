import React, { Component } from 'react';
import { FaUserTag } from 'react-icons/fa';
import { IoIosCalendar } from 'react-icons/io';

export default class LastMessage extends Component {
  render() {
      const { title, author, date, topSubject} = this.props.post;
    return (
        <div>
        <h6 className="text-blue mb-0">{title}</h6>
        <p className="mb-0">
          <small> Ultimo: <span><FaUserTag className="text-green" /></span> <span className="text-blue">{author}</span> - <span><IoIosCalendar className="text-green" /></span> {date}</small></p>
        <p><small>{topSubject}</small></p>
        <hr/>
        </div>

    )
  }
}
