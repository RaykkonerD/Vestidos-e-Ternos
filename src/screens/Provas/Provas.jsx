import { useState, useEffect } from 'react';
import axios from "axios";
import envVars from '../../envVars';
import ClienteLogado from '../../../db/log';
import Cabecalho from '../../../components/Header';
import Rodape from '../../../components/Footer';
import './Provas.css';
import Produto from '../../../components/Produto';
import TrashIcon from '../../../public/icons/TrashIcon';
import { Link } from 'react-router-dom';

export default function Favoritos (){
	const [provas, setProvas] = useState([]);
	let urlProdutos = envVars.DB_URL + `/api/produtos?populate=*`;
	
	useEffect(() => {
		axios.get(urlProdutos, {
	    headers: {
		    'Authorization': envVars.DEV_TOKEN
	    }
		}).then((res) => {
			let elementos = res.data.data;
			
			setProvas(
				elementos.filter(el => ClienteLogado.provas.includes(el.id))
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
					<h4 className="tituloFavoritos">Provas de Roupa</h4>
			  	<TrashIcon tamanho={18} />
				</span>
				<div className="produtosDiv">
				{provas.map((e,i) => 
			    <Produto 
				    obj={e} 
				    url={envVars.DB_URL}
						formatoQuadrado={true}
				    key={i}/>)}
				</div>
				<button className="botaoAlugar">Agendar</button>
			</div>
			<Rodape />
		</div>
	)
}