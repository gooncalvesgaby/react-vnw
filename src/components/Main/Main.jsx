import React, {useState} from "react";
import Elvis from "./elvis.jpg"
import Xuxa from "./xuxa.jpg"
import Leonardo from "./leonardo.jpg"
import "./Main.css"

function Main(){

  const [numero, setNumero] = useState(0)
  const Add = () => {
    setTimeout(() => {
      setNumero(numero + 1)
    }, 1000)
  }

  const Remover = () => {
    setTimeout(() => {
      if(numero > 0){
        setNumero(numero - 1)
      }
    }, 1000)
    console.log(numero)
  
  }

  const Limpar = () => {
    setTimeout(() => {
      setNumero(0)
    }, 1000)
  }

  const [valor, setValor] = useState(0)
  const [Parando, setParando] = useState()

  const Iniciar = () => {
    const guardarIntervalo = setInterval (() => {
      setValor((valor) => valor + 1)
    }, 1000)

    setParando(guardarIntervalo)

  }

  const PararContagem = () => clearInterval(Parando)

    return(
    <>
     <div className="containers">
       <div className="foto-cortes">
        <img className="estilo-corte" src= {Elvis} alt="elvis"/>
        <h2 className="titulo-cortes">Corte Elvis</h2>
        <h2 className="titulo-cortes"> R$ 30,00 </h2>
        <button className="agendar">Adicionar</button>
       </div>

       <div className="foto-cortes">
        <img className="estilo-corte" src={Xuxa} alt="xuxa"/>
        <h2 className="titulo-cortes">Corte Xuxa</h2>
        <h2 className="titulo-cortes"> R$ 30,00 </h2>
        <button className="agendar">Adicionar</button>
       </div>
       
       <div className="foto-cortes">
        <img className="estilo-corte" src={Leonardo} alt="leonardo dicaprio" />
        <h2 className="titulo-cortes">Corte Leonardo</h2>
        <h2 className="titulo-cortes"> R$ 30,00 </h2>
        <button className="agendar">Adicionar</button>
        
       </div>
     </div>

     <div className="contadores">
      <div>
        <h2>Quantos cortes você já fez com a gente?</h2>
        <h3 className="numero">{numero}</h3>
        <button className="btns-cortes" onClick={Add}>+</button>
        <button className="btns-cortes" onClick={Remover}>-</button>
        <button className="btns-cortes" onClick={Limpar}>Limpar</button>
      </div> 
      <div>
        <h2>Clique e ative o cronômetro!</h2>
        <h3 className="numero">{valor}</h3>
        <button className="btns-cortes" onClick={Iniciar}>Iniciar</button>
        <button className="btns-cortes" onClick={PararContagem}>Parar</button>
        <button className="btns-cortes">Zerar</button> 
        {/* linha 85 ainda em desenvovimento */}
      </div>    
     </div>      
    </>
    )
}

export default Main