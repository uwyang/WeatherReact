var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer= require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
      //set up porps and their default types.
      //and if they're optional or required.
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    //react does not work well with 3rd party libraries, so
    //need to move modal stuff outof the render method.
    //i.e. Roundation + React = problems.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;
    //still need to return divs because it's the minimum requirement.
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
