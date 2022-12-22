import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";
export default function Home() {
    return(
        <header className="bg-primary">
            <h1>Proyect - Rick & Morty</h1>
            <nav className="navbar">
                <ul className="d-flex justify-content-between">
                    <ListItemHome dato="Characters"/>
                    <ListItemHome dato="Contact"/>
                </ul>
            </nav>
        </header>
    )
}