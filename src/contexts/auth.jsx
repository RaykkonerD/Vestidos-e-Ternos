import React, { createContext, useState } from 'react';
import API from "../api/api";
import envVars from '../envVars';

export const AuthContext = createContext({});

export function AuthProvider(props) {
	const [logado, setLogado] = useState(false);
	const [cliente, setCliente] = useState();
	const [mensagem, setMensagem] = useState('');
	const [clientePadrao, setClientePadrao] = useState({
		id: 1,
		attributes: {
			nome: /*'Cris Ferreira'*/'Usuário',
			apelido: 'abc',
			endereco: '',
			telefone: '',
			whatsapp: '',
			instagram: '@',
			favoritos: {
				data: [3, 5]
			},
			provas: {
				data: []
			},
			alugueis: {
				data: []
			},
			imagem: {
				data: {
					attributes: {
						formats: {
							thumbnail: {
								url: /*'https://thispersondoesnotexist.com/image'*/'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdtgsw1fYl0LIXQvjCKzKVwDfd5tfXeGQOA&usqp=CAU'
							}
						}
					}
				}
			}
	  }
	});

    function signIn(user, password){
		  let url = envVars.DB_URL + "/api/clientes?populate=*";		
			
		 API.get(url).then((res) => {
			let elementos = res.data.data;
			let usuarioDado = elementos.filter(el => el.attributes.nome == user || el.attributes.apelido == user)[0];
			 
			if(usuarioDado){
				if(usuarioDado.attributes.senha == password){
				  setLogado(!logado);
          setCliente(usuarioDado);
					setMensagem('Login bem sucedido');
					setCliente(previo => {
						return {...previo, attributes: {...previo.attributes, 
																				favoritos: clientePadrao.attributes.favoritos,
		provas: clientePadrao.attributes.provas																	 }
									 }
					});
				
				} else {
					setMensagem('Ups, senha de usuário inválida');
				}
			} else {
				setMensagem('Ups, nome de usuário inválido');
			}
	}
		).catch((e) => console.warn("ERRO DE REQUISIÇÃO: " + e));

			return mensagem;

 }

	 function signUp(novoCliente){
		  let url = envVars.DB_URL + "/api/clientes?populate=*";		
			
		 API.post(url, novoCliente).then((res) => {
			let elementos = res.data.data;
			
      setCliente(
				elementos.filter(el => el.attributes.nome == user || el.attributes.apelido == user)[0]
							)
	}
		).catch((e) => console.warn("ERRO DE REQUISIÇÃO: " + e));


 }
	
	return (
		<AuthContext.Provider value={{ signIn, signUp, clientePadrao, setClientePadrao, cliente, setCliente, logado, mensagem }}>
			{props.children}
		</AuthContext.Provider>
	);
}