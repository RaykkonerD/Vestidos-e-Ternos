import { useState, useEffect } from 'react';
import axios from "axios";
import envVars from '../src/envVars';
import Produto from '../components/Produto';


function Produtos(props){
	const [destaques, setDestaques] = useState([]);
	const [recentes, setRecentes] = useState([]);
	let url = envVars.DB_URL + `/api/produtos?populate=*`;
	
	useEffect(() => {
		axios.get(url, {
	    headers: {
		    'Authorization': envVars.DEV_TOKEN
	    }
		}).then((res) => {
			let elementos = res.data.data;
			
			setDestaques(
				elementos.filter(el => el.id < 5)
									)
			setRecentes(
				elementos.filter(el => el.tamanho !== 'médio')
								 )
	}
		).catch(e => 
			console.log(e)
	  )}, []);	
	
	return (
		<div>
			<section>
		{destaques.map((e,i) => <Produto obj={e} url={envVars.DB_URL} key={i}/>)}
			</section>
			<section>
		{recentes.map((e,i) => <Produto obj={e} url={envVars.DB_URL} key={i}/>)}
			</section>
		</div>
	)
}

export default Produtos;
