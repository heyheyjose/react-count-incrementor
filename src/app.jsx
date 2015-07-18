var React = require('react');

var Counter = React.createClass({

	getInitialState: function () {
		return {
			count: 0
		}
	},

	incrementCount: function () {
		this.setState({
			count: this.state.count + 1
		});
	},

	render: function () {
		return (
			<div className="counter-component">
				<h1>Count: {this.state.count}</h1>
				<button type="button" onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}

});

React.render(<Counter/>, document.getElementById('counter-mount'));
