# angular-hide-if-empty
An angular directive that detects if the node has any child nodes and will hide the node if empty

## Usage

Watches the child node list. Anytime angular runs the digest cycle the directive will check / count it's child nodes and decide if it should be visible or not.

Typical usage:

```html
<div hide-if-empty>Any elem that might be empty... or might not</div>

```

Can opt to pay attention to comments as well:

```html
<div hide-if-empty="include comments">Might be empty, might have a comment node</div>
<div hide-if-empty="include comments"><!-- Yup, has a comment node. --></div>
```

That's it!

## Why not just use the CSS :empty pseudo selector?

Something like this might be all you need:

```css
.hide-if-empty:empty {
  display: none !important;
}

```

There is a good [CSS tricks](https://css-tricks.com/almanac/selectors/e/empty/) article discussing the quirks of the `:empty` selector.

However, this directive is for situations where you need to programmatically control the visibility of a node.  Note that this could also be done with `ng-class="{'some-class' : someCheck}"` or `ng-show="someCheck"`.  There are a number of ways to solve the problem.  This directive handles one show/hide case requiring DOM node checking.
