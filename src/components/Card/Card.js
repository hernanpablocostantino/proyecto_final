import { useState } from 'react';

export default function Card({ info }) {
    const [ocultar, setOcultar] = useState(true);

    const mostrar = () => {
        console.log(info)
        setOcultar(false)
    }

    const ocularInfo = () => {
        setOcultar(true)
    }

    return (
        <section className='row cards-section mx-auto'>
            <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
                <div className='d-flex flex-column justify-content between align-items-center mx-auto'>
                    <img src={info.image} alt={info.name} />
                    <h2 >{info.name}</h2>
                    <button onClick={mostrar} className={ocultar === true ? "btn btn-active align-self-end more" : "d-none"}>Now More..</button>
                </div>

                {ocultar === false ?

                    <div className='more-info p-3 flex-column align-items-center ch1'>
                        <button className="btn btn-active d-flex align-self-end m-3" onClick={ocularInfo}>X</button>
                        <ul className="list-group">
                            <li className="list-group-item p-3 fw-bold">Character Status {info.status}</li>
                            <li className="list-group-item p-3">Species {info.species}</li>
                            <li className="list-group-item p-3">Origin {info.origin.name}</li>
                            <li className="list-group-item p-3">Gender {info.gender}</li>
                        </ul>
                    </div> : ''

                }
            </div>
        </section>
    )
}
