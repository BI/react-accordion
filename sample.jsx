var RxAccordion = require("./accordion.jsx");

var Accordion = RxAccordion.Accordion;
var Section = RxAccordion.Section;
var Heading = RxAccordion.Heading;
var Content = RxAccordion.Content;

React.render(
  <Accordion>
    <Section>
      <Heading>Accordion Tab 1</Heading>
      <Content>
        <p>Some text Content in a paragraph</p>
        <button>Button 1</button>
      </Content>
      <Content>
        <p>Some more text Content in a paragraph</p>
        <button>Button 2</button>
      </Content>
      <Content>
        <p>Even more text Content in a paragraph</p>
        <button>Button 3</button>
      </Content>
    </Section>
    <Section>
      <Heading>Accordion Tab 2 <button>Activate Foo</button><button>Activate Bar</button></Heading>
      <Content>
        Just some text content for Accordion Tab 2. Nothing to see here.
      </Content>
      <Content>
        Just some more text content for Accordion Tab 2. Nothing to see here.
      </Content>
      <Content>
        This is also text content for Accordion Tab 2. Nothing to see here.
        <Content>
          This is Recursive text content (content inside text content)!
        </Content>
      </Content>
    </Section>
  </Accordion>,
  document.getElementById('content')
);