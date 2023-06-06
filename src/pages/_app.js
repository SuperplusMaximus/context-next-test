import Layout from './layout';
import '@/styles/globals.css'
import { createContext, useState } from 'react'

export const SomeContext = createContext('APP_CONTEXT');

export default function App({ Component, pageProps }) {

  const [contextValue, setContextValue] = useState(pageProps?.changeContext?? 5);

  console.log("🚀 ~ file: _app.js:10 ~ App ~ contextValue:", contextValue)

  return <Layout>
    <SomeContext.Provider value={ { contextValue, setContextValue } }>
      <Component {...pageProps} />
    </SomeContext.Provider>
  </Layout>
}
