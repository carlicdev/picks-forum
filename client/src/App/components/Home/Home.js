import React, { Component } from 'react'

import NewComment from '../Comments/NewComment';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Banner from '../Banner/Banner';
import {Connected} from '../Connected/Connected';
import ForumHome from '../Forum/ForumHome';
import LastMessagesList from '../Last/LastMessagesList';
import ForumStats from '../Stats/ForumStats';

export default class Home extends Component {
  render() {
    return (
      <div className="container p-2">
        <div className="row p-2">
          <div className="col-9"><Breadcrumb /></div>
            <div className="col-3 align-self-end "><NewComment /></div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <Banner />
            <ForumHome />
          </div>
          <div className="col-lg-3">
            <Connected connectedUsers='CarliC' />
            <LastMessagesList />
            <ForumStats />
          </div>
        </div>
      </div>
    )
  }
}
