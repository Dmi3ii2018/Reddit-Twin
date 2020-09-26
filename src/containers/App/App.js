import React from "react";
import firebase from "./firebase-config"

class App extends React.Component {
  constructor() {
      super();

      this.state = {
        posts: [],
        loading: true,
      }
    }

    componentDidMount() {
      let postsRef = firebase.database().ref('Post');
      let _this = this;

      postsRef.on('value', function(snapshot) {
        console.log(snapshot.val());
        _this.setState({
          posts: snapshot.val(),
          loading: false
        });
        console.log("setState here")
      });
    }
    

  render () {
    return (
      <div className="App">
        {
          this.props.children && React.cloneElement(
          this.props.children, {
            firebase: firebase.database(),
            posts: this.state.posts,
            loading: this.state.loading
        })}
      </div>
    )
  }
}

export default App;
