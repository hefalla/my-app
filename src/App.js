import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
	const user1 = {
    	name: "Henry Falla",
    	month: "Septiembre",
    	year: "2023"
  	};

	const user2 = {
    	name: "Carlos Villagrán",
  	};
	
	const saludarFn = (nombre, mes, año) => {
		console.log("Hola " + nombre + ", usted se encuentra estudiando en " + mes + " del " + año);
		console.log(`Hola ${nombre}, usted se encuentra estudiando en ${mes} del ${año}`); //Usando Template Strings
	};
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Saludo userInfo={user1} saludarFn={saludarFn} />
				<Saludo userInfo={user2} saludarFn={saludarFn} />
			</header>
		</div>
	);
}

export default App;