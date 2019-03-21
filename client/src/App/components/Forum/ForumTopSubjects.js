import React, { Component } from 'react';
import { PostConsumer } from '../../../context';
import { Link } from 'react-router-dom';

import { FaRegComments, FaUserTag } from 'react-icons/fa';
import { IoIosCalendar } from 'react-icons/io'

export default class ForumTopSubjects extends Component {
  render() {
     const { topSubject, title, date, author} = this.props.post;
     const { subjectPosts } = this.props;
    return (
        <PostConsumer>
              {(value) => {
             return (

                <div className="row py-1 m-0 thread align-items-center">
                    <div className="col-1">
                        <FaRegComments  size={'2.5em'} className="text-green" />
                    </div>
                    <div className="col-md-5 mb-0">
                        <Link to="/forums/threads">
                            <h5 className="text-blue"><b>{topSubject}</b></h5>
                        </Link>
                    </div>
                    <div className="col-md-2">
                      <div className="row">

                    <div className="col-6 text-center p-0">
                        <p className="mb-0 text-muted"><small>Temas</small></p>
                        <p className="mt-0"><small>{subjectPosts.length}</small></p>
                    </div>
                    <div className="col-6 text-center p-0">
                        <p className="mb-0 text-muted"><small>Mensajes</small></p>
                        <p><small>4.6k</small></p>
                    </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                        <p className="text-blue mb-0"><small>{title}</small></p>
                        <p><span><IoIosCalendar className="text-green"/></span><small> {date}  <span> - <FaUserTag className="text-green"/></span><span className="text-blue"> {author}</span></small></p>
                    </div>
                    </div>
             );     
               }}
          </PostConsumer>
    );
  }
}
