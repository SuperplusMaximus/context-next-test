import '@/styles/globals.css'
import { createContext, useState } from 'react'

export const SomeContext = createContext('APP_CONTEXT');

export default function App({ Component, pageProps }) {

  const [contextValue, setContextValue] = useState(null);

  console.log("🚀 ~ file: _app.js:6 ~ App ~ SomeContext:", SomeContext)

  return <SomeContext.Provider value={ { contextValue, setContextValue } }><Component {...pageProps} /></SomeContext.Provider>
}
