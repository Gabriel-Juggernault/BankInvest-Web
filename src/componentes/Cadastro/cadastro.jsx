import axios from "axios";
import Navbar from "../navbar";
import { useState } from "react";

export default function Cadastro(){
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function Cadastro_user(e){
        e.preventDefault()
        if(!nome || !sobrenome || !cpf || !email || !senha){
            alert("Preencha todos os dados")
            return
        }
        const update = {
            nome: nome,
            sobreNome: sobrenome,
            cpf: cpf,
            email: email,
            senha: senha,

        }
        await axios.post("http://127.0.0.1:8000/api/Rota_Cliente/", update).then((response) => {alert("Cadastrado com sucesso!")})
        
    }

    return(
        <div>
            <Navbar/>
            <form onSubmit={(e)=>{Cadastro_user(e)}}>
                <input type="text" placeholder="Digite seu nome" onChange={(e)=>{setNome(e.target.value)}}/>
                <input type="text" placeholder="Digite seu sobrenome" onChange={(e)=>{setSobrenome(e.target.value)}}/>
                <input type="text" placeholder="Digite seu cpf" onChange={(e)=>{setCpf(e.target.value)}}/>
                <input type="text" placeholder="Digite seu email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" placeholder="Digite seu senha" onChange={(e)=>{setSenha(e.target.value)}}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
