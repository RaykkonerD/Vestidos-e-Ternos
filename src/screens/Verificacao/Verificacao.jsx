import { useState, useEffect, useContext } from 'react';
import API from "../../api/api";
import envVars from '../../envVars';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

export default function Verificacao() {
	const [produtos, setProdutos] = useState();
	const { cliente, clientePadrao } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	let provas = usuario.attributes.provas.data;
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;
	
	useEffect(() => {
		API.get(urlProdutos).then((res) => {
			let elementos = res.data.data;
			setProdutos(
				elementos.filter(e => provas.includes(e.id))
			);
		}).catch(e => console.warn(e))
	}, []);

  const somarValores = () => {
		let valor = 0;
		if(produtos && produtos.length){
		 produtos.forEach(produto => {
			  valor += produto.attributes.valor;
		});
		}
		return valor;
	}
	
	return (
		<div style={styles.todo}>
		<div style={styles.header}>
			<Link to='/provas' className='link' style={styles.back}>{"<—"}</Link>
			<span style={styles.primeiraPagina}>Verificacao</span>
			<Link to='/verificacao2' className='link' style={{color: '#e82727', textDecoration:'none', fontSize: '1em'}}>
				<span style={styles.segundaPagina}>Dados</span>
			</Link>
		</div>
		<div style={styles.conteudo} >
				<span style={styles.info}>
					<span style={styles.titulos}>
						{"Última peça adicionada: "}
					</span>
					<span style={styles.valores}>
						{produtos ? 
							(produtos.length ? produtos[produtos.length-1].attributes.titulo : "Nenhuma peça adicionada") 
						: "Nenhuma peça adicionada"}
					</span>
				</span>
				<span style={styles.info}>
					<span style={styles.titulos}>
						{"Quantidade de peças:"}
					</span>
					<span style={styles.valores}>
						{provas.length}
					</span>
				</span>
				<span style={styles.info}>
					<span style={styles.titulos}>
						{"Valor total: "}
					</span>
					<span style={styles.valores}>
						R$ { somarValores().toString().replace('.', ',')}
					</span>
				</span>
		</div>
		</div>
	);
}

const styles = {
	todo: {
		height: '100vh'
	},
	header: {
		position: 'fixed',
		display: 'flex',
		flexDirection: 'row',
		top: 0,
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
		borderBottom: `2px solid #e82727`,
		justifyContent: 'center',
		height: '40px',
		alignItems: 'end',
		paddingBottom: 5,
	},
	segundaPagina: {
		display: 'flex',
		width: '50vw',
		borderBottom: `2px solid #fff`,
		justifyContent: 'center',
		height: '40px',
		alignItems: 'end',
		paddingBottom: 5,
	},
	conteudo: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		top: '45px',
		height: 'calc(100% - 45px)',
		width: '100vw',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	titulos: {
		fontWeight: '550',
		display: 'block'
	},
	info: {
	  marginBottom: 40
	}
}