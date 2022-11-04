import { useState } from 'react';
import Cabecalho from '../../../components/Header';
import EyeIcon from '../../../public/icons/EyeIcon';
import './Registro.css';

export default function registro(){
  const [dados, setDados] = useState();
	const [verSenha, setVerSenha] = useState(false);
  const [senha, setSenha] = useState();

	const handleChangeDados = e => {
		setDados(dadoExistente => ({
			...dadoExistente,
			[e.target.name]: e.target.value,
		}))
	}
	
	return (
		<div>
		<Cabecalho />
		<form 
				className="registroForm">
		  <h4  
				className="registroTitulo"> Registro</h4>   
      <input 
				type="text"
				name="nome"
				placeholder="Nome Completo"
				className="registroInputs" />   
      <input 
				type="text" 
				name="endereco"
				placeholder="Endereço"
				className="registroInputs"/>
      <input 
				type="number" 
				name="telefone"
				placeholder="Telefone (opcional)" 
				className="registroInputs"/>
      <input 
				type="text" 
				name="whatsapp"
				placeholder="WhatsApp" 
				className="registroInputs"/>
      <input 
				type="text"
				placeholder="Instagram (opcional)" 
				className="registroInputs"/>
				<div 
				className="registroInputSenhaDiv">
					<input 
				type={verSenha ? "text" : "password"} 
				name="senha"
				placeholder="Senha" 
				className="registroInputSenha"
			  value={senha} 
				onChange={e => setSenha(e.target.value)}/>
					<a 
				className="btInvisivel eyeIcon" 
				onClick={() => setVerSenha(!verSenha)}>
						<EyeIcon 
				slash={verSenha} 
				tamanho="18"/>
					</a>
					</div>
			<input 
				type="submit" 
				value="Registrar-se"  
				className="botaoRegistrar"/>
		</form>
			</div>
	)
}