import { useState, useEffect, useContext } from 'react';
import Image from '../noImage.png';
import HeartIcon from '../public/icons/HeartIcon';
import CalendarIcon from '../public/icons/CalendarIcon';
import ClienteLogado from '../db/log';
import { AuthContext } from '../src/contexts/auth';
import envVars from '../src/envVars';
import DetalheProduto from './DetalheProduto';
import Calendar from 'react-calendar';

export default function Produto(props) {
	//Variáveis de controle de propriedades
	let objetoProduto = props.obj;
	let produto = objetoProduto.attributes;
	let id = objetoProduto.id;

	//Estados para controle da favoritação e agendamento

	const { clientePadrao, cliente, setCliente, setClientePadrao } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	let favoritados = usuario.attributes.favoritos.data;
	let nFavoritados = 2;
	let paraProva = usuario.attributes.provas.data;

	const [coracaoClicado, setCoracaoClicado] = useState(favoritados.includes(id));
	const [Cclicked, setCClicked] = useState(0);
	const [agendaClicada, setAgendaClicada] = useState(usuario.attributes.provas.data.includes(id));
	const [Aclicked, setAClicked] = useState(0);
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
		if (Cclicked) {
			if (!favoritados.includes(id)) {
				usuario.attributes.favoritos.data.push(id);

			} else {

				usuario.attributes.favoritos.data = favoritados.filter(prod => prod != id);

			}

			if (cliente) {
				setCliente(usuario);
			} else {
				setClientePadrao(usuario);
			}
		}
	}, [Cclicked]);

	//Adicionar ou remover PROVA
	useEffect(() => {
		if (Aclicked) {
			if (!paraProva.includes(id)) {
				usuario.attributes.provas.data.push(id);

			} else {

				usuario.attributes.provas.data = paraProva.filter(prod => prod != id);

			}

			if (cliente) {
				setCliente(usuario);
			} else {
				setClientePadrao(usuario);
			}
		}
	}, [Aclicked]);

	if (props.formatoQuadrado) {
		return (
			<figure className="prodFigureCurto">
				{mais}
				<DetalheProduto mostrar={mostrarDetalhe} produto={produto} img={img} agendar={() => {
						setAClicked(true);
						setAgendaClicada(true);
					}} />
				<a className="prodImgDivCurto" onClick={() => setMostrarDetalhe(!mostrarDetalhe)}>
					<img
						src={img}
						alt={`Produto №${id}`}
						className="prodImgCurto"
					/>
				</a>
				<figcaption className="prodFigcaptionCurto">
					<button className="btInvisivel" onClick={() => {
						setCoracaoClicado(!coracaoClicado)
						setCClicked(!Cclicked)
					}}>
						<HeartIcon tamanho={16} preenchido={coracaoClicado} />
					</button>
					<button className="btInvisivel" onClick={() => {
						setAgendaClicada(!agendaClicada)
						setAClicked(!Aclicked)
					}}>
						<CalendarIcon plus={true} tamanho={16} estilo={{ right: 0 }} preenchido={agendaClicada} />
					</button>
				</figcaption>
			</figure>
		)
	}

	return (
		<figure className="prodFigure">
			<DetalheProduto mostrar={mostrarDetalhe} produto={produto} img={img} agendar={() => {
			setAClicked(true);
			setAgendaClicada(true);
		}}  />
			<a className="prodImgDiv" onClick={() => setMostrarDetalhe(!mostrarDetalhe)}>
				<img
					src={img}
					alt={`Produto №${id}`}
					className="prodImg" />
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
						Valor: R$ {produto.valor.toFixed(2).replace('.', ',')}
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
							estilo={{ right: 0 }}
							preenchido={agendaClicada}
						/>
					</button>
				</span>
			</figcaption>
		</figure>
	)
}