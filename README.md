React Accordion
===============

Accordion-style list component made in React. Allows for signle-level list items under each accordion tab.

Usage
-----

Pass a heirarchical object with text attributes into the Accordion component as "data". Example:

    var data =
    [
      {
        text:"AccordionTab 1",
        children:
        [
          {text:"Child 1"},
          {text:"Child 2"}
        ]
      },
      {
        text:"AccordionTab 2",
        children:
        [
          {text:"Child 3"},
          {text:"Child 4"},
          {text:"Child 5"}
        ]
      }
    ]

    React.render(
      <Accordion data={data}/>,
      document.getElementById('content')
    );

Components
----------

Accordion: Main component. Makes multiple AccordionTabs, as many as the number of top-level items in the data array.
AccordionTab: One tab representing each top level item in the data example. (e.g. "AccordionTab 1"). Each tab makes as many ListItems as objects in the children array. Must have text and children properties.
ListItem: One item in a list. (e.g. "Child 1"). Must have a text properties.