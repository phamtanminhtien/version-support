# version-support

The **VersionSupport** library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:

```shell
npm i version-support
```

Using yarn:

```shell
yarn add npm i version-support
```

## Usage

```js
import Version, {
  isEqualTo,
  isGreaterThan,
  isGreaterThanOrEqualTo,
  isLessThan,
  isLessThanOrEqualTo,
} from 'version-support';

// Use functions

console.log(isEqualTo('1.0.0', '1.0.0')); // true

console.log(isEqualTo('1.0.0', '1.0.1')); // false

console.log(isGreaterThan('1.0.1', '1.0.0')); // true

console.log(isGreaterThan('1.0.0', '1.0.1')); // false

console.log(isGreaterThanOrEqualTo('1.0.0', '1.0.0')); // true

console.log(isGreaterThanOrEqualTo('1.0.1', '1.0.0')); // true

console.log(isGreaterThanOrEqualTo('1.0.0', '1.0.1')); // false

console.log(isLessThan('1.0.0', '1.0.1')); // true

console.log(isLessThan('1.0.1', '1.0.0')); // false

console.log(isLessThanOrEqualTo('1.0.0', '1.0.0')); // true

console.log(isLessThanOrEqualTo('1.0.0', '1.0.1')); // true

console.log(isLessThanOrEqualTo('1.0.1', '1.0.0')); // false

// Use Version class

console.log(new Version('1.0.0').isEqualTo('1.0.0')); // true

console.log(new Version('1.0.0').isGreaterThan('1.0.0')); // false

console.log(new Version('1.0.0').isLessThan('1.0.0')); // false

console.log(new Version('1.0.0').isGreaterThanOrEqualTo('1.0.0')); // true

console.log(new Version('1.0.0').isLessThanOrEqualTo('1.0.0')); // true
```
