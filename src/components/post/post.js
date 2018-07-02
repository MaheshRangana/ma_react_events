import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { match, location } = this.props;

    return (
      //Render post content
      <div className="postWrapper">
        <img src={location.state.bannerback} />
        <div className="postItem">

          <div className="postItemLeft">
            <div className="floatContent">
              <h4>{location.state.title}</h4>
              <span>{location.state.eventstart}</span>
            </div>
              <span dangerouslySetInnerHTML={{__html: location.state.bodyfull }} />
          </div>

          <div className="postItemRight">
            <h4>Event details: </h4>
            <span dangerouslySetInnerHTML={{__html: location.state.eventdetails }} />
          </div>
        </div>
      </div>
    )
  }
}


export default Post;