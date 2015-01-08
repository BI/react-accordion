/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var RxAccordion = __webpack_require__(1);

	var Accordion = RxAccordion.Accordion;
	var Section = RxAccordion.Section;
	var Heading = RxAccordion.Heading;
	var Content = RxAccordion.Content;

	React.render(
	  React.createElement(Accordion, null, 
	    React.createElement(Section, null, 
	      React.createElement(Heading, null, "Accordion Tab 1"), 
	      React.createElement(Content, null, 
	        React.createElement("p", null, "Some text Content in a paragraph"), 
	        React.createElement("button", null, "Button 1")
	      ), 
	      React.createElement(Content, null, 
	        React.createElement("p", null, "Some more text Content in a paragraph"), 
	        React.createElement("button", null, "Button 2")
	      ), 
	      React.createElement(Content, null, 
	        React.createElement("p", null, "Even more text Content in a paragraph"), 
	        React.createElement("button", null, "Button 3")
	      )
	    ), 
	    React.createElement(Section, null, 
	      React.createElement(Heading, null, "Accordion Tab 2 ", React.createElement("button", null, "Activate Foo"), React.createElement("button", null, "Activate Bar")), 
	      React.createElement(Content, null, 
	        "Just some text content for Accordion Tab 2. Nothing to see here."
	      ), 
	      React.createElement(Content, null, 
	        "Just some more text content for Accordion Tab 2. Nothing to see here."
	      ), 
	      React.createElement(Content, null, 
	        "This is also text content for Accordion Tab 2. Nothing to see here.", 
	        React.createElement(Content, null, 
	          "This is Recursive text content (content inside text content)!"
	        )
	      )
	    )
	  ),
	  document.getElementById('content')
	);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);

	var Accordion = React.createClass({displayName: "Accordion",
	  getInitialState: function() {
	    return { expanded: null };
	  },
	  toggleTabs: function(expandedTabId) {
	    this.setState({ expanded: expandedTabId });
	  },
	  render: function() {
	    var clickHandler = this.toggleTabs;
	    var sections = this.props.children.map(function (section, id) {
	      return (
	        React.createElement(Section, {clickHandler: clickHandler, id: id, expanded: this.state.expanded == id}, 
	        	section.props.children
	        )
	      );
	    }, this);
	    
	    return (
	      React.createElement("div", {className: "accordion"}, 
	      	sections
	      )
	    );
	  }
	});

	var Section = React.createClass({displayName: "Section",
	  render: function() {
	  	var headerChildren;

	  	//[].find only works in Firefox, not Chrome
	  	this.props.children.forEach(function (element) {
	  		if(element.type.displayName == "Heading") {
	  			headerChildren = element.props.children;
	  		}
	  	});

	  	var content = this.props.children.filter(function (element) {
	  		return element.type.displayName == "Content";
	  	});

	    return (
	      React.createElement("div", {className: "accordion-section"}, 
	        React.createElement(Heading, {clickHandler: this.props.clickHandler, id: this.props.id, expanded: this.props.expanded}, headerChildren), 
	         this.props.expanded ? content : null
	      )
	    )
	  
	}
	});

	var Heading = React.createClass({displayName: "Heading",
	  tabClicked: function () {
	    var newState = null;
	    if(!this.props.expanded) {
	      newState = this.props.id
	    }

	    this.props.clickHandler(newState)
	  },
	  render: function() {
	    return (
	      React.createElement("div", {className: "accordion-heading", onClick: this.tabClicked}, this.props.children)
	    )
	  }
	});

	var Content = React.createClass({displayName: "Content",
	  render: function() {
	    return (
	      React.createElement("div", {className: "accordion-content"}, this.props.children)
	    )
	  }
	});

	module.exports.Accordion = Accordion;
	module.exports.Section = Section;
	module.exports.Heading = Heading;
	module.exports.Content = Content;

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!C:\\Users\\sns12_000\\Desktop\\react-accordion\\node_modules\\css-loader\\index.js!C:\\Users\\sns12_000\\Desktop\\react-accordion\\webpack-files\\accordion-styles.css", function() {
			var newContent = require("!!C:\\Users\\sns12_000\\Desktop\\react-accordion\\node_modules\\css-loader\\index.js!C:\\Users\\sns12_000\\Desktop\\react-accordion\\webpack-files\\accordion-styles.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, ".accordion {\r\n\tborder: 1px black solid;\r\n\tborder-radius: 5px;\r\n\tpadding: 5px;\r\n\twidth: 600px;\r\n}\r\n\r\n.accordion-heading {\r\n\tborder: 1px black solid;\r\n\tborder-radius: 10px;\r\n\tpadding: 1px 5px;\r\n}\r\n\r\n.accordion-content {\r\n\tborder: 1px black solid;\r\n\tborder-radius: 10px;\r\n\tpadding: 5px;\r\n}", ""]);

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }

/******/ })