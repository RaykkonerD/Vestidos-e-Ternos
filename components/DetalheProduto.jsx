import react, { useState } from "react";

export default function DetalheProduto(props) {
	const [fechar, setFechar] = useState(false);
	const mostrar = (props.mostrar != fechar);
	const produto = props.produto;

	return (
		<>
		{mostrar &&
		(<div style={styles.divPai}>
			<button style={styles.fundo} onClick={() => {
			setFechar(!fechar)
			}}></button>
		<div name="modal" style={styles.modal}>
			<div style={styles.superior}>
			<img name="ProdutoImg" src={props.img} style={styles.img}/>

			<div name="ProdutoInfo" style={styles.info}>
				<span>Título: {produto.titulo}</span>
				<span>Cor: {produto.cor}</span>
				<span>Tamanho: {produto.tamanho}</span>
				<span>Valor: {produto.valor.toFixed(2)}</span>
			</div>
				</div>

			<div name="ProdutoAgenda"></div>

			<div name="ProdutoDescricao" style={styles.divDescricao}>
				<span style={styles.divDescricao.spans}>Descrição: {produto.descricao}</span>
				<span style={styles.divDescricao.spans}>Detalhes: {produto.detalhes}</span>
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
	img: {
		maxWidth: '50%'
	},
	info: {
		display: 'inline-flex',
		flexDirection: 'column',
		paddingLeft: 10,
		fontSize: 14
	},
	divDescricao: {
		display: 'flex',
	  flexDirection: 'column',
		spans: {
			marginTop: 10,
		}
	}
}