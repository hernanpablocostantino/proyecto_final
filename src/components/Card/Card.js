export default function Card({info}) {
  const mostrar =()=>{
    console.log(info)
  }
  return(
    <div className="card w-75 d-flex flex-column justify-content-between mx-auto m-2 p-2">
      <img src={info.image} alt={info.name}/>
      <h2>{info.name}</h2>
      <button className="btn btn-active align-self-end" onClick={mostrar}>Now More..</button>
    </div>
  )
}