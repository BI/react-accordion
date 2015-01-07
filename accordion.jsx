function isElementType(element, expectedType) {
  return getElementType(element) == expectedType;
}

function getElementType(element) {
  return element.type.displayName;
}

var Accordion = React.createClass({
  getInitialState: function() {
    return { expanded: null };
  },
  expandSections: function(expandedSectionId) {
    this.setState({ expanded: expandedSectionId });
  },
  handleErrors: function() {
    if(this.props.children == null || this.props.children.length == 0) {
      throw new Error("No elements found in Accordion");
    }

    var errors = "";

    var children = this.props.children;

    if(children.constructor !== Array) {
      children = [children];
    }
    
    children.forEach(function(child) {
      if(!isElementType(child, "Section")) {
        errors += "Found " + getElementType(child) + " element in Accordion. All elements should be 'Section'\r\n";
      }
    });

    if(errors != "") {
      throw new Error(errors);
    }
  },
  render: function() {
    this.handleErrors();

    var children = this.props.children;

    if(children.constructor !== Array) {
      children = [children];
    }

    var sections = children.map(function (section, id) {
      return (
        <Section clickHandler={this.expandSections} id={id} expanded={this.state.expanded == id}>
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
  handleErrors: function() {
    var errors = "";

    var id = this.props.id;
    
    if(this.props.children == null || this.props.children.constructor !== Array) {
      throw new Error("Too few elements in Section " + id + ". Expected 2: 'Heading' followed by 'Content'");
    }
    else if(this.props.children.length > 2) {
      throw new Error("Too many elements (" + this.props.children.length + ") in Section " + id + ". Expected 2: 'Heading' followed by 'Content'");
    }

    var expectedHeading = this.props.children[0];
    var expectedContent = this.props.children[1];

    if(!isElementType(expectedHeading, "Heading")) {
      errors += "First element in Section " + id + " was type " + getElementType(expectedHeading) + ", expected 'Heading'\r\n";
    }

    if(!isElementType(expectedContent, "Content")) {
      errors += "Second element in Section " + id + " was type " + getElementType(expectedContent) + ", expected 'Content'\r\n";
    }

    if(errors != "") {
      throw new Error(errors);
    }
  },
  render: function() {
    this.handleErrors();

  	var heading = this.props.children[0];
    var content = this.props.children[1];

    return (
      <div className="accordion-section">
        <Heading clickHandler={this.props.clickHandler} id={this.props.id} expanded={this.props.expanded}>{heading.props.children}</Heading>
        { this.props.expanded ? content : null }
      </div>
    )
  
}
});

var Heading = React.createClass({
  headingClicked: function () {
    var newState = null;
    if(!this.props.expanded) {
      newState = this.props.id
    }

    this.props.clickHandler(newState)
  },
  render: function() {
    return (
      <div className="accordion-heading" onClick={this.headingClicked}>{this.props.children}</div>
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