import React, { Component } from 'react';
import postApi from '../../api/posts';

import { POST_CREATE_URL } from '../../constants/action-types';


class AddPost extends Component {
  constructor(props) {
    super(props);

    this.status = {
      title: '',
      body:'',
      userID: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleFromData.bind(this);
  }

  handleSubmit(event) {
    const postObj = new postApi(POST_CREATE_URL);

    const postFields = JSON.stringify({
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userID
    });

    postObj.creatPost(postFields)
      .then( (data) => {
    });

    event.preventDefault();
  }

  handleFromData(e) {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  render() {
    
    return (
      //Render post content
      <div className="addPostWrapper">
        <h4>Add post</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Title"
              name="title"
              onChange={this.handleFromData} />
          </div>

          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="User ID"
              name="userId"
              onChange={this.handleFromData} />
          </div>

          <div className="form-group">
            <textarea 
              className="form-control" 
              placeholder="Post content goes here..."
              name="body"
              onChange={this.handleFromData} >
            </textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Create Post</button>
        </form>
      </div>
    )
  }
}


export default AddPost;