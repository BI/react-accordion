jest.dontMock('../accordion.jsx');

var React = require('react/addons');
var RxAccordion = require('../accordion.jsx');
var TestUtils = React.addons.TestUtils;

var Accordion = RxAccordion.Accordion;
var Section = RxAccordion.Section;
var Content = RxAccordion.Content;
var Heading = RxAccordion.Heading;

function makeAccordion(props) {
  return TestUtils.renderIntoDocument(
    React.createElement(
      Accordion,
      props,
      <Section>
        <Heading>Tab 0</Heading>
        <Content>Text 0</Content>
      </Section>,
      <Section>
        <Heading>Tab 1</Heading>
        <Content>Text 1</Content>
      </Section>,
      <Section>
        <Heading>Tab 2</Heading>
        <Content>Text 2</Content>
      </Section>
    )
  );
}

function getHeader(accordion, index) {
  return TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-heading')[index];
}

function getShownText(accordion) {
  return TestUtils
          .findRenderedDOMComponentWithClass(accordion, 'accordion-content')
          .getDOMNode()
          .textContent;
}

function getAllShownText(accordion) {
  return TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
}

describe('Accordion', function() {
  it('defaults to the first tab open', function() {
    var accordion = makeAccordion();

    var text = getShownText(accordion);

    expect(text).toBe("Text 0")
  });

  it('changes open tabs when clicked', function() {
    var accordion = makeAccordion();

    TestUtils.Simulate.mouseDown(getHeader(accordion, 1));

    expect(getShownText(accordion)).toBe("Text 1");

    TestUtils.Simulate.mouseDown(getHeader(accordion, 2));

    expect(getShownText(accordion)).toBe("Text 2");
  });

  it('defaults to indicated expanded section', function() {
    var accordion = makeAccordion({expandedSection: 1});
    expect(getShownText(accordion)).toBe("Text 1");
  });

  it('can hide all sections with expandMode == ONE_OR_NONE', function() {
    var accordion = makeAccordion({expandMode: RxAccordion.ONE_OR_NONE});
    expect(getShownText(accordion)).toBe("Text 0");

    TestUtils.Simulate.mouseDown(getHeader(accordion, 0));
    expect(function(){getShownText(accordion)}).toThrow();
  });

  it('can show multiple sections with expandMode == MULTIPLE', function() {
    var accordion = makeAccordion({expandMode: RxAccordion.MULTIPLE});
    expect(getShownText(accordion)).toBe("Text 0");

    TestUtils.Simulate.mouseDown(getHeader(accordion, 1));
    expect(getAllShownText(accordion).length).toBe(2);
  });
});