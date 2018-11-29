import React from 'react';
import { string } from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      className: STATUS.NORMAL,
    };
  }

  onMouseEnter() {
    this.setState({ className: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ className: STATUS.NORMAL });
  }

  render() {
    const { className } = this.state;
    const { page, children } = this.props;

    return (
      <a
        className={className}
        href={page}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  page: string,
  children: string,
};

Link.defaultProps = {
  page: '#',
  children: '',
};

export default Link;
