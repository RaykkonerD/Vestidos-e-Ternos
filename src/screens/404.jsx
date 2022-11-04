import React from 'react';
import Cabecalho from '../../components/Header';
import image from '../../404.png';

export default function p404(){
	return (
		<div>
			<Cabecalho  />
			<div style={{display: "flex", justifyContent: 'center', lineHeight:'3'}}>
			<img src={image} style={{height:'20em',}} />
			</div>
		</div>
	)
}