'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '4 bedrooms, 3 baths, 1.5 acres, pool';
    }

    return e(
      'h5',
      { onMouseEnter: () => this.setState({ liked: true}) },
      '$499,000'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);