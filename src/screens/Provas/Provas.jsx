import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import envVars from '../../envVars';
import ClienteLogado from '../../../db/log';
import { AuthContext } from '../../contexts/auth';
import Cabecalho from '../../../components/Header';
import Rodape from '../../../components/Footer';
import './Provas.css';
import Produto from '../../../components/Produto';
import TrashIcon from '../../../public/icons/TrashIcon';
import { Link } from 'react-router-dom';

export default function Provas() {
	const [provas, setProvas] = useState([]);
	const { signIn, clientePadrao, cliente } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;

	useEffect(() => {
		axios.get(urlProdutos, {
			headers: {
				'Authorization': envVars.DEV_TOKEN
			}
		}).then((res) => {
			let elementos = res.data.data;

			setProvas(
				elementos.filter(el => usuario.attributes.provas.data.includes(el.id))
			)
		}
		).catch(e =>
			console.log(e)
		)
	}, []);

	return (
		<main>
			<div className="conteudoAcima">
				<Cabecalho />
				<div className="conteudo">
					<span className="spanFavoritos">
						<h4 className="tituloFavoritos">Provas de Roupa</h4>
						<button onClick={() => {
							usuario.attributes.provas.data = [];
						}} style={{background: "none", border: 'none'}}>
							<TrashIcon tamanho={18} />
						</button>
					</span>
					<div className="produtosDiv">
						{provas.map((e, i) =>
							<Produto
								obj={e}
								url={envVars.DB_URL}
								formatoQuadrado={true}
								key={i} />)}
					</div>
					<Link to="/verificacao">
						<button className="botaoAlugar">Agendar</button>
					</Link>
				</div>
			</div>
			<Rodape />
		</main>
	)
}