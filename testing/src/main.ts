import { createReactor } from '../../src/reactor/createReactor';

let reactor = createReactor(({ useState }) => {
  const [counter, setCounter] = useState(0)

  console.log('-----------------', counter);

  setTimeout(() => {
    setCounter(new Date().getTime())
  }, 1000)
})

reactor()