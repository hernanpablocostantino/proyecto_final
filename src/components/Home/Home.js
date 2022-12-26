import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";

export default function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <header className="container-home d-flex flex-column justify-content-center align-items-center">
                <h1 className="title-home row justify-content-center">Proyect - Rick & Morty</h1>
                <nav className="navbar">
                    <ul className="home-items">
                        <ListItemHome dato="Characters" infoPath="/characters" />
                        <ListItemHome dato="Contact" infoPath="/contact" />
                    </ul>
                </nav>
            </header>
        </div>
    )
}
