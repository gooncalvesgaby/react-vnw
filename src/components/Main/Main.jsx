
import Elvis from "./elvis.jpg"
import Xuxa from "./xuxa.jpg"
import Leonardo from "./leonardo.jpg"
import "./Main.css"


function Main(){
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
    </>
    )
}

export default Main