import './Navegation.css';
export default function Navegation() {
  return(
    <header className='menu'>
      <h1>Proyecto - Rick & Morty</h1>
      <nav>
        <ul className='menu_items'>
          <li>Home</li>
          <li>Characters</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
