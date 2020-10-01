function Juego(){
	this.partidas={};//que coleccion?
	this.crearPartida=function(num, owner){
		let codigo=this.obtenerCodigo();
		if (!this.partidas[codigo]){
			this.partidas[codigo]=new Partida(num, owner);
		}
		//generar un codigo de 6 letras aleatorio
		//comprobar que no está en uso
		//crear el objeto partida:numero y owner
		//asignarla this.partidas[codigo]=nueva partida
	}
	this unirAPartida=function(){

	}
	this.obtenerCodigo=function(){
		let cadena="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		let letras=cadena.split('');
		let codigo=[];
		for(i=0;i<6;i++){
		codigo.push(letras[randomInt(0,25)-1]);
		}
		return codigo.join('');
	}
	
	


}

function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}


function Partida (num, owner){
	
	this.numUsuarios=num;
	this.owner=owner;
	this.usuarios=[];//EL index 0 será el owner
	//this.usuarios={} version diccionario
	this.agregarUsuario=function(nick){
		//comprobar nick unico
		//comprobar si se ha llegado al usuario num
	}
	this.agregarUsuario(owner);


}



