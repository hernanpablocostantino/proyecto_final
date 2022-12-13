import './Home.css';
import ListItemHome from "../ListItemHome/ListItemHome";


export default function Home () {
  return (
    <header className='menu'>
      <h1>Proyecto - Rick & Morty</h1>
      <nav>
        <ul className='menu_items'>
          <ListItemHome dato="Home"/>
          <ListItemHome dato="Characters"/>
          <ListItemHome dato="Contact"/>
        </ul>
      </nav>
    </header>
  )
}