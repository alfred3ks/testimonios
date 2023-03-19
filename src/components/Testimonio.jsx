/* eslint-disable react/prop-types */
import style from './Testimonio.module.css';

const Testimonio = (props) => {
	return (
		<div className={style.contenedorTestimonio}>
			<img
				className={style.imagenTestimonio}
				src={`../img/${props.imagen}.png`}
				alt={`Imagen de ${props.nombre}`}
			/>
			<div className={style.contenedorTextoTestimonio}>
				<h2 className={style.nombreTestimonio}>
					{props.nombre} en {props.pais}
				</h2>
				<p className={style.cargoTestimonio}>
					<strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>
				</p>
				<p className={style.textoTestimonio}>{props.testimonio}</p>
			</div>
		</div>
	);
};

export default Testimonio;
