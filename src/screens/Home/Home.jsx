import { useState, useEffect, useContext } from 'react';
import API from "../../api/api";
import envVars from '../../envVars';
import { AuthContext } from '../../contexts/auth';
import ReactLoading from 'react-loading';
import '../../App.css';
import Cabecalho from '../../../components/Header';
import CapaImg from '../../../public/imgs/capa.png';
import Filtro from '../../../components/Filtro';
import Produto from '../../../components/Produto';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
	const [destaques, setDestaques] = useState([]);
	const [recentes, setRecentes] = useState([]);
	const [favoritos, setFavoritos] = useState([]);
	const { signIn, clientePadrao, cliente } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;

	useEffect(() => {
		API.get(urlProdutos).then((res) => {
			let elementos = res.data.data;

			setDestaques(
				elementos.filter(el => el.id < 5)
			)
			setRecentes(
				elementos.filter(el => el.attributes.tamanho !== 'médio')
			)
			setFavoritos(
				elementos.filter(el => usuario.attributes.favoritos.data.includes(el.id))
			)
		}
		).catch(e =>
			console.warn(e)
		)
	}, [cliente]);

	return (
		<main>
			<div className="conteudoAcima">
				<Cabecalho className="hp" />

				<div className="conteudo">
					<div className='capaDiv'>
						<img src={CapaImg} className='capaImg' />
					</div>
					<Filtro />
					<span className="secaoTitulo">Novos Itens</span>
					<section>
						{destaques[0] ? destaques.map((e, i) =>
							<Produto
								obj={e}
								url={envVars.DB_URL}
								key={i} />) :
							<span style={{ marginLeft: 20 }}>
								<ReactLoading
									type="cylon"
									color="#e82727"
								/>
							</span>}
					</section>
					<span className="secaoTitulo">Destaques</span>
					<section>
						{recentes[0] ? recentes.map((e, i) =>
							<Produto
								obj={e}
								url={envVars.DB_URL}
								key={i} />) :
							<span style={{ marginLeft: 20 }}>
								<ReactLoading
									type="cylon"
									color="#e82727"
								/>
							</span>}
					</section>
					<span className="secaoTitulo">Favoritos</span>
					<section className="secaoFavoritos">
						{recentes[0] ? favoritos.map((e, i) =>
							<Produto
								obj={e}
								url={envVars.DB_URL}
								formatoQuadrado={true}
								key={i} />) :
							<span style={{ marginLeft: 20 }}>
								<ReactLoading
									type="cylon"
									color="#e82727"
								/>
							</span>}
					</section>
				</div>
			</div>
			<Footer />
		</main>
	)
}

