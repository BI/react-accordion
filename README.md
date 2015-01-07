React Accordion
===============

Accordion-style list component made in React. Allows for signle-level list items under each accordion tab.

Usage
-----

Pass a heirarchical FIll out the Accordion's child components. Example:

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
    </Accordion>

Components
----------
### Accordion ###

Main component. Makes multiple Sections.

**Class Name:** accordion

### Section ###

Contains a single heading and multiple contents. Represents one accordion tab.

If you put more than one heading, only the last will be used.

**Class Name:** accordion-section

### Heading ###

Represents the accordion heading, the thing you click on to expand/contract the accordion.

**Class Name:** accordion-heading

### Content ###

The main content. Each elements represents one item under a tab. You can nest content tags in each other.

Currently just displays, nothing happens when you click on it yet.

**Class Name:** accordion-content

To Do
-----

* Better (i.e. any) error handling
* Content does something when you click on it
* Fix clicking buttons in the Heading closing the accordion tab
* Allow buttons in tags to do something when you click on them