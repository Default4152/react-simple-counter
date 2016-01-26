var React = require('react');

var CounterItem = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  render: function() {
    return (
      <li className="list-group-item">
        {this.props.text}
        <button className="btn btn-success btn-xs pull-right" onClick={this.incrementCounter}>+</button>
          <p className="pull-right counter">{this.state.counter}</p>
        <button className="btn btn-danger btn-xs pull-right" onClick={this.decrementCounter}>-</button>
      </li>
    )
  },
  incrementCounter: function(e) {
    var newNum = this.state.counter + 1;
    this.setState({
      counter: newNum
    });
  },
  decrementCounter: function(e) {
    var newNum = this.state.counter - 1;
    this.setState({
      counter: newNum
    });
  }
});

module.exports = CounterItem;
