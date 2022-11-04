import { useState, useEffect } from 'react';
import Image from '../noImage.png';
import HeartIcon from '../public/icons/HeartIcon';
import CalendarIcon from '../public/icons/CalendarIcon';
import ClienteLogado from '../db/log';
import envVars from '../src/envVars';
import DetalheProduto from './DetalheProduto';

let favoritados = ClienteLogado.favoritos;
let nFavoritados = favoritados.length;
let paraProva = ClienteLogado.provas;

export default function Produto(props){
	//Variáveis de controle de propriedades
	let objetoProduto = props.obj;
	let produto = objetoProduto.attributes;
	let id = objetoProduto.id;

	//Estados para controle da favoritação e agendamento
	const [coracaoClicado, setCoracaoClicado] = useState(ClienteLogado.favoritos.includes(id));
	const [Cclicked, setCClicked] = useState();
	const [agendaClicada, setAgendaClicada] = useState(ClienteLogado.provas.includes(id));
	const [Aclicked, setAClicked] = useState();
	const [mostrarDetalhe, setMostrarDetalhe] = useState(false);
	
	let pImg = produto.imagem.data.attributes.formats.thumbnail.url;
	let img = pImg ? (envVars.DB_URL + pImg) : Image;

  //Adiciona um atalho para a página favoritos 
	let mais = props.mais ? (
	  <span className="prodMais">
		  <p>+{nFavoritados}</p>
	  </span>
	) : "";

  //Adicionar ou remover FAVORITO
	useEffect(() => {
  if(coracaoClicado && !favoritados.includes(id)){
		ClienteLogado.favoritos.push(id);

	} else {

		ClienteLogado.favoritos = favoritados.filter(prod => prod != id);

	}
}, [Cclicked]);
	
  //Adicionar ou remover PROVA
	useEffect(() => {
  if(agendaClicada && !paraProva.includes(id)){
		ClienteLogado.provas.push(id);

	} else {

		ClienteLogado.provas = paraProva.filter(prod => prod != id);

	}
}, [Aclicked]);

	if(props.formatoQuadrado){
	return (
		<figure className="prodFigureCurto">
			{mais}
			<span className="prodImgDivCurto">
				<button className="btInvisivel">
			<img src={img} className="prodImgCurto"/>
					</button>
			</span>
			<figcaption className="prodFigcaptionCurto">
				<button className="btInvisivel" onClick={() => {
setCoracaoClicado(!coracaoClicado)
		setCClicked(!Cclicked)
		}}>
					<HeartIcon tamanho={16} preenchido={coracaoClicado}/>
				</button>
				<button className="btInvisivel" onClick={() => {
setAgendaClicada(!agendaClicada)
		setAClicked(!Aclicked)
		}}>
					<CalendarIcon plus={true} tamanho={16} estilo={{right:0}} preenchido={agendaClicada}/>
					</button>
      </figcaption>
		</figure>
	)
	}
	
	return (
		<figure className="prodFigure">
			<DetalheProduto mostrar={mostrarDetalhe} produto={produto} img={img}/>
			<a className="prodImgDiv" onClick={() => setMostrarDetalhe(!mostrarDetalhe)}>
			<img 
				src={img} 
				alt={`Produto №${id}`} 
				className="prodImg"/>
			</a>
			
			<figcaption className="prodFigcaption"> 
				<span className="prodInfo">
					<span className="prodTitulo">
						{produto.titulo}
					</span>
					<span className="prodTamanho">
						Tamanho {produto.tamanho}
					</span>
          <span className="prodValor">
						Valor: R$ {produto.valor.toFixed(2)}
					</span>
				</span>
				<span className="prodIconsDiv">
					<button 
						className="btInvisivel"
						onClick={() => {
setCoracaoClicado(!coracaoClicado)
		setCClicked(!Cclicked)
		}}>
						<HeartIcon 
							tamanho="16" 
							preenchido={coracaoClicado}
						/>
						</button>
				<button 
					className="btInvisivel"
					onClick={() => {
setAgendaClicada(!agendaClicada)
		setAClicked(!Aclicked)
			}}
					>
					<CalendarIcon 
						plus={true} 
						tamanho={16} 
						estilo={{right:0}} 
						preenchido={agendaClicada}
					/>
					</button>
				</span>
      </figcaption>
		</figure>
	)
}