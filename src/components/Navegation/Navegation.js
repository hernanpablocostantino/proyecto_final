import { Link } from "react-router-dom";
import './Navegation.css';

export default function Navegation() {
  return (
    <header className='menu'>
      <h1>Proyecto - Rick & Morty</h1>
      <nav>
        <ul className='menu_items navbar-nav nav-pills'>
          <li className="nav-item">
            <Link className="nav-link boton aria-current=page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-active aria-current=page" to="/characters">Characters</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link boton aria-current=page" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
