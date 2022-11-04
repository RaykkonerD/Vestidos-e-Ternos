export default function ProfileIcon(props){

	let tamanho = (typeof props.tamanho !== "undefined") ? props.tamanho : 10;
	let fill = (typeof props.fill !== "undefined") ? props.fill : "#e82727";
	let estilo = (typeof props.estilo !== "undefined") ? props.estilo : {};
	
  
	return (<svg xmlns="http://www.w3.org/2000/svg" width={tamanho} height={tamanho} fill={fill} style={estilo} viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>)
		
}



/*<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg>

					<svg xmlns="http://www.w3.org/2000/svg" width={tamanho} height={tamanho} fill={fill} style={estilo} viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
 </svg>
	)
*/