import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
       <Component {...pageProps} />
       <Header />
      </ChakraProvider>
  )
}
export default MyApp
