import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GlobalStyle } from '../components/GlobalStyles'

function MyApp({ Component, pageProps }) {
  const { asPath, isReady } = useRouter()
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (isReady) {
      setLocation(new URL(asPath, window?.location?.href).pathname)
    }
  }, [asPath, isReady])

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
