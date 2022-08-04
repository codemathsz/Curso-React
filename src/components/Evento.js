function Evento({numero}) {
    
    function myEvent(){
        console.log(`Foi Ativado ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento: </p>
            <button onClick={myEvent}>Ativar!</button>
        </div>
    )
}

export default Evento