import { useState, useEffect } from 'react';
import axios from "axios";
import envVars from '../src/envVars';

function clientes(){
	return [{}, {
		id: 1,
		attributes: {
			nome: 'alfabeto',
			apelido: 'abc',
			endereco: 'rua avenida',
			telefone: '011900000000',
			whatsapp: '056987654321',
			instagram: '@instagram',
			favoritos: {
				data: []
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
								url: 'https://thispersondoesnotexist.com/'
							}
						}
					}
				}
			}
		}
	}];
}

const cliente = clientes()[1];
const ClienteLogado = {
  id: cliente.id,
	nome: cliente.attributes.nome,
	apelido: cliente.attributes.apelido,
	endereco: cliente.attributes.endereco,
	telefone: cliente.attributes.telefone,
	whatsapp: cliente.attributes.whatsapp,
	instagram: cliente.attributes.instagram,
	favoritos: [9,5,2],
	alugueis: [1,7],
	provas: [],
	ativo: true
};

export default ClienteLogado;