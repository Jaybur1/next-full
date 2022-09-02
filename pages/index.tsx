import type { NextPage } from 'next'

import { Example } from '@src/components/Example'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Example />
    </>
  )
}

export default Home
