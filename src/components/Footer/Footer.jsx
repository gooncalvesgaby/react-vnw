
import Bandeiras from "./bandeiras.png"
import "./Footer.css"
function Footer(){

    const Mensagem = () => {
        setTimeout (()=> {
            alert("Você ganhou uma hidratação grátis!")
        }, 2000)
    }

    return (
        <>
        <div className="meu-footer">
            <div>
            <ol className="informacao">
                <li className="listas">Entre em contato.</li>
                <li className="listas">Nossos profissionais.</li>
                <li className="listas">Serviços</li>
            </ol>
            </div>

            <div>
                <button onClick={Mensagem} className="mensagem">CLIQUE E GANHE</button>
            </div>

            <div>
                <img className="bandeiras" src={Bandeiras} alt="bandeiras de cartao" />
            </div>
        </div>
        </>
    )
}

export default Footer