# react-loading-spin [![npm version](https://badge.fury.io/js/react-loading-spin.svg)](https://badge.fury.io/js/react-loading-spin) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
A simple spinning loading animation react component.

## Preview
![Alt Text](https://imgur.com/UaME3w9.gif) ![Alt Text](https://i.imgur.com/R6MKodl.gif) ![Alt Text](https://i.imgur.com/n3b1ZOq.gif)

## Install
```
npm i --save react-loading-spin
```

## Import
```
import LoadingSpin from 'react-loading-spin';
```

# Use
```
const ExampleOfUsingLoadingSpinWithProps = () => (
    <div className="ExampleOfUsage">
        <p>Patience you must have my Young Padawan</p>
        <LoadingSpin
            duration='2s'
            width='15px'
            timingFunction='ease-in-out'
            direction='alternate'
            size='300px'
            primaryColor='yellow'
            secondaryColor='#333'
        />
    </div>
);
```

## Manage Properties
**size** | **primaryColor** | **secondaryColor** | **width** | **duration** | **timingFunction** | **direction**

### Built With
* [Webpack](https://webpack.js.org/)
* [Pleasure](https://en.wikipedia.org/wiki/Pleasure)

### License
MIT - see the [LICENSE](LICENSE) file for details.
