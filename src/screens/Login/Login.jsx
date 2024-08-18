import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Cabecalho from '../../../components/Header';
import Footer from '../../../components/Footer';
import EyeIcon from '../../../public/icons/EyeIcon';
import XIcon from '../../../public/icons/XIcon';
import CheckIcon from '../../../public/icons/CheckIcon';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import API from '../../api/api';
import envVars from '../../envVars';


export default function Login() {
	const [nome, setNome] = useState('');
	const [senha, setSenha] = useState('');
	const [verSenha, setVerSenha] = useState(false);
	const [submit, setSubmit] = useState(0);
	const { signIn, clientePadrao, cliente, mensagem, logado } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	const [displayMessage1, setDisplayMessage1] = useState('none');
	const [displayMessage2, setDisplayMessage2] = useState('none');
	let navigate = useNavigate();

	useEffect(() => {
		if(cliente){
		setTimeout(() => {
				navigate('/perfil')
		}, 1500)
		}
	}, [cliente]);

	useEffect(() => {
		if (submit) {
			if (nome !== '' && senha !== '') {
				signIn(nome, senha);
				setDisplayMessage1('none');
				setDisplayMessage2('none');
			} else {
				setDisplayMessage1((nome === '') ? 'flex' : 'none');
				setDisplayMessage2((senha === '') ? 'flex' : 'none');
			}
		}
	}, [submit]);

	const handlerSubmit = e => {
		e.preventDefault();
		setSubmit(submit + 1);
	}

	return (
		<div style={{height:'100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
			<Cabecalho />
			<span className='loginCorpo'>
			<form
				className="loginForm"
				onSubmit={handlerSubmit}>
				<h4 className="loginTitulo">Login</h4>
				<input type="text" placeholder="Usuário" style={{borderColor: displayMessage1=='flex'?'orange':'#e82727'}} className="loginInputs loginInputNome" value={nome} onChange={e => setNome(e.target.value)} />
				<span style={{ display: displayMessage1 }} className="mensagemCampoObrigatorio">Preencha este campo (!)</span>
				<div className="loginInputSenhaDiv" style={{borderColor: displayMessage2=='flex'?'orange':'#e82727'}}>
					<input type={verSenha ? "text" : "password"} placeholder="Senha" className="loginInputSenha" value={senha} onChange={e => setSenha(e.target.value)} />
					<a className="btInvisivel eyeIcon" onClick={() => setVerSenha(!verSenha)}>
						<EyeIcon slash={verSenha} tamanho="16" fill={displayMessage1=='flex'?'orange':'#e82727'}/>
					</a>
				</div>
				<span style={{ display: displayMessage2 }} className="mensagemCampoObrigatorio">Preencha este campo (!)</span>
				<Link to="/registrar-se" className="link registrarLink">Registrar-se</Link>
				<input type="submit" value="Entrar" className="botaoEntrar" />
			
			</form>

			<span style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
		{mensagem[0] == 'U' ? 
			<div className='mensagemDeAlertaErro' style={{display: 'flex', alignItems: 'center'}}>
				<XIcon fill="#a32424" tamanho='20' estilo={{marginRight: 15}}/>
			<span>{mensagem}</span>
		</div> : (mensagem[0] == 'L' ?
							<div className='mensagemDeAlertaSucesso' style={{display: 'flex', alignItems: 'center'}}>
				<CheckIcon fill="#30ab30" tamanho='20' estilo={{marginRight: 15}}/>
			<span>{mensagem}</span>
							</div> : null)}
			</span>
			</span>
			<Footer />
		</div>
	)
}
