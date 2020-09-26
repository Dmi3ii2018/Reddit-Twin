import React, { Component } from "react";

class Posts extends Component {
    
  render() {
    console.log(this.props);
    if (this.props.loading) {
      return <div>Loading…</div>;
    }
    return (
      <div className="Posts">
        {this.props.posts.map((post) => {
          return <div key={Math.random()}>{post.title}</div>;
        })}
      </div>
    );
  }
}
export default Posts;
