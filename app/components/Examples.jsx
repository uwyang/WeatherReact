var React = require('react');
var {Link} = require('react-router');
//keyword Link is case sensitive!!!

/*
var Examples = React.createClass({
  render: function(){
      return (
      <h3>Example Component</h3>
    );
  },

});
*/

var Examples = (props)=> {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some example locations to try out: </p>
      <ol>
        <li>
          <Link to='/?location=Waterloo'>Waterloo, ON</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
