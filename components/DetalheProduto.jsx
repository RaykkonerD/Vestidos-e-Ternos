import react, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
const dataAtual = new Date();
const daquiAUmMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, dataAtual.getDate());

export default function DetalheProduto(props) {
	const [fechar, setFechar] = useState(false);
	const [dataPrazo, setDataPrazo] = useState(dataAtual);

	useEffect(() => {
		if (dataPrazo != dataAtual) {
			props.agendar();
		}
	}, [dataPrazo]);

	const mostrar = (props.mostrar != fechar);
	const produto = props.produto;

	return (
		<>
			{mostrar &&
				(<div style={styles.divPai}>
					<button
						style={styles.fundo}
						onClick={() => {
							setFechar(!fechar)
						}}></button>
					<div
						name="modal"
						style={styles.modal}>
						<div
							style={styles.superior}>
							<span style={styles.imgDiv}>
								<img
									name="ProdutoImg"
									src={props.img}
									style={styles.img} />
							</span>

							<div
								name="ProdutoInfo"
								style={styles.info}>

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
									tileDisabled={({ date }) => !date.getDay()}
								/>
							</div>
						</div>

						<div
							name="ProdutoDescricao"
							style={styles.divDescricao}>
							<span
								style={styles.divDescricao.spans}>
								<span style={styles.topicos}>Tipo: </span>{produto.titulo}</span>
							<span
								style={styles.divDescricao.spans}>
								<span style={styles.topicos}>Valor: </span>R$ {produto.valor.toFixed(2).replace('.', ',')}</span>
							<span
								style={styles.divDescricao.spans}>
								<span style={styles.topicos}>Cor: </span>{produto.cor}</span>
							<span
								style={styles.divDescricao.spans}>
								<span style={styles.topicos}>Tamanho: </span>{produto.tamanho}</span>
							<span style={styles.divDescricao.spans}>
								<span style={styles.topicos}>Descrição: </span>{produto.descricao}</span>
							<span
								style={styles.divDescricao.spans}>
								<span
									style={styles.topicos}>Detalhes: </span>{produto.detalhes}</span>
						</div>
					</div>
				</div>)
			}
		</>
	)
}

const styles = {
	divPai: {
		position: 'fixed',
		top: 0,
		left: 0,
		height: "100vh",
		width: "100%",
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	fundo: {
		width: '100%',
		height: '100%',
		border: 'none',
		backgroundColor: '#eee',
		opacity: 0.6
	},
	modal: {
		position: 'fixed',
		backgroundColor: 'white',
		boxShadow: '0 0 10px #ccc',
		display: 'flex',
		flexDirection: 'column',
		padding: 10,
		margin: '0 5%'
	},
	invisivel: {
		display: 'none'
	},
	superior: {
		display: 'flex',
		flexDirection: 'row',
	},
	imgDiv: {
		backgroundColor: '#f0f0f0',
		borderRadius: 5,
		display: 'flex',
		alignItems: 'center'
	},
	img: {
		maxWidth: '100%',
		maxHeight: '100%'
	},
	info: {
		display: 'inline-flex',
		flexDirection: 'column',
		paddingLeft: 10,
		fontSize: 14,
		maxWidth: '50%',
		marginLeft: 6,
		justifyContent: 'space-between'
	},
	divDescricao: {
		display: 'flex',
		flexDirection: 'column',
		spans: {
			marginTop: 10,
		}
	},
	topicos: {
		color: 'red',
	}
}