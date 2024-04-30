import Link from "next/link"
import "./header.css"
import Menu from "./menu"
const Header = () => {
  return (
   <>
    <div className="navbar">
      <Menu/>
      <Link className="elan-yerlesdir-butonu" href="/elan-yerlesdir">elan yerləşdir</Link>
      <div className="search-bar">
      <input type="text" placeholder="Axtar..."/>
      <button><img src="./svgler/search.svg" width={20} height={20} className=""/></button>
      </div>
    </div>
   </>
  )
}

export default Header