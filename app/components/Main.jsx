var React = require('react');
var Nav = require('Nav');

/*
var Main = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        <p>This.props.children are rendered here. </p>
        {this.props.children}
      </div>);
  },
});
*/

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className = "row">
        <div className="columns small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>);
}


module.exports = Main;
