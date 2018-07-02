class Posts {
  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  // fetch posts
  fetchPosts = function() {
    return fetch(this.baseUrl)
      .then((res) => res.json())
      .catch(function(err){
        //console.log(err);
        return err;
      });
  }

  //create post
  creatPost = function (postFields) {
    return fetch(this.baseUrl, {
      method: 'POST',
      body: postFields,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json());
  }

  editPost = function (postID, postFields) {
    //implementation goes here
  }

  deletePost = function (postID) {
    //implementation goes here
  }
}

export default Posts