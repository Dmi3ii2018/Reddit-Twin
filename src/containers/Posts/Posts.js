import React, { Component } from "react";

const NUMBER_OF_AD_BACKGROUNDS = 2;
const FONT_TYPES = 4;

const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref("Post/" + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote,
    });
  };

  handleDownvote = (post, key) => {
    this.props.firebase.ref("Post/" + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1,
    });
  };

  render() {
    let posts = this.props.posts;

    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return <div>Loading…</div>;
    }
    return (
      <div className="posts">
        {Object.keys(posts).map((key, i) => {
          return (
            <div
              key={Math.random()}
              className={`post-item post-item--${getRandomNumber(
                NUMBER_OF_AD_BACKGROUNDS
              )} font--${getRandomNumber(FONT_TYPES)}`}
            >
              <div className="content">
                <span className="preview">{posts[key].title}</span>
                <div>
                  <div>
                    <button
                      onClick={_this.handleUpvote.bind(this, posts[key], key)}
                      type="button"
                    >
                      Upvote
                    </button>
                    {posts[key].upvote}
                  </div>
                  <div>
                    <button
                      onClick={_this.handleDownvote.bind(this, posts[key], key)}
                      type="button"
                    >
                      Downvote
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
