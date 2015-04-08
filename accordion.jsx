var React = require('react');

function isElementType(element, expectedType) {
  return getElementType(element) == expectedType;
}

function getElementType(element) {
  return element.type.displayName;
}

var ONE_OR_NONE = 0;
var ALWAYS_ONE = 1;
var MULTIPLE = 2;

var Accordion = React.createClass({
  propTypes: {
    expandMode: React.PropTypes.number,
    expandedSection: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      expandMode: ALWAYS_ONE,
      expandedSection: 0
    };
  },
  getInitialState: function() {
    expanded = {};
    expanded[this.props.expandedSection] = true;
    return { expanded: expanded };
  },
  expandSections: function(expandedSectionId, isExpanded, event) {
    var expanded = this.state.expanded;
    var expandMode = this.props.expandMode;

    if(expandMode === ALWAYS_ONE || expandMode === ONE_OR_NONE) {
      expanded = {};
    }

    expanded[expandedSectionId] = isExpanded;

    this.setState({ expanded: expanded });
    
    //supposedly React wraps the event, but it doesn't seem to be happening
    //so we need both of these here.
    event.stopPropagation();
    event.preventDefault();
    return false;
  },
  componentWillMount: function() {
    if(this.props.children === null || this.props.children.length === 0) {
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

    if(errors !== "") {
      throw new Error(errors);
    }
  },
  render: function() {
    var children = this.props.children;

    if(children.constructor !== Array) {
      children = [children];
    }

    var sections = children.map(function (section, id) {
      return (
        <Section clickHandler={this.expandSections} id={id} expanded={this.state.expanded[id]} expandMode={this.props.expandMode}>
        	{section.props.children}
        </Section>
      );
    }, this);
    
    return (
      <div 
        aria-multiselectable={this.props.expandMode === MULTIPLE}
        className="accordion">
      	{sections}
      </div>
    );
  }
});

var Section = React.createClass({
  componentWillMount: function() {
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
  	var heading = this.props.children[0];
    var content = this.props.children[1];

    return (
      <div className="accordion-section">
        <Heading clickHandler={this.props.clickHandler} id={this.props.id} expanded={this.props.expanded} expandMode={this.props.expandMode}>{heading.props.children}</Heading>
        { this.props.expanded ? <Content labelId={this.props.id}>{content.props.children}</Content> : null }
      </div>
    )
  
}
});

var Heading = React.createClass({
  headingClicked: function (event) {
    var expanded = this.props.expanded;
    var id = this.props.id;
    var expandMode = this.props.expandMode;

    if(!expanded) {
      this.props.clickHandler(id, true, event);
      return;
    }
    
    if(expandMode == ALWAYS_ONE) {
      return;
    }

    this.props.clickHandler(id, false, event);
  },
  render: function() {
    var message = (this.props.expanded ? "Expanded" : "Collapsed") + " accordion tab";
    return (
      <a
        aria-label={message}
        role="tablist"
        aria-expanded={this.props.expanded}
        className="accordion-heading"
        onMouseDown={this.headingClicked}
      >
          {this.props.children}
      </a>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div role="tabpanel" aria-labelledby={this.props.labelId} className="accordion-content">{this.props.children}</div>
    )
  }
});

module.exports.Accordion = Accordion;
module.exports.Section = Section;
module.exports.Heading = Heading;
module.exports.Content = Content;

module.exports.ONE_OR_NONE = ONE_OR_NONE;
module.exports.ALWAYS_ONE = ALWAYS_ONE;
module.exports.MULTIPLE = MULTIPLE;