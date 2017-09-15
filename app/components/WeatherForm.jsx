var React = require('react');


//expanded makes things full width.
var WeatherForm = React.createClass({
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Submit</button>
        </form>
      </div>
    );
  },

  onFormSubmit: function(e){
    //prevent the whole page from loading.

    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length >0){
      this.refs.location.value = "";
      console.log("calling this.props.onSearch(location)");
      this.props.onSearch(location);
    }
  }
});

module.exports = WeatherForm;
