import React from 'react'

import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import { Card } from '@blueprintjs/core'
import { QueryClient, QueryClientProvider } from 'react-query'

import HackerNews from './HackerNews'
import Header from './Header'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Card>
        <Header />
        <HackerNews />
      </Card>
    </QueryClientProvider>
  )
}

export default App
