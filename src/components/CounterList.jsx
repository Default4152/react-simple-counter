var React = require('react');
var CounterItem = require('./CounterItem.jsx');

var CounterList = React.createClass({
  handleBtnPress: function(e) {
    console.log(this.props.items);
  },
  render: function() {
    var generatedItems = this.props.items.map(function(item) {
      return <CounterItem text={item.text} key={item.text + item.counter} counter={item.counter} handleBtnPress={this.handleBtnPress}/>
    }.bind(this));
    return (
      <ul className="list-group">
        {generatedItems}
      </ul>
    )
  }
});

module.exports = CounterList;
