import React from 'react';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.main}
      </div>
    );
  }
}

App.defaultProps = {
};

export default connect((state) => {
  return state;
})(App);
