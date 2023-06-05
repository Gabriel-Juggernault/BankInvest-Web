import { useState } from "react"
import axios from "axios";

export default function Login(){
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")

    async function Login_user(e){
        e.preventDefault();
        let dados = await axios.get("http://127.0.0.1:8000/api/Rota_Cliente/?format=json")
        dados = dados.data
        for(let c = 0; c <= dados.length; c++){
            if(dados[c].cpf == cpf && dados[c].senha == senha){
                //window.location.href = "/logado"
                alert("logado")
                return
            }
        }

    }

    return(
        <div>
            <form onSubmit={(e)=>{Login_user(e)}}>
                <p>Cpf</p>
                <input type="text" placeholder="Digite seu cpf" onChange={(e)=>{setCpf(e.target.value)}}/>
                <p>Senha</p>
                <input type="password" placeholder="Digite sua senha" onChange={(e)=>{setSenha(e.target.value)}}/>
                <input type="submit"/>
            </form>
        </div>
    )
}