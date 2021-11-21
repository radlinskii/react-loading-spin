# react-loading-spin [![CI](https://github.com/radlinskii/react-loading-spin/actions/workflows/CI.yml/badge.svg)](https://github.com/radlinskii/react-loading-spin/actions/workflows/CI.yml) [![npm version](https://badge.fury.io/js/react-loading-spin.svg)](https://badge.fury.io/js/react-loading-spin) [![npm](https://img.shields.io/npm/dt/react-loading-spin.svg)](https://www.npmjs.com/package/react-loading-spin) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A simple reusable animated spinner react component.

## Preview

![Alt Text](https://i.imgur.com/n3b1ZOq.gif)

## Install

```sh
npm i --save react-loading-spin
```

## Import

```javascript
import LoadingSpin from "react-loading-spin";
```

## Use

```javascript
const ExampleOfUsingDefaultLoadingSpin = () => (
    <div className={"ExampleOfUsage"}>
        <LoadingSpin />
    </div>
);
```

![Alt Text](https://i.imgur.com/tc13kFO.gif)

### Manage Properties

| Property name  | type | Required | Default value | Comment |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **size** | `string` | `false` | '60px' | CSS length value for `height` and `width` of the spinner |
| **width** | `string` | `false` | '6px' | CSS length value for width the spinner |
| **primaryColor** | `string` | `false` | '#1ecd96' | CSS color value for one half of the loader |
| **secondaryColor** | `string` | `false` | '#cccccc' | CSS color value for second half of the loader |
| **animationDuration** | `string` | `false` | '2s' | CSS `animation-duration`property value |
| **animationTimingFunction** | `string` | `false` | 'ease-in-out' | CSS `animation-timing-function` property value |
| **animationDirection** | `string` | `false` | 'normal' | CSS `animation-direction` property value |
| **numberOfRotationsInAnimation** | `number` | `false` | 2 | number of spins during single animation |

```javascript
const ExampleOfUsingLoadingSpinWithProps = () => (
    <div className={"ExampleOfUsage"}>
        <LoadingSpin
            duration="2s"
            width="15px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="200px"
            primaryColor="yellow"
            secondaryColor="#333"
            numberOfRotationsInAnimation={2}
        />
    </div>
);
```

![Alt Text](https://i.imgur.com/R6MKodl.gif)

### Built With

-   [Webpack](https://webpack.js.org/)
-   [Pleasure](https://en.wikipedia.org/wiki/Pleasure)

### License

MIT - see the [LICENSE](LICENSE) file for details.
