/* eslint-disable react/prop-types */
import style from './Testimonio.module.css';
import testimonios from '../data';

const Testimonio = () => {
	return (
		<>
			{testimonios.map((testimonio) => {
				return (
					<div className={style.contenedorTestimonio} key={testimonio.nombre}>
						<img
							className={style.imagenTestimonio}
							src={`../img/${testimonio.imagen}.png`}
							alt={`Imagen de ${testimonio.nombre}`}
						/>
						<div className={style.contenedorTextoTestimonio}>
							<h2 className={style.nombreTestimonio}>
								{testimonio.nombre} en {testimonio.pais}
							</h2>
							<p className={style.cargoTestimonio}>
								<strong>{testimonio.cargo}</strong> en{' '}
								<strong>{testimonio.empresa}</strong>
							</p>
							<p className={style.textoTestimonio}>{testimonio.testimonio}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Testimonio;
