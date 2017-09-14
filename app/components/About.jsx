var React = require('react')
//we have to use query tag, OR; use webpack.

/*
var About = React.createClass({
  render: function(){
      return (
      <h3>About Component</h3>
    );
  },

});*/

//simple stateless component.
//you can only refactor stateless stuff!!!
var About = (props)=>{
    return (
    <h1 className="text-center">About</h1>
  );
};

module.exports = About;
