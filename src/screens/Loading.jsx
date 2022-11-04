import react, { useState } from 'react';
import ReactLoading from 'react-loading';
import logo from '../../public/imgs/logoBold.png'

export default function Loading(){	
	return (
		<div style={styles.div}>
			<img style={styles.logo} src={logo}/>
		  <ReactLoading type="cylon" color="#e82727"/>
		</div>
	)
}

const styles = {
	div: {
		width:"100%", 
		height:"100vh", 
		display:"flex", 
		justifyContent:"center", 
		alignItems:"center", 
		flexDirection:"column",
	},
	logo: {
		width: '80%'
	}
}