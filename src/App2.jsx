import react, {useState, useEffect} from 'react';
import axios from "axios";
import API from './api/api';
import envVars from './envVars';
import './App.css';
import Loader from './screens/Loading';
import ReactLoading from 'react-loading';
import logo from '../public/imgs/logoBold.png';
import imagemAlternativa from '../noImage.png';

export default function App(){
	const [data, setData] = useState([]);
	const [dataObj, setDataObj] = useState({});
	const [load, setLoad] = useState(true);
	let url = envVars.DB_URL + "/api/clientes?populate=*";
	
	useEffect(() => {
		setTimeout(() => {
			API.get(url).then((response) => {
					setData(response.data.data);
			setLoad(false);
			
		}).catch((e) => console.error("ERRO: " + e))
		}, 2000);
	}, [])
	
  return (
		<div>
			{load && <Loader />}
			{!load && 
				<div>
			{data.map((c) => 
			<div key={c.id} style={styles.divCliente}>
				
			<img src={(c.attributes.imagem.data?(envVars.DB_URL + c.attributes.imagem.data.attributes.formats.thumbnail.url) : imagemAlternativa)} style= {styles.imgCliente}/>
			<p><span style={styles.atributoCliente}>id: </span> {c.id}</p>
			<p><span style={styles.atributoCliente}>nome: </span> {c.attributes.nome}</p>
			<p><span style={styles.atributoCliente}>endereco: </span> {c.attributes.endereco}</p>
			<p><span style={styles.atributoCliente}>telefone: </span> {c.attributes.telefone}</p>
			<p><span style={styles.atributoCliente}>whatsapp: </span> {c.attributes.whatsapp}</p>
			<p><span style={styles.atributoCliente}>apelido: </span> {c.attributes.apelido}</p>
			<p><span style={styles.atributoCliente}>instagram: </span> {c.attributes.instagram}</p>
			<p><span style={styles.atributoCliente}>senha: </span> {c.attributes.senha}</p>
			<p><span style={styles.atributoCliente}>alugueis: </span> [{c.attributes.alugueis.data.toString()}]</p>
			<p><span style={styles.atributoCliente}>favoritos: </span> [{c.attributes.favoritos.data.map(e => (e.id)).join(', ').toString()}]</p>
			<p><span style={styles.atributoCliente}>contatos: </span> [{c.attributes.contatos.data.toString()}]</p>
			<p><span style={styles.atributoCliente}>provas: </span> [{c.attributes.provas.data.toString()}]</p>
				{/*<p>atributos: {JSON.stringify(c.attributes)}</p>*/}
			</div>
			)}
					</div>
			}
		</div>
	)
}

const styles = {
	divCliente: {
		borderBottom: "3px dashed teal", 
		padding: 10,
	},
	imgCliente: {
		maxWidth:"150", 
		maxHeight:"150",
	},
	atributoCliente: {
		color: 'teal',
		fontWeight: 'semi-bold'
	}
}