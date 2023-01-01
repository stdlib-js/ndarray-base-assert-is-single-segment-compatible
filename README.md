<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isSingleSegmentCompatible

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine if an array is compatible with a single memory segment.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

An array is compatible with a single memory segment when an array view spans **only** the elements belonging to the array. When an array is compatible with a single memory segment, array data can be stored as a single block of memory.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
isSingleSegmentCompatible = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-single-segment-compatible@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isSingleSegmentCompatible = require( 'path/to/vendor/umd/ndarray-base-assert-is-single-segment-compatible/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-single-segment-compatible@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isSingleSegmentCompatible;
})();
</script>
```

#### isSingleSegmentCompatible( shape, strides, offset )

Returns a `boolean` indicating if an array is compatible with a single memory segment.

```javascript
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var offset = 25;

var bool = isSingleSegmentCompatible( shape, strides, offset );
// returns true

shape = [ 10 ];
strides = [ 3 ]; // every third memory element
offset = 0;

bool = isSingleSegmentCompatible( shape, strides, offset );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-single-segment-compatible@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var strides;
var offset;
var shape;
var bool;
var i;
var j;

shape = [ 0, 0, 0 ];

for ( i = 0; i < 100; i++ ) {
    // Generate a random array shape:
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );

    // Generate strides:
    if ( randu() < 0.5 ) {
        strides = shape2strides( shape, 'row-major' );
    } else {
        strides = shape2strides( shape, 'column-major' );
    }
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;

    strides[ 0 ] *= discreteUniform( 1, 4 ); // if scaled by 1, then single segment

    // Compute the index offset:
    offset = strides2offset( shape, strides );

    // Determine if the array is compatible with a single memory segment:
    bool = isSingleSegmentCompatible( shape, strides, offset );
    console.log( 'Shape: %s. Strides: %s. Offset: %d. Single segment compatible: %s.', shape.join( 'x' ), strides.join( ',' ), offset, bool );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-assert-is-single-segment-compatible.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-assert-is-single-segment-compatible

[test-image]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-assert-is-single-segment-compatible/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-assert-is-single-segment-compatible?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-assert-is-single-segment-compatible.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-assert-is-single-segment-compatible/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/main/LICENSE

</section>

<!-- /.links -->
