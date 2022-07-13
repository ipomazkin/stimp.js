import { createReactor } from '../../src/reactor/createReactor';

let reactor = createReactor(({ useState, useEffect }) => {
  console.log('update start')

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('effect started')
    const i = setInterval(() => {
      setCounter(new Date().getTime())
      console.log('update interval')
    }, 1000)
    return () => {
      clearInterval(i)
      console.log('effect removed')
    }
  }, [counter])

  console.log('counter:', counter)
  console.log('update finished')
})

reactor()