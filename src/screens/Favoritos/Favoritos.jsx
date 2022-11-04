import { useState, useEffect } from 'react';
import axios from "axios";
import envVars from '../../envVars';
import ClienteLogado from '../../../db/log';
import Cabecalho from '../../../components/Header';
import Rodape from '../../../components/Footer';
import './Favoritos.css';
import Produto from '../../../components/Produto';
import TrashIcon from '../../../public/icons/TrashIcon';
import { Link } from 'react-router-dom';

export default function Favoritos (){
	const [favoritos, setFavoritos] = useState([]);
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;
	
	useEffect(() => {
		axios.get(urlProdutos, {
	    headers: {
		    'Authorization': envVars.DEV_TOKEN
	    }
		}).then((res) => {
			let elementos = res.data.data;
			
			setFavoritos(
				elementos.filter(el => ClienteLogado.favoritos.includes(el.id))
								 )
	}
		).catch(e => 
			console.log(e)
	  )}, []);	

	return (
		<div className='tela'>
		  <Cabecalho />
      <div className="conteudoFavoritos">
				<span className="spanFavoritos">
					<h4 className="tituloFavoritos">Favoritos</h4>
					<Link onClick={() => {			ClienteLogado.favoritos.length = 0
			console.log(ClienteLogado.favoritos)
}}>
			  	<TrashIcon tamanho={18} />
						</Link>
				</span>
				<div className="produtosDiv">
				{favoritos.map((e,i) => 
			    <Produto 
				    obj={e} 
				    url={envVars.DB_URL}
						formatoQuadrado={true}
				    key={i}/>)}
				</div>
			</div>
			<Rodape />
		</div>
	)
}