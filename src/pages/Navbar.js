import Link from 'next/link';
import { SomeContext } from './_app'
import { useContext } from 'react'
 
function Navbar() {
  const { contextValue, setContextValue } = useContext(SomeContext);
  console.log("🚀 ~ file: Navbar.js:6 ~ Navbar ~ contextValue:", contextValue)
  return (
    <ul>
        <li>NAVBAR : {contextValue}</li>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
  );
}
 
export default Navbar;