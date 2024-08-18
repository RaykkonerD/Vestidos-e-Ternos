import { Link } from 'react-router-dom';
import CheckIcon from '../../../public/icons/CheckIcon';

export default function Concluido() {
	return (
		<div style={styles.conteudo}>
			<CheckIcon
				tamanho={100}
				fill='green'
				estilo={{marginBottom: 30}}
			/>
			<span style={styles.mansagem}>PROVA DE ROUPA AGENDADA COM SUCESSO!</span>
			<span style={styles.botoes}>
				<Link className='link' to='/'>
					<button style={styles.botao}>Voltar à página inicial</button>
				</Link>
				<a className='link' href='https://wa.link/fkx2rk'>
					<button style={styles.botao}>Entrar em contato conosco</button>
				</a>
			</span>
		</div>
	)
}

const styles = {
	conteudo: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	mansagem: {
		fontWeight: 590
	},
	botoes: {
		marginTop: 50
	},
	botao: {
		display: 'block',
		width: '100%',
		backgroundColor: '#e82727',
		padding: '5px 15px',
		border: 'none',
		color: '#fff',
		marginBottom: 10
	}
}