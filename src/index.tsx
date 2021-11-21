import type { ReactElement } from 'react'
import type * as CSS from 'csstype'

export type LoadingSpinProps = {
    size?: CSS.Property.Width & CSS.Property.Height
    borderWidth?: CSS.Property.BorderWidth
    secondaryColor?: CSS.Property.Color
    primaryColor?: CSS.Property.Color
    animationDuration?: CSS.Property.AnimationDuration
    animationTimingFunction?: CSS.Property.AnimationTimingFunction
    animationDirection?: CSS.Property.AnimationDirection
    numberOfRotationsInAnimation?: number
}

export const DEFAULT_VALUES = {
    size: '60px',
    borderWidth: '6px',
    secondaryColor: '#cccccc',
    primaryColor: '#1ecd96',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    animationDirection: 'normal',
    numberOfRotationsInAnimation: 2,
}

function LoadingSpin(props: LoadingSpinProps): ReactElement {
    const {
        size = DEFAULT_VALUES.size,
        borderWidth = DEFAULT_VALUES.borderWidth,
        secondaryColor = DEFAULT_VALUES.secondaryColor,
        primaryColor = DEFAULT_VALUES.primaryColor,
        animationDuration = DEFAULT_VALUES.animationDuration,
        animationTimingFunction = DEFAULT_VALUES.animationTimingFunction,
        animationDirection = DEFAULT_VALUES.animationDirection,
        numberOfRotationsInAnimation = DEFAULT_VALUES.numberOfRotationsInAnimation,
    } = props

    return (
        <>
            <style data-testid="loading-spin-style">
                {`
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(${numberOfRotationsInAnimation * 360}deg);
                    }
                }
              `}
            </style>
            <div
                data-testid="loading-spin"
                style={{
                    display: 'inline-block',
                    borderStyle: 'solid',
                    borderRadius: '50%',
                    animationIterationCount: 'infinite',
                    animationName: 'spin',

                    height: size,
                    width: size,
                    borderWidth: borderWidth,
                    animationTimingFunction: animationTimingFunction,
                    animationDirection: animationDirection,
                    animationDuration: animationDuration,
                    borderColor: secondaryColor,
                    borderLeftColor: primaryColor,
                    borderTopColor: primaryColor,
                }}
            ></div>
        </>
    )
}

export default LoadingSpin
