import { useEffect, useRef } from 'react'
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
}

export const DEFAULT_VALUES = {
    size: '60px',
    borderWidth: '6px',
    secondaryColor: '#cccccc',
    primaryColor: '#1ecd96',
    animationDuration: '1.4s',
    animationTimingFunction: 'ease-in-out',
    animationDirection: 'normal',
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
    } = props

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.animate(
                [
                    {
                        // from
                        transform: 'rotate(0deg)',
                    },
                    {
                        // to
                        transform: 'rotate(720deg)',
                    },
                ],
                2000
            )
        }
    }, [])

    return (
        <div
            data-testid="loading-spin"
            ref={ref}
            style={{
                display: 'inline-block',
                borderStyle: 'solid',
                borderRadius: '50%',
                animationIterationCount: 'infinite',
                height: size,
                width: size,
                borderWidth: borderWidth,
                animationDuration: animationDuration,
                animationTimingFunction: animationTimingFunction,
                animationDirection: animationDirection,
                borderColor: secondaryColor,
                borderLeftColor: primaryColor,
                borderTopColor: primaryColor,
            }}
        ></div>
    )
}

export default LoadingSpin
