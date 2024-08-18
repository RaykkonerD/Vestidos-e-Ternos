import React from 'react';
import Cabecalho from '../../components/Header';
import image from '../../404.png';

export default function p404(){
	return (
		<div>
			<Cabecalho  />
			<div style={{display: "flex", padding:'25vh 0', alignItems: 'center', justifyContent: 'center',}}>
				<img src={image} style={{height:'20em',}} />
			</div>
		</div>
	)
}