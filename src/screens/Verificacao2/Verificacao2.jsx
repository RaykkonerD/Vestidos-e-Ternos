import EyeIcon from '../../../public/icons/EyeIcon';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import './V2.css'

const dataAtual = new Date();
const daquiAUmMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth()+1, dataAtual.getDate());

export default function Verificacao() {
	const [dados, setDados] = useState();
	const [dataPrazo, setDataPrazo] = useState(dataAtual);
	const [clicado, setClicado] = useState();
	const [mostrarCal, setMostrarCal] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => setMostrarCal(false), '400');
	}, [dataPrazo])

	const handleSubmit = e => {
		e.preventDefault();
		navigate('/concluido');
	}

	const handleChangeDados = e => {
		setDados(dadoExistente => ({
			...dadoExistente,
			[e.target.name]: e.target.value,
		}))
}
	
	return (
		<div style={styles.todo}>
		<div style={styles.header}>
			<Link to='/provas' className='link' style={styles.back}>{"<—"}</Link>
			<Link to='/verificacao' className='link' style={{color: '#e82727', textDecoration:'none', fontSize: '1em'}}>
			<span style={styles.primeiraPagina}>Verificacao</span></Link>
			<span style={styles.segundaPagina}>Dados</span>
		</div>
		<form style={styles.conteudo} onSubmit={handleSubmit}>
 				<input
					type="text"
					name="nome"
					placeholder="Nome Completo"
					className="registroInputs" />
				<input
					type="text"
					name="endereco"
					placeholder="Endereço"
					className="registroInputs" />
				<input
					type="tel"
					name="telefone"
					placeholder="Telefone (opcional)"
					className="registroInputs" />
				<input
					type="text"
					name="whatsapp"
					placeholder="WhatsApp"
					className="registroInputs" />
				<input
					type="text"
					placeholder="Instagram (opcional)"
					className="registroInputs" />
			<a style={{background: 'none',}} onClick={() => setMostrarCal(true)}>
			  <input
					type='date'
					value={dataPrazo.toISOString().split('T')[0]}
					disabled
					
					style={{background: 'none'}}
					className="registroInputs"
					/>
		</a 
		>
				<input
					type="submit"
					value="Marcar Prova"
					className="botaoRegistrar" />
			</form>
			<a style={{ ...styles.modal,
		display: mostrarCal ? 'flex' : 'none',}}>
				<button style={styles.bg} onClick={() => setMostrarCal(false)}></button>
				<div style={styles.calDiv}>
				<Calendar 
					onChange={setDataPrazo} 
					value={dataPrazo} 
					calendarType='US'
					showNeighboringMonth={false} 
					navigationLabel={({ label }) => (label.split(' ')[0].charAt(0).toUpperCase() + label.split(' ')[0].slice(1))}
					formatShortWeekday={(locale, dd) => ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][dd.getDay()]}
					minDate={dataAtual} 
					maxDate={daquiAUmMes} 
					minDetail="year"
					tileDisabled={({date}) => !date.getDay()}
					/>
					</div>
		</a>
			</div>
		
	);
}

const styles = {
	todo: {
		height: '100vh'
	},
	header: {
		display: 'flex',
		flexDirection: 'row',		
		color: '#e82727',
		boxShadow: '1px 0.3px 5px black',
	},
	back: {
		position: 'absolute',
		top: 3,
		left: 5,
		textDecoration: 'none'
	},
	primeiraPagina: {
		display: 'flex',
		width: '50vw',
		borderBottom: `2px solid #fff`,
		justifyContent: 'center',
		height: '40px',
		alignItems: 'end',
		paddingBottom: 5,
	},
	segundaPagina: {
		display: 'flex',
		width: '50vw',
		borderBottom: `2px solid #e82727`,
		justifyContent: 'center',
		height: '40px',
		alignItems: 'end',
		paddingBottom: 5,
	},
	conteudo: {
		display: 'flex',
		flexDirection: 'column',
		top: '45px',
		height: 'calc(100% - 45px)',
		width: '100vw',
		padding: '0 25vw',
		boxSizing: 'border-box',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		position: 'absolute',
		top: 0,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		width: '100vw',
		boxSizing: 'border-box',
	},
	bg: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100vw',
		background: 'rgb(0,0,0,0.2)',
	},
	calDiv: {
		zIndex: 5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
}