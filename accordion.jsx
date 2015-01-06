    var Accordion = React.createClass({
      getInitialState: function()
      {
        return { expanded: null };
      },
      toggleTabs: function(expandedTabId)
      {
        console.log(expandedTabId);
        this.setState({expanded:expandedTabId});
      },
      render: function()
      {
        var self = this;
        var clickHandler = this.toggleTabs;
        var accordionTabs = this.props.data.map(function (tab, id)
        {
          return (
            <AccordionTab data={tab} onTabClick={clickHandler} id={id} expanded={self.state.expanded == id}/>
          );
        });
        
        return (
          <div className="accordion">
            {accordionTabs}
          </div>
        );
      }
    });

    var AccordionTab = React.createClass({
      tabClicked: function ()
      {
        console.log(this.props.id);

        var newState = null;
        if(!this.props.expanded)
        {
          newState = this.props.id
        }

        this.props.onTabClick(newState)
      },
      render: function()
      {
        var listItems = this.props.data.children.map(function (tab)
        {
          return (
            <ListItem data={tab}/>
          );
        });

        return (
          <div className="accordionTab">
            <div className="tabHeader" onClick={this.tabClicked}>{this.props.data.text}</div>
            { this.props.expanded ? <div ref="list">{listItems}</div> : null }
          </div>
        )
      }
    });

    var ListItem = React.createClass({
      render: function()
      {
        return (
          <div className="listItem">{this.props.data.text}</div>
        )
      }
    });