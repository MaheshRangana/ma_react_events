import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import postApi from '../../api/posts';
import { POST_FETCH_URL } from '../../constants/action-types';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts : [],
      isError: false
    }
    
  }

  fetchPosts() {
    const postObj = new postApi(POST_FETCH_URL);

    postObj.fetchPosts()
      .then( (data) => {
        if(data.length > 0){
          //console.log(data);
          this.setState({
            posts : data
          })
        } else {
          this.setState({
            isError : true
          })
        }
    });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="postsWrpper">
       <h1>All Posts</h1>


      { !this.state.isError &&
        this.state.posts.map((post) =>
          <div className="postInPosts" key={post.nid}>
            <img src={post.banner} />
            <div className="postContent">
              <h4><Link to={{pathname:`${match.url}/${post.nid}`, state: post}} >{post.title}</Link></h4>
              <span>{post.body}</span>
            </div>
          </div>
        )
      }

      { this.state.isError
          ? <h4>Got an error when fetching the data</h4>
          : null
      }

      </div>
    )
  }
}


export default Posts;
