import { createReactor } from '../../src/reactor/createReactor';

let reactor = createReactor(({ useState, useEffect, useRef, useMemo }) => {
  console.log('update start')

  const [counter, setCounter] = useState(0)
  const counterRef = useRef(counter)
  const setCounterReg = useRef(setCounter)

  useEffect(() => {
    counterRef.current = counter
  }, [counter])

  useEffect(() => {
    console.log('effect started')
    setInterval(() => {
      setCounterReg.current(counterRef.current + 1)
      console.log('update interval')
    }, 1000)
  }, [])

  const calculatedCounter = useMemo(() => {
    return counter * 10
  }, [counter % 2 === 0])

  console.log('counter:', counter)
  console.log('calculatedCounter:', calculatedCounter)
  console.log('update finished')
})

reactor()