import React from "react";

export default function Saludo(props) {
	const {userInfo, saludarFn} = props;  //Asignación por Destructuring
	const {name = "Fulanito" , month = "un mes cualquiera", year = "año de nuestro Señor Jesucristo"} = userInfo;

	console.log(props);
	console.log(userInfo);
	
	return (
		<>
			<h1>Hola {name}</h1>
			<h2>Aprendiendo React en {month} del {year}</h2>
			<button onClick={() => saludarFn(name, month, year)}>Saluda!</button>
		</>
	);
}