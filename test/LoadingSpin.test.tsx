import { render, screen } from '@testing-library/react'
import LoadingSpin, { DEFAULT_VALUES } from '../src'

describe('LoadingSpin', () => {
    test.skip('should render with default props', () => {
        //when
        render(<LoadingSpin />)
        const element = screen.getByTestId('loading-spin')

        //then
        expect(element).toBeInTheDocument()
        expect(element).toBeVisible()
        expect(element).toBeEmptyDOMElement()
        expect(element).toHaveStyle({
            height: DEFAULT_VALUES.size,
            width: DEFAULT_VALUES.size,
            borderWidth: DEFAULT_VALUES.borderWidth,
            // animationDurationMS: DEFAULT_VALUES.animationDurationMS,
            animationTimingFunction: DEFAULT_VALUES.animationTimingFunction,
            animationDirection: DEFAULT_VALUES.animationDirection,
            borderColor: DEFAULT_VALUES.secondaryColor,
            borderLeftColor: DEFAULT_VALUES.primaryColor,
            borderTopColor: DEFAULT_VALUES.primaryColor,
        })
    })

    test.skip('should render with passed props set in style attribute', () => {
        // when
        render(
            <LoadingSpin
                animationDirection="alternate"
                animationDurationMS={1000}
                animationTimingFunction="linear"
                borderWidth="10px"
                primaryColor="rgb(244,11,21)"
                secondaryColor="#aaa"
                size="40px"
            />
        )
        const element = screen.getByTestId('loading-spin')

        //then
        expect(element).toBeInTheDocument()
        expect(element).toBeVisible()
        expect(element).toBeEmptyDOMElement()
        expect(element).toHaveStyle({
            height: '40px',
            width: '40px',
            borderWidth: '10px',
            // animationDurationMS: '10s',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate',
            borderColor: '#aaa',
            borderLeftColor: 'rgb(244,11,21)',
            borderTopColor: 'rgb(244,11,21)',
        })
    })
})
