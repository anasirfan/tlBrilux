import { useCallback, useState, useEffect } from 'react'

function useElementSize() {
  const [ref, setRef] = useState(null)
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    })
  }, [ref?.offsetHeight, ref?.offsetWidth])

  useEffect(() => {
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [handleSize])

  useEffect(() => {
    handleSize()
  }, [ref?.offsetHeight, ref?.offsetWidth, handleSize])

  return [setRef, size]
}

export default useElementSize
