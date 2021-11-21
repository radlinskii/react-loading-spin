import { render, screen } from '@testing-library/react'
import LoadingSpin, { DEFAULT_VALUES } from '../src'

describe('LoadingSpin', () => {
    test('should render with default props', () => {
        //when
        render(<LoadingSpin />)
        const element = screen.getByTestId('loading-spin')
        const styleElement = screen.getByTestId('loading-spin-style')

        //then
        expect(element).toBeInTheDocument()
        expect(element).toBeVisible()
        expect(element).toBeEmptyDOMElement()
        expect(element).toHaveStyle({
            height: DEFAULT_VALUES.size,
            width: DEFAULT_VALUES.size,
            borderWidth: DEFAULT_VALUES.width,
            animationDuration: DEFAULT_VALUES.animationDuration,
            animationTimingFunction: DEFAULT_VALUES.animationTimingFunction,
            animationDirection: DEFAULT_VALUES.animationDirection,
            borderColor: DEFAULT_VALUES.secondaryColor,
            borderLeftColor: DEFAULT_VALUES.primaryColor,
            borderTopColor: DEFAULT_VALUES.primaryColor,
        })

        expect(styleElement).toHaveTextContent(
            `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(${
                DEFAULT_VALUES.numberOfRotationsInAnimation * 360
            }deg); } }`
        )
    })

    test('should render with passed props set in style attribute', () => {
        // when
        render(
            <LoadingSpin
                animationDirection="alternate"
                animationDuration="10s"
                animationTimingFunction="linear"
                numberOfRotationsInAnimation={3}
                primaryColor="rgb(244,11,21)"
                secondaryColor="#aaa"
                size="40px"
                width="10px"
            />
        )
        const element = screen.getByTestId('loading-spin')
        const styleElement = screen.getByTestId('loading-spin-style')

        //then
        expect(element).toBeInTheDocument()
        expect(element).toBeVisible()
        expect(element).toBeEmptyDOMElement()
        expect(element).toHaveStyle({
            height: '40px',
            width: '40px',
            borderWidth: '10px',
            animationDuration: '10s',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate',
            borderColor: '#aaa',
            borderLeftColor: 'rgb(244,11,21)',
            borderTopColor: 'rgb(244,11,21)',
        })

        expect(styleElement).toHaveTextContent(
            `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(1080deg); } }`
        )
    })
})
