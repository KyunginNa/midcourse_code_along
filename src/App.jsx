import React from 'react'
<<<<<<< HEAD
import Title from './components/Title'
=======
import Header from './components/Title'
>>>>>>> e012c7f... Initial commit
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Container>
<<<<<<< HEAD
      <section data-cy="title">
        <Title />
      </section>
      <section data-cy="main">
=======
      <section name="title">
        <Header />
      </section>
      <section name="main">
>>>>>>> e012c7f... Initial commit
        <GHSearch/>
      </section>
    </Container>
  )
}

export default App
