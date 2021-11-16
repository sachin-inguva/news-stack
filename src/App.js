import React from 'react'

import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import Header from './Header'
import { Card } from '@blueprintjs/core'

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
      </Card>
    </QueryClientProvider>
  )
}

export default App
