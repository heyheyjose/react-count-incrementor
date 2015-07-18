var React = require('react');

var App = React.createClass({
	render() {
		return <h1>This is my own React dev starter kit :)</h1>;
	}
})

React.render(<App/>, document.getElementById('example'));
