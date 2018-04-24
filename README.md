# react-loading-spin [![npm version](https://badge.fury.io/js/react-loading-spin.svg)](https://badge.fury.io/js/react-loading-spin) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
A simple spinning loading animation react component.

## Preview
![Alt Text](https://i.imgur.com/n3b1ZOq.gif)

## Install
``` sh
npm i --save react-loading-spin
```

## Import
``` javascript
import LoadingSpin from 'react-loading-spin';
```

# Use
``` javascript
const ExampleOfUsingDefaultLoadingSpin = () => (
    <div className = 'ExampleOfUsage'>
        <LoadingSpin/>
    </div>
);
```
![Alt Text](https://i.imgur.com/tc13kFO.gif)

### Manage Properties
**size** | **primaryColor** | **secondaryColor** | **width** | **duration** | **timingFunction** | **direction**

``` javascript
const ExampleOfUsingLoadingSpinWithProps = () => (
    <div className = 'ExampleOfUsage'>
        <LoadingSpin
            duration = '2s'
            width = '15px'
            timingFunction = 'ease-in-out'
            direction = 'alternate'
            size = '200px'
            primaryColor = 'yellow'
            secondaryColor = '#333'
        />
    </div>
);
```
![Alt Text](https://i.imgur.com/R6MKodl.gif)

### Built With
* [Webpack](https://webpack.js.org/)
* [Pleasure](https://en.wikipedia.org/wiki/Pleasure)

### License
MIT - see the [LICENSE](LICENSE) file for details.
