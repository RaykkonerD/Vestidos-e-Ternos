import { useState, useEffect } from 'react';
import Cabecalho from '../../../components/Header';
import EyeIcon from '../../../public/icons/EyeIcon';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login(){
  let [nome, setNome] = useState('');
  let [senha, setSenha] = useState('');
	let [verSenha, setVerSenha] = useState(false);


	const handlerSubmit = e => {
		e.preventDefault();
		/*let procuraNome = Clientes.filter(obj => obj.attributes.nome == nome)[0];
		let senhaCorreta = procuraNome.attributes.senha;

		if(procuraNome){
		  if(senhaCorreta == senha){
         console.log("☆ Login com SUCESSO!! ☆");
    } else {
				console.log("◇ !!!Senha ERRADA!!! ◇");
				console.log(`》 A senha é: ${senhaCorreta} 《`)
		}
			
		} else {
			console.log("!!!Erro ao procurar usuário!!!")
		}*/
	}
	
	return (
    <div className="tela">
			<Cabecalho />
			<form className="loginForm" onSubmit={handlerSubmit}>
        <h4 className="loginTitulo">Login</h4>
				<input type="text" placeholder="Nome completo" className="loginInputs loginInputNome" value={nome} onChange={e => setNome(e.target.value)}/>
				<div className="loginInputSenhaDiv">
					<input type={verSenha ? "text" : "password"} placeholder="Senha" className="loginInputSenha" value={senha} onChange={e => setSenha(e.target.value)}/>
					<a className="btInvisivel eyeIcon" onClick={() => setVerSenha(!verSenha)}>
						<EyeIcon slash={verSenha} tamanho="16"/>
					</a>
					</div>
				<Link to="/registrar-se" className="link registrarLink">Registrar-se</Link>
				<input type="submit" value="Entrar" className="botaoEntrar" />
					</form>
		</div>
	)
}