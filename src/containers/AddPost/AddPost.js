import React, { Component } from "react";

const NUMBER_OF_AD_BACKGROUNDS = 2;
const FONT_TYPES = 3;

const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

export class AddPost extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.firebase.ref("Post").push({
      title: this.state.title,
      fontType: getRandomNumber(FONT_TYPES),
      background: getRandomNumber(NUMBER_OF_AD_BACKGROUNDS),
      upvote: 0,
      downvote: 0,
    });
    this.setState({
      title: "",
      upvote: 0,
      downvote: 0,
    });
  };

  render() {
    return (
      <div className="AddPost">
        <form action="" className="air" onSubmit={this.handleSubmit}>
          <div className="form-inner">
            <div className="form-row">
              <label htmlFor="address">Оставь свой пост</label>
              <textarea rows="3" id="address" minLength="10" maxLength="200" required onChange={this.handleChange}></textarea>
            </div>
            <div className="form-row-icon">
              <button type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
