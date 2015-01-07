var Accordion = React.createClass({
  getInitialState: function() {
    return { expanded: null };
  },
  toggleTabs: function(expandedTabId) {
    this.setState({ expanded: expandedTabId });
  },
  render: function() {
    var clickHandler = this.toggleTabs;
    var sections = this.props.children.map(function (section, id) {
      return (
        <Section clickHandler={clickHandler} id={id} expanded={this.state.expanded == id}>
        	{section.props.children}
        </Section>
      );
    }, this);
    
    return (
      <div className="accordion">
      	{sections}
      </div>
    );
  }
});

var Section = React.createClass({
  render: function() {
  	var headerChildren;

  	//[].find only works in Firefox, not Chrome
  	this.props.children.forEach(function (element) {
  		if(element.type.displayName == "Heading") {
  			headerChildren = element.props.children;
  		}
  	});

  	var content = this.props.children.filter(function (element) {
  		return element.type.displayName == "Content";
  	});

    return (
      <div className="accordion-section">
        <Heading clickHandler={this.props.clickHandler} id={this.props.id} expanded={this.props.expanded}>{headerChildren}</Heading>
        { this.props.expanded ? content : null }
      </div>
    )
  
}
});

var Heading = React.createClass({
  tabClicked: function () {
    var newState = null;
    if(!this.props.expanded) {
      newState = this.props.id
    }

    this.props.clickHandler(newState)
  },
  render: function() {
    return (
      <div className="accordion-heading" onClick={this.tabClicked}>{this.props.children}</div>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div className="accordion-content">{this.props.children}</div>
    )
  }
});