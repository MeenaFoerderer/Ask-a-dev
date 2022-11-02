import Head from 'next/head'
import List from '../components/List/List'
import styled from 'styled-components'

function LandingPage() {
  return (
    <>
      <Head>
        <title>Ask away!</title>
      </Head>
      <Header>
        <h1>Ask a dev!</h1>
        <p>
          Feel free to browse or ask any question while your identity stays
          stealthy and hidden.
        </p>
        <aside className="ninja">{"Like a freakin' ninja!"}</aside>
      </Header>
      <List />
    </>
  )
}

export default LandingPage

const Header = styled.section`
  text-align: center;
  padding: 2em;
  color: blue;

  & p,
  aside {
    color: black;
  }
`
