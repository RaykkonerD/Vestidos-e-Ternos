import React, { useState } from 'react';

export default function Filtro(){
	const [tipo, setTipo] = useState("tipo");
	const [cor, setCor] = useState("cor");
	const [tamanho, setTamanho] = useState("tamanho");
  let lg = (x) => x.length*5+50;

	return (
		<div className="filtro">
        <span className="filtroTitulo">Filtro: </span>
				<div className="selectDiv">
				  <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="selects" style={{width:lg(tipo)}}>    
            <option disabled style={noDisplay} value="tipo">Tipo</option>
						<optgroup label="Específicos">
						<option value="noiva">Noiva</option>
						<option value="noivo">Noivo</option>
						<option value="dama de honra">Dama de honra</option>
						</optgroup>
						<optgroup label="Peças">
						<option value="vestido">Vestido</option>
						<option value="sapato">Sapato</option>
						<option value="tiara">Tiara</option>
						<option value="terno">Terno</option>
						</optgroup>
					</select>


				  <select value={cor} onChange={(e) => setCor(e.target.value)} className="selects" style={{width:lg(cor)}}>    
            <option disabled style={noDisplay} value="cor">Cor</option>
						<option value="branco">Branco</option>
						<option value="preto">Preto</option>
						<option value="azul">Azul</option>
						<option value="vermelho">Vermelho</option>
						<option value="verde">Verde</option>
						<option value="amarelo">Amarelo</option>
						<option value="marrom">Marrom</option>
						<option value="rosa">Rosa</option>
					</select>


					<select value={tamanho} onChange={(e) => setTamanho(e.target.value)} className="selects" style={{width:lg(tamanho)}}>    
            <option disabled style={noDisplay} value= "tamanho">Tamanho</option>
						<optgroup label="Adulto">
						<option value="p">P</option>
						<option value="m">M</option>
						<option value="g">G</option>
						<option value="gg">GG</option>
						</optgroup>
						<optgroup label="Infantil">
						<option value="2 anos">2 anos</option>
						<option value="4 anos">4 anos</option>
						<option value="6 anos">6 anos</option>
						<option value="8 anos">8 anos</option>
						<option value="10 anos">10 anos</option>
						<option value="12 anos">12 anos</option>
						<option value="14 anos">14 anos</option>
						</optgroup>
					</select>
				</div>
			</div>

	)
}

const noDisplay = {
	display: "none"
}