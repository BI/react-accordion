react-accordion
===============
Accordion-style list component made in React. Allows for grouping data by sections and showing only some sections at a time. For an example, see [this demo](http://yeahbuthats.github.io/react-accordion/).

Usage
-----

First: You need to require the module in your file. Assign the require call result to a variable.

Example: `var react_accordion = require("./accordion.jsx");`

This variable will have everything you need (Accordion, Section, Heading, Content, and the three expandMode constants: ONE\_OR\_NONE, ALWAYS_ONE, MULTIPLE). For the tag names, you can use either a full path to it (`<react_accordion.Accordion>`) or make an alias for the variable like in the example below.

Fill out the Accordion's child components. The accordion tag should have only Section elements as children. The Section tag should have exactly one Heading and one Content as its children. Heading and content can have whatever contents you wish.

Example (see sample.jsx):

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

Components
----------

### Accordion ###

Main component; contains multiple Sections (and only Sections). Has first section expanded by default.

**Class Name:** accordion

#### Optional Properties ####

##### expandMode #####

**Type:** Enum (number)  
**Default:** react\_accordion.ALWAYS\_ONE  
**Example:** `<Accordion expandMode={react_accordion.ONE_OR_NONE}>`

* **react\_accordion.ONE\_OR\_NONE:** Allows up to one section to be expanded at a time. All sections may be closed.
* **react\_accordion.ALWAYS\_ONE:** Allows one section to be expanded. You may not close all expanded sections.
* **react\_accordion.MULTIPLE:** Any number of sections can be expaned or closed.

##### expandedSection #####

**Type:** number  
**Default:** 0  
**Example:** `<Accordion expandedSection={1}>`

The zero-based index of the section to have open as the first section

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

* Content does something when you click on it
* Fix clicking buttons in the Heading closing the accordion tab
* Allow buttons in tags to do something when you click on them

Notes on Webpack
----------------

These are mostly my notes to remember how to use webpack, but you may find them useful

* Make sure you have it installed `npm install webpack -g`
* A `webpack.config.js` file makes running it easy.
* Run `npm install` to install the necessary components (jsx-loader, css-loader, style-loader).
* Run `webpack` in the react_accordion directory. `webpack ./<entry file>.jsx bundle.js` if you didn't add the config flag
* Adding the `--watch` flag automatically rebuilds the bundle on a change.
* `--progress` and `--color` can help the build to look nice, but otherwise doesn't change anything.
* You can run a webpack dev server locally
  * `npm install webpack-dev-server -g` to install it.
  * `webpack-dev-server` to run it. You can include flags, but `--watch` is automatically included.
  * Changes should automatically update the page.
  * go to http://localhost:8080/webpack-dev-server/bundle to look at the webserver page.
