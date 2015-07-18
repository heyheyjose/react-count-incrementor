var React = require('react');

var Counter = React.createClass({

	render: function () {
		return (
			<div>this will be the incrementor</div>
		);
	}

});

React.render(<Counter/>, document.getElementById('counter-mount'));
