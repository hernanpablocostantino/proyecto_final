import './Home.css';
import ListItemHome from "../ListItemHome/ListItemHome";
//import {useState} from 'react'


export default function Home () {
  return (
    // let informacion={
    //   email: "sjahjdf@hsdfgddy.com",
    //   telefono: 6546
    // }
    // let [unValor,setValor]=useState(true);
    // let unValor=[true];
    // const cambiarValor=()=>{
    //   console.log("se cambio el valor de la variable unValor")
    //   setValor(false)
    // }
    // < className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <header className="container-home d-flex flex-column justify-content-center align-items-center">
      <h1 className="title-home text-center">Proyecto - Rick & Morty</h1>
      <nav>
        <ul className="home-items">
          <ListItemHome dato="Characters"/>
          <ListItemHome dato="Contact"/>
        </ul>
      </nav>
    </header>
    </div> 
  )
}