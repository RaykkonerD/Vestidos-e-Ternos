import { Link } from 'react-router-dom';

export default function footer(){
	return (
		<footer>
			<span className="superiorDiv">
			<span>CNPJ - 19.554.028/0001-07</span>
			<br />
			<span>Endereço - Rua Dina da Conceição, 180</span>
			<br />
			<span>CEP - 58135-000</span>
      </span>
				
			<hr size="1" color="#e8a0a0"/>

			<span className="inferiorDiv">
			<span className="inferior" >Todos os direitos reservados</span>
			<span>|</span>
			<span className="inferior">Formas de pagamento - pix, todos os tipos de cartões e à vista</span>
			<span className="inferior">|</span>
			<span className="inferior">Contato</span>
			</span>
			
		</footer>
	)
}