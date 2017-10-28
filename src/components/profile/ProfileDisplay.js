import React from 'react';
import "./profile.css";

export const ProfileDisplay = ({nombre, foto, correo, invocador}) => {
	return(
		<div class="container">
			<div class="row centro">
				<div class="col-12 col-sm-12 col-md-12">
					<h1>Perfiles</h1>
				</div>
			</div>
			<div class="row centro">
				<div class="col-4">
					<img class="img-circle"src={foto} alt="descripción"/>
					<h3>Nombre: {nombre}</h3>
					<p>Correo eletrónico: {correo}</p>
					<p>Invocador: {invocador}</p>
				</div>
			</div>
		</div>
		);
}