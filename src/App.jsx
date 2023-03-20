import Testimonio from './components/Testimonio';
import style from './App.module.css';

const App = () => {
	return (
		<div className={style.app}>
			<div className={style.contenedorPrincipal}>
				<h1>Esto es lo que dicen nuestros alumnos sobre ArtemisCamp:</h1>
				<Testimonio />
			</div>
		</div>
	);
};

export default App;
