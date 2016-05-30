import React from 'react';

import { connect } from 'react-redux';
import MainComponent from '../components/MainComponent';


class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <MainComponent />
      </div>
    );
  }
}

IndexPage.defaultProps = {
};

export default connect((state) => {
  return state;
})(IndexPage);
