import React, { Component } from "react";

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref("Post/" + key).update({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote,
    });
  };

  handleDownvote = (post, key) => {
    this.props.firebase.ref("Post/" + key).update({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1,
    });
  };

  render() {
    let posts = this.props.posts;
    console.log(posts)
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return <div style={{color:"white"}}>Loading…</div>;
    }
    return (
      <div className="posts">
        {Object.keys(posts).map((key, i) => {
          return (
            <div
              key={Math.random()}
              className={`post-item post-item--${posts[key].background} font--${posts[key].fontType}`}
            >
              <div className="content">
                <span className="preview">{posts[key].title}</span>
                <div className="buttons-wrapper"> 
                  <div>
                    <button
                      onClick={_this.handleUpvote.bind(this, posts[key], key)}
                      type="button"
                    >
                      +
                    </button>
                    {posts[key].upvote}
                  </div>
                  <div>
                    <button
                      onClick={_this.handleDownvote.bind(this, posts[key], key)}
                      type="button"
                    >
                      -
                    </button>
                    {posts[key].downvote}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Posts;
