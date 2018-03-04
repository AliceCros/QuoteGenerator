// Code React
import React from 'react';
import Citation from './Citation';
import citations from '../citations';

// On créé un component (header, footer, sidebar...)
class App extends React.Component {

	// State : données du Component
	// Un state est égal à un Objet
	/*try = {
		citations
	};*/

	state = {};

	// Gestion du cycle de vie : une première citation s'affiche au démarrage de l'app
	componentWillMount() {
		this.genererCitation();
	}

	genererCitation = event => {

		// On transforme les citations en Array
		const keyArray = Object.keys(citations);
		// Pour vérifier que nous avons bien les citations dans un tab : console.log(keyArray);

		// Une citation au hasard
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
		// Pour vérifier que nous sommes bien entre 1 et 10 au clic : console.log(randomKey);

		// On s'assure que la même citation n'apparaisse pas deux fois de suite
		if (this.state.citation === citations[randomKey].citation) {
			this.genererCitation();
			return;
		}

		// Pour afficher la citation en question
		this.setState(citations[randomKey]);
	};

	// Un component a besoin a minima d'un render
	render() {
		return(
			// Props details : passe des données d'un component à un autre
			<div>
				<Citation details={this.state} />
				<button onClick={e => this.genererCitation(e)} >Une autre citation !</button>
			</div>
		)
	}
}

// Nécessité d exporter app.js
export default App;