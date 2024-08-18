import { useState, useEffect, useContext } from 'react';
import './Perfil.css';
import { AuthContext } from '../../contexts/auth';
import API from '../../api/api';
import Cabecalho from '../../../components/Header';
import imagemPadrao from '../../../noImage.png';
import EditIcon from '../../../public/icons/EditIcon';
import HeartIcon from '../../../public/icons/HeartIcon';
import CalendarIcon from '../../../public/icons/CalendarIcon';
import envVars from '../../envVars';
import { Link } from 'react-router-dom';

export default function Perfil() {
	const { clientePadrao, cliente } = useContext(AuthContext);
	let usuario = cliente || clientePadrao;
	let nomeUsuario = usuario.attributes.nome;
	let urlImg = cliente ? envVars.DB_URL : "";
	let imagemUsuario = urlImg  + usuario.attributes.imagem.data.attributes.formats.thumbnail.url;

	return (
		<div className="telaPerfil">
			<Cabecalho />
			<div className="conteudoPerfil">
				<div className="imgNomeDiv">
				  <img src={imagemUsuario} className="imagemUsuario" />
				  <span>{nomeUsuario}</span>
				</div>
				<div className="botoesPerfil">
					<Link to="/dados" className="botaoPerfil botaoEditar link">
						<EditIcon tamanho={15} />
					</Link>
					<div className="botoesPerfilInferiores">
						<Link to="/favoritos" className="botaoPerfil botaoPerfilFavoritos link">
							<HeartIcon tamanho={15} />
						</Link>
						<Link to="/alugueis" className="botaoPerfil botaoPerfilCalendar link">
							<CalendarIcon tamanho={15} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
