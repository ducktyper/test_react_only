import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        Item {this.props.match.params.itemId}
      </div>
    );
  }
}

export default Item;
