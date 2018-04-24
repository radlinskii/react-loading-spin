# react-loading-spin
A simple spinning loading animation react component.


## Preview
![Alt Text](https://imgur.com/UaME3w9.gif)

## Install
```
npm i --save react-loading-spin
```

## Import
```
...
import LoadingSpin from 'react-loading-spin';
...

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
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
