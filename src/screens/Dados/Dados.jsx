import { useState, useContext } from 'react';
import Cabecalho from '../../../components/Header';
import EyeIcon from '../../../public/icons/EyeIcon';
import { AuthContext } from '../../contexts/auth';

export default function Dados() {
	const { cliente, clientePadrao } = useContext(AuthContext);
	const usuario = cliente.attributes;
	const [dados, setDados] = useState();
	const [nome, setNome] = useState(usuario.nome);
	const [endereco, setEndereco] = useState(usuario.endereco);
	const [telefone, setTelefone] = useState(usuario.telefone);
	const [whatsapp, setWhatsapp] = useState(usuario.whatsapp);
	const [instagram, setInstagram] = useState(usuario.instagram);
	const [senha, setSenha] = useState();
	const [verSenha, setVerSenha] = useState(false);

	const handleChangeDados = e => {
		setDados(dadoExistente => ({
			...dadoExistente,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<div>
			<Cabecalho />
			<form
				className="registroForm">
				<h4
					className="registroTitulo">Editar dados</h4>
				<input
					type="text"
					name="nome"
					value={nome}
					onChange={(e) => setNome(e.target.value)}
					placeholder="Nome Completo"
					className="registroInputs" />
				<input
					type="text"
					name="endereco"
					value={endereco}
					onChange={(e) => setEndereco(e.target.value)}
					placeholder="Endereço"
					className="registroInputs" />
				<input
					type="number"
					name="telefone"
					value={telefone}
					onChange={(e) => setTelefone(e.target.value)}
					placeholder="Telefone (opcional)"
					className="registroInputs" />
				<input
					type="text"
					name="whatsapp"
					value={whatsapp}
					onChange={(e) => setWhatsapp(e.target.value)}
					placeholder="WhatsApp"
					className="registroInputs" />
				<input
					type="text"
					value={instagram}
					onChange={(e) => setInstagram(e.target.value)}
					placeholder="Instagram (opcional)"
					className="registroInputs" />
				<div
					className="registroInputSenhaDiv">
					<input
						type={verSenha ? "text" : "password"}
						name="senha"
						placeholder="Nova senha"
						className="registroInputSenha"
						value={senha}
						onChange={e => setSenha(e.target.value)} />
					<a
						className="btInvisivel eyeIcon"
						onClick={() => setVerSenha(!verSenha)}>
						<EyeIcon
							slash={verSenha}
							tamanho="18" />
					</a>
				</div>
				<input
					type="submit"
					value="Salvar"
					className="botaoRegistrar" />
			</form>
		</div>
	)
}