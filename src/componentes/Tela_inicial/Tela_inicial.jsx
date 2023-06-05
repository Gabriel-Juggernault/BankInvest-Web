import Navbar from "../navbar"
import "../Tela_inicial/Tela_inicial.css"

export default function Home(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <a href="">Entrar na conta</a>
                <br></br>
                <a href="">Criar uma conta</a>
            </div>
        </>
    )
}