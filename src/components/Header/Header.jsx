import Logo from "./barbearia.png"

function Header(){
    return(
    <>
    <div className="meu-header">
        <h2 className="cortes">Cortes Femininos</h2>
        <img src={Logo} alt="logo da barbearia do careca"/> 
        <h2 className="cortes">Cortes Masculinos</h2>
    </div>    
    </>
    )
}

export default Header