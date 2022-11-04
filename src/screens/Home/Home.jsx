import { useState, useEffect } from 'react';
import axios from "axios";
import envVars from '../../envVars';
import ClienteLogado from '../../../db/log';
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
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;
	
	useEffect(() => {
		axios.get(urlProdutos, {
	    headers: {
		    'Authorization': envVars.DEV_TOKEN
	    }
		}).then((res) => {
			let elementos = res.data.data;
			
			setDestaques(
				elementos.filter(el => el.id < 5)
									)
			setRecentes(
				elementos.filter(el => el.attributes.tamanho !== 'médio')
								 )
			setFavoritos(
				elementos.filter(el => ClienteLogado.favoritos.includes(el.id))
								 )
	}
		).catch(e => 
			console.log(e)
	  )}, []);	

	  return (
    <main>
      <Cabecalho className="hp"/>
			<div className='capaDiv'>
        <img src={CapaImg} className='capaImg'/>
			</div>
			<Filtro />
			<div className="conteudo">
					<span className="secaoTitulo">Novos Itens</span>
				<section>
					{destaques.map((e,i) => 
			    <Produto 
				    obj={e} 
				    url={envVars.DB_URL} 
				    key={i}/>)}
				</section>
					<span className="secaoTitulo">Destaques</span>
				<section>
					{recentes.map((e,i) => 
			    <Produto 
				    obj={e} 
				    url={envVars.DB_URL} 
				    key={i}/>)}
				</section>
					<span className="secaoTitulo">Favoritos</span>
				<section className="secaoFavoritos">
					{favoritos.map((e,i) => 
			    <Produto 
				    obj={e} 
				    url={envVars.DB_URL}
						formatoQuadrado={true}
				    key={i}/>)}
				</section>
			</div>
			<Footer />
    </main>
  )
}

