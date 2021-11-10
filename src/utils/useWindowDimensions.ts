import { useState, useEffect } from 'react'

type WindowDimensions = {
    width: number,
    height: number
}

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

/**
 * Observes windows dimensions.
 * @returns object with current width and hight
 * @author [QoP](https://stackoverflow.com/a/36862446/5102726)
 */
export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
