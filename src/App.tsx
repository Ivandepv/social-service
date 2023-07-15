import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Welcome } from './components/welcome/Welcome'
import { AppRouter } from './router/AppRouter'

export function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  )
}