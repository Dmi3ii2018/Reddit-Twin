import React from "react";
import firebase from "./firebase-config"

class App extends React.Component {
  constructor() {
      super();

      this.state = {
        posts: '',
        loading: false,
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
      });
    }
    

  render () {
    return (
      <div className="App">
        {
          this.props.children && React.cloneElement(
          this.props.children, {
            firebaseRef: firebase.database().ref('Post'),
            posts: this.state.posts,
            loading: this.state.loading
        })}
      </div>
    )
  }
}

export default App;
