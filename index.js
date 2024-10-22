class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Mapeamento de tipos para ataques
        const ataques = {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        };

        // Recupera o ataque com base no tipo do herói
        const ataque = ataques[this.tipo.toLowerCase()] || 'ataque básico'; // Caso o tipo não exista, usa 'ataque básico'

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroiMago = new Heroi("Marvim Magnus", "150 anos", "mago");
heroiMago.atacar(); // Saída: O mago atacou usando magia
