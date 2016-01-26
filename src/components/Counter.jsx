var React = require('react');
var CounterList = require('./CounterList.jsx');

var Counter = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      newItemText: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var buildItems = this.state.items;
    if (this.state.newItemText !== '') {
      buildItems.push({
        text: this.state.newItemText,
        counter: 0
      });
    }
    
    this.setState({
      newItemText: '',
      items: buildItems
    });
  },
  handleInput: function(e) {
    this.setState({
      newItemText: e.target.value
    });
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group submitForm">
          <input className="form-control" onChange={this.handleInput} type="text" value={this.state.newItemText}/>
          <span className="input-group-btn">
            <button className="btn btn-info">Add</button>
          </span>

        </form>
        <CounterList items={this.state.items}/>
      </div>
    )
  }
});

module.exports = Counter;
