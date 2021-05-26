import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'

const ColoredText = styled.div<{ state: number }>`
  ${tw`font-bold`}
  ${({ state }) =>
    state === 0
      ? tw`dark:text-green-600`
      : state === 1
      ? tw`dark:text-red-700`
      : tw`dark:text-blue-600`}
`
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="dark">
      <button onClick={() => setCount(n => n + 1)}>increment</button>
      <ColoredText state={count % 3}>{count}</ColoredText>
    </div>
  )
}

export default App
