# **CSS Guide**

This is a guide to learn the basics of CSS and is separated by the following structure:

1. **What's CSS?** [#](#1-whats-css?)
2. **Syntax** [#](#2-syntax)
3. **Selectors** [#](#3-selectors)
4. **Shorthand Properties** [#](#4-Shorthand-Properties)
5. **Specificity** [#](#5-Specificity)
6. **Inheritance** [#](#6-Inheritance)
7. **Functions** [#](#7-Functions)
8. **Units** [#](#8-Units)
9. **Some properties** [#](#9-Some-properties)
10. **Responsiveness** [#](#10-Responsiveness)
11. **Preprocessors** [#](#11-Preprocessors)
12. **Usefull links** [#](#12-Usefull-links)

## **1.  What's CSS?**

CSS (Cascading style sheets) is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language. The separation of HTML from CSS makes it easier to maintain sites, share style sheets across pages, and tailor pages to different environments. This is referred to as the separation of structure (or content) from presentation.

[Back to top](#css-guide)
 
## **2. Syntax**

A CSS rule follows its own syntax that defines how style is applied to one or more HTML markup elements of a page. A set of CSS rules form a style sheet. A CSS rule, in its most elementary form, consists of three parts: a selector, a property, and a value:

```
selector {
    property: value;
}
```

- **selector**: Is an element of the HTML markup identified by its name (for example: `<p>`, `<h1>`, `<form>`), by the name of a class applied to the HTML markup element (eg .top, .main, .menu), by the name of an identifier ID applied to the HTML markup element (for example: #total, #navbar, #footer) or any other CSS identifier of elements or HTML markup segments, generically referred to as CSS selectors;

- **property**: Is the property of the HTML element to which the stylization defined in the value (for example: font size, text color, element height) will be applied;

- **value**: Is the specific characteristic to be assumed by the property (for example: arial type letter, blue color, green background, height equal to 300px);

- **property: value**: It is called declaration.

### **2.1 Including css on the page** (*[details](https://www.w3schools.com/css/css_howto.asp)*)

There are three main ways in which we can include CSS in our web pages:

- **External Style Sheet** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_external)*) - An external file linked to your HTML document;

- **Internal style sheet** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_internal)*) - A set of CSS rules included within your HTML document (inside `<head>` tag);

- **Inline style** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_inline)*) - CSS rules applied directly within an HTML tag.

[Back to top](#css-guide)

## **3. Selectors** 
*[Reference](https://www.w3schools.com/cssref/css_selectors.asp)*

In CSS, selectors are used to target the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, allowing for fine grained precision when selecting elements to style.

Selectors can be divided into the following categories.

### **3.1 Simple selectors**

- **.class** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_class)*) - The .class selector selects elements with a specific class attribute;

- **#id** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_id)*) - The #id selector styles the element with the specified id;

- **\*** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_all)*) - The * selector selects all elements;

- **element** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_element)*) - The element selector selects all elements with the specified element name;

- **selector, selector** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_element_comma)*) - To style several elements with the same style, separate each element name with a comma.

[Back to top](#css-guide)

### **3.2 Attribute selectors**

- **[attribute]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_attribute)*) - The [attribute] selector is used to select elements with the specified attribute;

- **[attribute=value]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_attribute_value)*) - The [attribute=value] selector is used to select elements with the specified attribute and value;

- **[attribute~=value]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_attribute_value_contains)*) - The [attribute~=value] selector is used to select elements with an attribute value containing a specified word;

- **[attribute|=value]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_attribute_value_lang)*) - The [attribute|=value] selector is used to select elements with the specified attribute starting with the specified value;

- **[attribute^=value]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_attr_begin)*) - The [attribute^=value] selector matches every element whose attribute value begins with a specified value;

- **[attribute\$=value]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_attr_end)*) - The [attribute$=value] selector matches every element whose attribute value ends with a specified value;

- **[attribute\*=value]** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_attr_contain)*) - The [attribute*=value] selector matches every element whose attribute value containing a specified value.

[Back to top](#css-guide)

### **3.3 Pseudo-Classes** (*[details](https://www.w3schools.com/css/css_pseudo_classes.asp)*)

- **:active** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_active)*) - The :active selector is used to select and style the active link;

- **:focus** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_focus)*) - The :focus selector is used to select the element that has focus;

- **:hover** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_hover)*) - The :hover selector is used to select elements when you mouse over them;

- **:visited** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_visited)*) - The :visited selector is used to select visited links;

- **:not(selector)** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_not)*) - The :not(selector) selector matches every element that is NOT the specified element/selector;

- **:first-child** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_firstchild)*) - The :first-child selector is used to select the specified selector, only if it is the first child of its parent.

[Back to top](#css-guide)

### **3.4 Pseudo-Elements** (*[details](https://www.w3schools.com/css/css_pseudo_elements.asp)*)

- **::after** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_after)*) - The ::after selector inserts something after the content of each selected element(s);

- **::before** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_before)*) - The ::before selector inserts something before the content of each selected element(s);

- **::first-letter** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_firstletter)*) - The ::first-letter selector is used to add a style to the first letter of the specified selector;

- **::first-line** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_firstline)*) - The ::first-line selector is used to add a style to the first line of the specified selector;

- **::placeholder** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_placeholder)*) - The ::placeholder selector selects form elements with placeholder text;

- **::selection** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_selection)*) - The ::selection selector matches the portion of an element that is selected by a user.

[Back to top](#css-guide)

### **3.5 Combinators** (*[details](https://www.w3schools.com/css/css_combinators.asp)*)

- **element element** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_element_element)*) - The element element selector is used to select elements inside elements;

- **element>element** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_element_gt)*) - The element>element selector is used to select elements with a specific parent;

- **element+element** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_element_pluss)*) - The element+element selector is used to select elements that is placed immediately after (not inside) the first specified element;

- **element1~element2** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_gen_sibling)*) - The element1~element2 selector matches occurrences of element2 that are preceded by element1.

[Back to top](#css-guide)

## **4. Shorthand properties**
*[Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)*

Shorthand properties are CSS properties that let you set the values of multiple other CSS properties simultaneously. Using a shorthand property, you can write more concise (and often more readable) style sheets, saving time and energy.

The CSS specification defines shorthand properties to group the definition of common properties acting on the same theme. For instance, the CSS background property is a shorthand property that's able to define the values of background-color, background-image, background-repeat, and background-position. Similarly, the most common font-related properties can be defined using the shorthand font, and the different margins around a box can be defined using the margin shorthand.

List of shorthand properties:

- **margin**;
- **padding**;
- **background**;
- **font**;
- **outline**;
- **border**.

[Back to top](#css-guide)

## **5. Specificity**
*[Reference](https://www.w3schools.com/css/css_specificity.asp)*

Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.

Every selector has its place in the specificity hierarchy. There are four categories which define the specificity level of a selector:

- Inline styles - An inline style is attached directly to the element to be styled. Example: `<h1 style="color: #ffffff;">` - 1000 points;

- IDs - An ID is a unique identifier for the page elements, such as `#navbar` - 100 points;

- Classes, attributes and pseudo-classes - This category includes .classes, [attributes] and pseudo-classes such as `:hover`, `:focus`, etc - 10 points;

- Elements and pseudo-elements - This category includes element names and pseudo-elements, such as `h1`, `div`, `:before` and `:after` - 1 point.

A selector's specificity is calculated as follows:

Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.

Note: Selectors inside the negation pseudo-class are counted like any other, but the negation itself does not count as a pseudo-class.

Example:

A:
```
h1 {
    color: red;
}
```
B: 

```
#content h1 {
    color: blue;
}
```
C:
```
<div id="content">
    <h1 style="color: #ffffff">
        Heading
    </h1>
</div>
```

- The specificity of A is 1 (one element);
- The specificity of B is 101 (one ID reference and one element);
- The specificity of C is 1000 (inline styling).

[Back to top](#css-guide)

## **6. Inheritance** 
*[Reference](https://developer.mozilla.org/pt-BR/docs/Aprender/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance)*

CSS inheritance is the last piece we need to investigate to get all the information and understand what style is applied to an element. The idea is that some property values applied to an element will be inherited by that element's children, and some won't.

For example, it makes sense for font-family and color to be inherited, as that makes it easy for you to set a site-wide base font by applying a font-family to the `<html>` element, you can then override the fonts on individual elements where needed. It would be really annoying to have to set the base font separately on every element.
As another example, it makes sense for margin, padding, border, and background-image to NOT be inherited. Imagine the styling/layout mess that would occur if you set these properties on a container element and had them inherited by every single child element, and then had to unset them all on each individual element!

List of some inherited properties:

- **background**;
- **color**;
- **cursor**;
- **font**;
- **:active**;
- **:focus**;
- **:visited**;
- **:hover**;
- **:first-child**;
- **::first-letter**;
- **::first-line**;
- **letter-spacing**;
- **line-height**;
- **opacity**;
- **text-align**;
- **text-indent**;
- **text-transform**;
- **text-size-adjust**;
- **visibility**;
- **white-space**;
- **word-spacing**.

[Back to top](#css-guide)

## **7. Functions** 
*[Reference](https://www.w3schools.com/cssref/css_functions.asp)*

CSS functions are used as a value for various CSS properties.

[Back to top](#css-guide)

- **calc()** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_func_calc)*) - The calc() function performs a calculation to be used as the property value;

- **rgb()** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_func_rgb)*) - The rgb() function define colors using the Red-green-blue (RGB) model;

- **var()** (*[example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_func_var)*) - The var() function is used to insert the value of a custom property instead of any part of a value of another property.

## **8. Units** 
*[Reference](https://www.w3schools.com/css/css_units.asp)*

CSS offers a number of different units for expressing length. Some have their history in typography, such as point (pt) and pica (pc), others are known from everyday use, such as centimeter (cm) and inch (in). And there is also a "magic" unit that was invented specifically for CSS: the px.

There are two types of length units: absolute and relative.

### **8.1 Absolute**

&nbsp; &nbsp; The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

- **cm** - Centimeters;
- **mm** - Millimeters;
- **in** - inches (1in = 96px = 2.54cm);
- **px** - pixels (1px = 1/96th of 1in);
- **pt** - points (1pt = 1/72 of 1in);
- **pc** - picas (1pc = 12 pt).

### **8.2 Relative**

&nbsp; &nbsp; Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.

- **em** - 1em is the same as the font-size of the current element. The default base font-size given to web pages by web browsers before CSS styling is applied is 16 pixels, which means the computed value of 1em is 16 pixels for an element by default;
- **rem** - The rem (root em) works in exactly the same way as the em, except that it will always equal the size of the default base font-size. Inherited font sizes will have no effect;
- **vw** - Relative to 1% of the width of the viewport;
- **vh** - Relative to 1% of the height of the viewport;
- **%** - 	Relative to the parent element.

[Back to top](#css-guide)

## **9 Some properties**

### **9.1 Box sizing** (*[details](https://www.w3schools.com/css/css3_box-sizing.asp)*)

&nbsp; &nbsp; The CSS box-sizing property allows us to include the padding and border in an element's total width and height.

[Back to top](#css-guide)

### **9.2 Display** (*[details](https://www.w3schools.com/cssref/pr_class_display.asp)*)

&nbsp; &nbsp; The display property specifies the display behavior (the type of rendering box) of an element.

- **inline** - Displays an element as an inline element (like `<span>`). Any height and width properties will have no effect (default);

- **block** - Displays an element as a block element (like `<p>`). It starts on a new line, and takes up the whole width;

- **inline-block** - Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values;

- **none** - The element is completely removed.

[Back to top](#css-guide)

### **9.3 Positioning** (*[details](https://www.w3schools.com/css/css_positioning.asp)*)

- **top** - Sets the top margin edge for a positioned box;

- **right** - Sets the right margin edge for a positioned box;

- **bottom** - Sets the bottom margin edge for a positioned box;

- **left** - Sets the left margin edge for a positioned box;

#### **9.3.1 Position property**

&nbsp; &nbsp; The position property specifies the type of positioning method used for an element.

- **static** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_static)*) - An element with `position: static;` is always positioned according to the normal flow of the page. It is not affected by the top, bottom, left, and right properties (HTML elements are positioned static by default).

- **relative** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_relative)*) - An element with `position: relative;` is positioned relative to its normal position (It is affected by top, right, bottom, and left properties). Other content will not be adjusted to fit into any gap left by the element;

- **fixed** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_fixed)*) - An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element;

- **absolute** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute)*) - An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (except `static` element);

- **sticky** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_sticky)*) - An element with `position: sticky;` is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed);

- **z-index** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_zindex)*) - The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

[Back to top](#css-guide)

#### **9.4 Float** (*[details](https://www.w3schools.com/css/css_float.asp)*)

&nbsp; &nbsp; The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.

- **none** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_float_none)*) - The element does not float (will be displayed just where it occurs in the text). This is default;

- **left** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_float2)*) - The element floats to the left of its container;

- **right** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_float)*) - The element floats to the right of its container;

- **clear** (*[example](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clear)*) - The clear property specifies what elements can float beside the cleared element and on which side.

[Back to top](#css-guide)

### **9.5 Overflow** (*[details](https://www.w3schools.com/css/css_overflow.asp)*)

&nbsp; &nbsp; The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

- **visible** - The overflow is not clipped. The content renders outside the element's box (default);

- **hidden** - The overflow is clipped, and the rest of the content will be invisible;

- **scroll** - The overflow is clipped, and a scrollbar is added to see the rest of the content;

- **auto** - Similar to scroll, but it adds scrollbars only when necessary.

[Back to top](#css-guide)

### **9.6 Transitions** (*[details](https://www.w3schools.com/css/css3_transitions.asp)*)

&nbsp; &nbsp; CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.

- **transition-delay** - Specifies a delay (in seconds) for the transition effect;

- **transition-duration** - Specifies how many seconds or milliseconds a transition effect takes to complete;

- **transition-property** - Specifies the name of the CSS property the transition effect is for;

- **transition-timing-function** - Specifies the speed curve of the transition effect.

[Back to top](#css-guide)

### **9.6 Animations** (*[details](https://www.w3schools.com/css/css3_animations.asp)*)

&nbsp; &nbsp; An animation lets an element gradually change from one style to another.

- **@keyframes** - Specifies the animation code;
- **animation-delay** - Specifies a delay for the start of an animation;
- **animation-direction** - Specifies whether an animation should be played forwards, backwards or in alternate cycles;
- **animation-duration** - Specifies how long time an animation should take to complete one cycle;
- **animation-fill-mode** - Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both);
- **animation-iteration-count** - Specifies the number of times an animation should be played;
- **animation-name** - Specifies the name of the @keyframes animation;
- **animation-play-state** - Specifies whether the animation is running or paused;
- **animation-timing-function** - Specifies the speed curve of the animation.

[Back to top](#css-guide)


More properties at: https://www.w3schools.com/cssref/default.asp.

## **10. Responsiveness**

### **10.1 Viewport**

&nbsp; &nbsp; The viewport is the user's visible area of a web page, it varies with the device, and will be smaller on a mobile phone than on a computer screen.

To use the viewport you should include the following `<meta>` viewport element on the `head` tag of all your web pages:

```
<meta name="viewport" content="width=device-width initial-scale=1.0">
```

- A `<meta>` viewport element gives the browser instructions on how to control the page's dimensions and scaling;

- The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device);

- The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

### **10.2 Media Queries** (*[details](https://www.w3schools.com/css/css3_mediaqueries.asp)*)

### **10.3 Flexbox** (*[details](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)*)

### **10.4 Grid** (*[details](https://css-tricks.com/snippets/css/complete-guide-grid/)*)

[Back to top](#css-guide)

## **11. Preprocessors and postprocessors**

### **11.1 Preprocessors**

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

Here are a few of the most popular CSS preprocessors:

- https://sass-lang.com/
- http://lesscss.org/
- http://stylus-lang.com/

### **11.2 Postprocessors**

In theory, a post-processor is a tool whose input is a CSS file and whose output is a transformed CSS file. Note that, differently from preprocessors, a post-processor doesn’t involve another language, it’s just plain CSS.

Here are some good examples of post-processing plugins:

- **Autoprefixer**: Automatically includes vendor-prefixes according to the browsers you want to support;

- **PostCSS Assets**: Handles asset paths, cache-busting, image dimensions and base64 image inlining;

- **cssnano**: Minifies your CSS;

- **Font Magician**: Automatically generates @font-faces;

- **postcss-color-palette**: Allows you to use native CSS color names like blue, purple, aqua, yellow and others as aliases for colors from your own palette, replacing each reference with the color you specify;

- **stylint**: Analyzes your code, suggests fixes and improvements and (if you want to), applies some of them;

- **postcss-sprites**: Extracts images from your stylesheets, generates a sprite containing all of them and replaces the original references to make use of the created sprite.

https://postcss.org/

[Back to top](#css-guide)

## **12. Usefull links**

- https://www.maujor.com.
- https://www.w3schools.com/css/default.asp.
- https://css-tricks.com.
- https://developer.mozilla.org/en-US/docs/Learn/CSS.
- https://caniuse.com.

[Back to top](#css-guide)