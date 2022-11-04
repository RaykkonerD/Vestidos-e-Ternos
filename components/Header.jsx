import React, { useState } from 'react';
import '../src/App.css';
import { IonIcon } from '@ionic/react';
import { logoWhatsapp, logoInstagram } from 'ionicons/icons';
import HomeIcon from '../public/icons/HomeIcon';
import HeartIcon from '../public/icons/HeartIcon';
import CalendarIcon from '../public/icons/CalendarIcon';
import PhoneIcon from '../public/icons/PhoneIcon';
import ProfileIcon from '../public/icons/ProfileIcon';
import Logo from '../public/imgs/logo.png';
import { Link } from 'react-router-dom';
let display = true;

export default function Header(pagina){
  const [verContatos, setVerContatos] = useState();

	
	return (
		<header className="header">
			<img src={Logo} className="logo" />
			<span style={styles.iconsDiv}>
			<Link to='/' className="link">
			  <HomeIcon tamanho={15}  estilo={styles.icons}/>
			</Link>
			<Link to="/favoritos" className="link">
			  <HeartIcon tamanho={15}  estilo={styles.icons}/>
			</Link>
			<Link to="/provas" className="link">
			  <CalendarIcon tamanho={15} estilo={styles.icons}/>
			</Link>
				<Link className="link" onClick={() => setVerContatos(!verContatos)}>
			<PhoneIcon tamanho={15}  estilo={styles.icons}/>
				</Link>
			<Link to="/login" className="link">
			<ProfileIcon tamanho={15}  estilo={styles.icons}/>
			</Link>
			</span>
			<div style={styles.modal}>
				<span style= {styles.modalSpans}>(83) 997283266</span>
				<span style= {styles.modalSpans}>@vestidoseternos</span>
			</div>
			<div className="contatosDiv" style={{ display: (verContatos?"flex":"none") }}>
					<a className="link" href="https://wa.link/fkx2rk">
				<span>
					<IonIcon icon={logoWhatsapp} style={styles.ion}/>
					(83) 8898-8927
				</span>
						</a>
					<a className="link" href="https://www.instagram.com/vestidoseternos/">
				<span>
					<IonIcon icon={logoInstagram} style={styles.ion} />
					@vestidoseternos
				</span>
						</a>
			</div>
		</header>
	)
}

const styles = {
	icons: {
		marginLeft: 15,
	},
	ion: {
		marginRight: 5,
		fontSize: 14
	},
	iconsDiv: {
		alignSelf: 'right',
		display: "inline",
	},
	modal: {
		position: 'absolute',
		border: '1px solid #e82727',
		backgroundColor: 'white',
		top: 45,
		right: 45,
    display: 'none'
	},
  modalSpans: {
		display: 'inherit',
    textAlign: 'right',
		color: '#e82727',
		margin: 0,
		paddingRight: 5,
		paddingLeft: 5
	}
};

