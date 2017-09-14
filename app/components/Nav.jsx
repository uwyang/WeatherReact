var React = require('react');
//if You use IndexRoute, use IndexLink
var {Link, IndexLink} = require('react-router');
//OR: var Link = require('react-router').Link.
/*
var Nav = React.createClass({
  render: function(){
    return (
      <div>
        nav comp
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Get Weather</IndexLink>
        <Link to="about" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >About</Link>
        <Link to="examples" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >Examples</Link>
        <a href="#/about" activeClassName="active" >about </a>
      </div>
    );
  }
});
*/

var Nav = React.createClass({
  render: function(){
    return (
      //in jsx, class is a keyWord.
      //so use classname for css instread.
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather app
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Get Weather</IndexLink>
            </li>
            <li>
              <Link to="about" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >About</Link>
            </li>
            <li>
              <Link to="examples" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  },
  onSearch: function(e){
    e.preventDefault();
    console.log("not wired up. ");
  }
});


var old = (
  <div>
    nav comp
    {/*
      for CSS, camel case everything!
      e.g. font-weight ---> fontWeight.
    */}
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Get Weather</IndexLink>
    <Link to="about" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >About</Link>
    <Link to="examples" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >Examples</Link>
    <a href="#/about" activeClassName="active" >about </a>
  </div>
);

module.exports=Nav;
