import { useSate, useEffect, useContext } from 'react';
import Cabecalho from '../../../components/Header';
import Footer from '../../../components/Footer';
import { AuthContext } from '../../contexts/auth';


export default function Alugueis () {
	const { cliente, clientePadrao } = useContext(AuthContext);
	const usuario = clientePadrao.attributes;
	const data = [
	{
		data: '23/12/22',
		quant: '13',
		valor: '1.255,95',
		quitado: 67
	},
	{
		data: '04/05/23',
		quant: ' 2',
		valor: '    120,00',
		quitado: 100
	},
	{
		data: '12/02/22',
		quant: '  9',
		valor: '   268,30',
		quitado: 0
	},
	{
		data: '31/12/21',
		quant: ' 1',
		valor: '   53,95',
		quitado: 98
	},
		];
	
	return (
		<main>
			<div  className="conteudoAcima">
			  <Cabecalho />
				  <div className="conteudo">
						<div style={styles.categories}>
							<span>Data</span>
							<span>Número de peças</span>
							<span>Valor</span>
							<span>Quitado</span>
						</div>
						<div style={styles.lista}>
			{data.map((aluguel, i) => <div key={i} style={styles.item}>
				<span style={styles.item.data}>{aluguel.data}</span>
				<span>{aluguel.quant}</span>
				<span>{aluguel.valor}</span>
				<span style={{color: parseInt(aluguel.quitado)==100 ? 'green' : ((parseInt(aluguel.quitado)>50) ? 'orange' : ((parseInt(aluguel.quitado)==0) ? 'red' : 'black'))}}>{aluguel.quitado}%</span>
			</div>)}
						</div>
					</div>
			</div>
			<Footer />
		</main>
	)
}

const styles = {
	categories: {
		display: 'flex',
		flexDirection: 'row',
		background: 'none',
		borderBottom: '1px solid #ccc',
		color: '#ccc',
		width: '100vw',
		padding: '0px 10px',
		boxSizing: 'border-box',
		justifyContent: 'space-around',
		marginTop: 20
	},
	lista: {
		padding: '0 10px',
		display: 'flex',
		flexDirection: 'column',
		marginTop: 10
	},
	item: {
		data: {
			color: 'white',
			background: '#e82727'
		},
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '15px 10px',
		boxSizing: 'borderBox',
		margin: '5px 0px',
		borderRadius: 2,
		boxShadow: '0.1px 0.01px 5px #ccc'
	}
}