import React from 'react'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> ef652daf61f425755c77c5fe7d0072c4e3bd91ab
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

//import { Card } from '@blueprintjs/core'
import { QueryClient, QueryClientProvider } from 'react-query'

import HackerNews from './HackerNews'
//import Header from './Header'
import GoogleNews from './Google/GoogleNews'
<<<<<<< HEAD
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
=======
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

>>>>>>> ef652daf61f425755c77c5fe7d0072c4e3bd91ab

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
<<<<<<< HEAD
    <Tabs
      defaultActiveKey="google"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="google" title="Google News">
        <GoogleNews />
      </Tab>
      <Tab eventKey="hacker" title="Hacker News">
        <QueryClientProvider client={queryClient}>
          <HackerNews />
        </QueryClientProvider>
      </Tab>
    </Tabs>
=======
    
      <Tabs defaultActiveKey="google" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="google" title="Google News">
        <GoogleNews />
      </Tab>
     <Tab eventKey="hacker" title="Hacker News">
     <QueryClientProvider client={queryClient}>
        <HackerNews />
        </QueryClientProvider>
    </Tab>
    </Tabs>
   
>>>>>>> ef652daf61f425755c77c5fe7d0072c4e3bd91ab
  )
}

export default App
