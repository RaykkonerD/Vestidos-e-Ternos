import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import envVars from '../../envVars';
import { AuthContext } from '../../contexts/auth';
import Cabecalho from '../../../components/Header';
import Rodape from '../../../components/Footer';
import './Favoritos.css';
import Produto from '../../../components/Produto';
import TrashIcon from '../../../public/icons/TrashIcon';
import { Link } from 'react-router-dom';

export default function Favoritos() {
	const [favoritos, setFavoritos] = useState([]);
	const { clientePadrao, setClientePadrao, setCliente, cliente } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;

	useEffect(() => {
		axios.get(urlProdutos, {
			headers: {
				'Authorization': envVars.DEV_TOKEN
			}
		}).then((res) => {
			let elementos = res.data.data;

			setFavoritos(
				elementos.filter(el => usuario.attributes.favoritos.data.includes(el.id))
			)
		}
		).catch(e =>
			console.log(e)
		)
	}, [usuario.attributes.favoritos]);

	return (
		<main>
			<div className="conteudoAcima">
			<Cabecalho />
			<div className="conteudo">
				<span className="spanFavoritos">
					<h4 className="tituloFavoritos">Favoritos</h4>
					<Link onClick={() => {
						usuario.attributes.favoritos.data.length = 0;
			if(cliente){
				setCliente(usuario);
			} else {
				setClientePadrao(usuario);
			}
					}}>
						<TrashIcon tamanho={18} />
					</Link>
				</span>
				<div className="produtosDiv">
					{favoritos.map((e, i) =>
						<Produto
							obj={e}
							url={envVars.DB_URL}
							formatoQuadrado={true}
							key={i} />)}
				</div>
			</div>
			</div>
			<Rodape />
		</main>
	)
}