import React, {Component} from 'react';
import {ProfileDisplay} from './ProfileDisplay';

const yo = {
	nombre: "David",
	correo: "ejemplo@ejemplo.com",
	invocador: "yo we",
	foto: "https://avatars1.githubusercontent.com/u/20232549?v=4&amp;s=460",
	}	

class ProfileContainer extends Component {
	render(){
		return(
				<div>
					<ProfileDisplay {...yo}/>
					
				</div>
			);
	}
}

export default ProfileContainer;