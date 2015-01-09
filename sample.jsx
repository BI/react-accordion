var react_accordion = require("./accordion.jsx");

var Accordion = react_accordion.Accordion;
var Section = react_accordion.Section;
var Heading = react_accordion.Heading;
var Content = react_accordion.Content;

React.render(
  <Accordion>
    <Section>
      <Heading>Accordion Section 1</Heading>
      <Content>
        <p>Some text Content in a paragraph</p>
        <button>Button 1</button>
      </Content>
    </Section>
    <Section>
      <Heading>Accordion Section 2 <button>Activate Foo</button><button>Activate Bar</button></Heading>
      <Content>
        Just some text content for Accordion Section 2. Nothing to see here.
      </Content>
    </Section>
    <Section>
      <Heading>Accordion Section 3</Heading>
      <Content>
        <div>Some text Content in a div</div>
        <div>Some more text Content in a div</div>
        <div>Even more text Content in a div</div>
      </Content>
    </Section>
  </Accordion>,
  document.getElementById('content')
);