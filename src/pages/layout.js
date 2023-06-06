import Navbar from './Navbar'
import { SomeContext } from './_app'
import { useContext } from 'react'

export default function Layout({ children }) {
    const { contextValue, setContextValue } = useContext(SomeContext);
    console.log("🚀 ~ file: layout.js:6 ~ Layout ~ contextValue:", contextValue)
    return (
      <>
        <h1>LAYOUT : {contextValue}</h1>
        <Navbar />
        <main>{children}</main>
      </>
    );
}