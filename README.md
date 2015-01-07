React Accordion
===============

Accordion-style list component made in React. Allows for signle-level list items under each accordion tab.

Usage
-----

Fill out the Accordion's child components. Example:

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
    </Accordion>

Components
----------
### Accordion ###

Main component. Makes multiple Sections.

**Class Name:** accordion

### Section ###

Contains a single heading and a signle content. Represents one accordion section, expandable by clicking on the heading.

**Class Name:** accordion-section

### Heading ###

Represents the accordion heading, the thing you click on to expand the accordion section.

**Class Name:** accordion-heading

### Content ###

The main content under a section.

**Class Name:** accordion-content

To Do
-----

* Better (i.e. any) error handling
* Content does something when you click on it
* Fix clicking buttons in the Heading closing the accordion section
* Allow buttons in tags to do something when you click on them