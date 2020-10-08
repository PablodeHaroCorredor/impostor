function Juego(){
	this.partidas={};//que coleccion?
	this.crearPartida=function(num, owner){
		let codigo=this.obtenerCodigo();
		if (!this.partidas[codigo]){
			this.partidas[codigo]=new Partida(num, owner.nick);
			owner.partida = this.partidas[codigo];
		}
		//generar un codigo de 6 letras aleatorio
		//comprobar que no está en uso
		//crear el objeto partida:numero y owner
		//asignarla this.partidas[codigo]=nueva partida
	}
	this unirAPartida=function(codigo, nick){
		if(this.partidas[codigo]){
			this.partidas[].agregarUsuario(nick);
		}

	}
	
	this.obtenerCodigo=function(){
		let cadena="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		let letras=cadena.split('');
		let maxCadena=cadena.lenght;
		let codigo=[];
		for(i=0;i<6;i++){
		codigo.push(letras[randomInt(0,maxCadena)-1]);
		}
		return codigo.join('');
	}
	
	


}

function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}


function Usuario(nick){
	this.nick = nick;
	this.iniciarPartida=function(){
		this.partida.iniciarPartida(num, this);
	}
	this.crearPartida=function(num){

	}
}

function Partida (num, owner){
	this.fase = new Inicial();
	this.numUsuarios=num;
	this.nickOwner=owner;
	this.usuarios=[];//EL index 0 será el owner
	//this.usuarios={} version diccionario
	this.agregarUsuario=function(nick){
		this.fase.agregarUsuario(nick, this);
	}
	this.puedeagregarUsuario=function(nick){
		let nuevo=nick;
		let contador=1;
		while(this.usuarios[nuevo]){
			nuevo=nick+contador;
			contador=contador+1;
		}
		if(this.numUsuarios > this.usuarios[].lenght){

		}
		this.usuarios[nuevo]=new Usuario(nuevo);
		//comprobar nick unico
		//comprobar si se ha llegado al usuario num
	}
	this.agregarUsuario(owner);
	this iniciarPartida=function(){
		this.fase.iniciarPartida(this);
	}
	this.crearPartida=function(){
		
	}
}

function Inicial(){
	this.agregarUsuario=function(nick, partida){
		partida.puedeagregarUsuario(nick);
	}
}
function Completado(){
	this.iniciarPartida=function(partida){
		partida.fase=new Jugando();
	}
}

function Jugando(){
	this.agregarUsuario=function(nick, partida){
		//this.puedeagregarUsuario(nick);
		console.log("La partida ya ha comenzado");
	}
}

function Final(){
	this.agregarUsuario=function(nick, partida){
		//this.puedeagregarUsuario(nick);
		console.log("La partida ya ha comenzado");
	}
}



