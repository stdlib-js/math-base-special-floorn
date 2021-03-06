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

# floorn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest multiple of 10^n toward negative infinity.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-floorn
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var floorn = require( '@stdlib/math-base-special-floorn' );
```

#### floorn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward negative infinity.

```javascript
// Round a value to 4 decimal places:
var v = floorn( 3.141592653589793, -4 );
// returns 3.1415

// If n = 0, `floorn` behaves like `floor`:
v = floorn( 3.141592653589793, 0 );
// returns 3.0

// Round a value to the nearest thousand:
v = floorn( 12368.0, 3 );
// returns 12000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round to -0.3:
    var v = floorn( x, -16 );
    // returns -0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var floorn = require( '@stdlib/math-base-special-floorn' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = floorn( randu()*5.0, 0 );
    v = floorn( x, -n );
    console.log( 'x: %d. Number of decimals: %d. Rounded: %d.', x, n, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceiln`][@stdlib/math/base/special/ceiln]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floor`][@stdlib/math/base/special/floor]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorb`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-floorn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-floorn

[test-image]: https://github.com/stdlib-js/math-base-special-floorn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-floorn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-floorn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-floorn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-floorn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-floorn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-floorn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-floorn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-floorn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-floorn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-floorn/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceiln]: https://github.com/stdlib-js/math-base-special-ceiln

[@stdlib/math/base/special/floor]: https://github.com/stdlib-js/math-base-special-floor

[@stdlib/math/base/special/floorb]: https://github.com/stdlib-js/math-base-special-floorb

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

<!-- </related-links> -->

</section>

<!-- /.links -->
