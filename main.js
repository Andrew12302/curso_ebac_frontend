class Caminhao {
    constructor(marca, motor, capacidadeCarga){
        this.marca = marca;
        this.motor = motor;
        this.capacidadeCarga = capacidadeCarga;
    }

    exibirInfo(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Motor: ${this.motor}`);
        console.log(`Capacidade de carga: ${this.capacidadeCarga} toneladas`)
    }
}

class CaminhaoEUA extends Caminhao {
    constructor(marca, capacidadeCarga){
        super(marca, "V8", capacidadeCarga);
        this.cabine = "Grande";
    }

    exibirInfo(){
        console.log("Caminhão Americano");
        super.exibirInfo();
        console.log(`Cabine: ${this.cabine}`);
    }
}

class CaminhaoEuropa extends Caminhao {
    constructor(marca, capacidadeCarga) {
        super(marca, "V6", capacidadeCarga);
        this.cabine = "Compacta";
    }

    exibirInfo(){
        console.log("Caminhão Europeu");
        super.exibirInfo();
        console.log(`Cabine: ${this.cabine}`);
    }
}

const caminhao1 = new CaminhaoEUA("Ford", 20);
const caminhao2 = new CaminhaoEUA("Chevrolet", 18);
const caminhao3 = new CaminhaoEuropa("Volvo", 16);

caminhao1.exibirInfo();
caminhao2.exibirInfo();
caminhao3.exibirInfo();

