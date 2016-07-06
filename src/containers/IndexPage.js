import React from 'react';
import { connect } from 'react-redux';
import jQuery from 'jquery';

import theBluImg from '../images/theBlu.png';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      speed: 0.1,
    };
  }

  componentDidMount() {
    jQuery(window).keydown(this.onKeydown.bind(this));
  }

  componentWillUnmount() {
    jQuery(window).off('keydown', this.onKeydown);
  }

  onKeydown(e) {
    const { originalEvent: { keyCode } } = e;
    const { position, speed } = this.state;
    /* up */
    if (keyCode === 38) {
      const { z } = position;
      this.setState({ position: { ...position, z: z - speed } });
    } else if (keyCode === 39) {
      const { x } = position;
      this.setState({ position: { ...position, x: x + speed } });
    } else if (keyCode === 40) {
      const { z } = position;
      this.setState({ position: { ...position, z: z + speed } });
    } else if (keyCode === 37) {
      const { x } = position;
      this.setState({ position: { ...position, x: x - speed } });
    }
  }

  render() {
    const { position: { x, y, z } } = this.state;
    return (
      <a-scene>
        <a-sky
          color="#111820"
        />
        <a-image
          src={theBluImg}
          width={4}
          height={4}
          position={'0 2 -6'}
        />
        <a-sphere
          position={`${x} ${y} ${z}`}
          radius="0.1"
          color="#EF2D5E"
        />
        <a-plane
          rotation="-90 0 0"
          width="4"
          height="16"
          color="#7BC8A4"
        />
      </a-scene>
    );
  }
}

IndexPage.defaultProps = {
};

IndexPage.propTypes = {
};

export default connect()(IndexPage);
