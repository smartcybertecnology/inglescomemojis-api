// A lógica que será executada no Vercel como uma função Serverless

// Lista de 50 palavras/emojis/opções para o jogo "Inglês com Emojis"
const todasAsQuestoes = [
    { en: "Dog", pt: "cachorro", emoji: "🐶", opcoes: ["gato", "cachorro", "peixe", "pássaro"] },
    { en: "Cat", pt: "gato", emoji: "🐱", opcoes: ["cachorro", "gato", "leão", "tigre"] },
    { en: "Car", pt: "carro", emoji: "🚗", opcoes: ["bicicleta", "caminhão", "carro", "ônibus"] },
    { en: "House", pt: "casa", emoji: "🏠", opcoes: ["apartamento", "prédio", "casa", "escola"] },
    { en: "Tree", pt: "árvore", emoji: "🌳", opcoes: ["flor", "grama", "arbusto", "árvore"] },
    { en: "Book", pt: "livro", emoji: "📖", opcoes: ["caderno", "caneta", "livro", "lápis"] },
    { en: "Sun", pt: "sol", emoji: "☀️", opcoes: ["lua", "estrela", "sol", "nuvem"] },
    { en: "Moon", pt: "lua", emoji: "🌙", opcoes: ["sol", "terra", "lua", "planeta"] },
    { en: "Star", pt: "estrela", emoji: "⭐", opcoes: ["estrela", "cometa", "meteoro", "satélite"] },
    { en: "Bike", pt: "bicicleta", emoji: "🚲", opcoes: ["moto", "carro", "patinete", "bicicleta"] },
    { en: "Plane", pt: "avião", emoji: "✈️", opcoes: ["navio", "helicóptero", "avião", "balão"] },
    { en: "Boat", pt: "barco", emoji: "⛵", opcoes: ["iate", "canoa", "submarino", "barco"] },
    { en: "Heart", pt: "coração", emoji: "❤️", opcoes: ["cérebro", "pulmão", "coração", "rim"] },
    { en: "Sky", pt: "céu", emoji: "☁️", opcoes: ["terra", "mar", "céu", "fumaça"] },
    { en: "Rain", pt: "chuva", emoji: "🌧️", opcoes: ["neve", "sol", "granizo", "chuva"] },
    { en: "Fire", pt: "fogo", emoji: "🔥", opcoes: ["água", "vento", "fogo", "gelo"] },
    { en: "Water", pt: "água", emoji: "💧", opcoes: ["suco", "água", "leite", "chá"] },
    { en: "Flower", pt: "flor", emoji: "🌸", opcoes: ["folha", "árvore", "flor", "raiz"] },
    { en: "Hamburger", pt: "hambúrguer", emoji: "🍔", opcoes: ["pizza", "pão", "batata", "hambúrguer"] },
    { en: "Pizza", pt: "pizza", emoji: "🍕", opcoes: ["lasanha", "macarrão", "torta", "pizza"] },
    { en: "Ice Cream", pt: "sorvete", emoji: "🍦", opcoes: ["bolo", "doce", "picolé", "sorvete"] },
    { en: "Banana", pt: "banana", emoji: "🍌", opcoes: ["uva", "maçã", "laranja", "banana"] },
    { en: "Apple", pt: "maçã", emoji: "🍎", opcoes: ["pera", "maçã", "limão", "melancia"] },
    { en: "Orange", pt: "laranja", emoji: "🍊", opcoes: ["abacaxi", "laranja", "morango", "kiwi"] },
    { en: "Strawberry", pt: "morango", emoji: "🍓", opcoes: ["amora", "framboesa", "morango", "cereja"] },
    { en: "Grape", pt: "uva", emoji: "🍇", opcoes: ["uva", "pêssego", "figo", "damasco"] },
    { en: "Milk", pt: "leite", emoji: "🥛", opcoes: ["café", "chá", "chocolate", "leite"] },
    { en: "Bread", pt: "pão", emoji: "🍞", opcoes: ["massa", "biscoito", "bolo", "pão"] },
    { en: "Egg", pt: "ovo", emoji: "🥚", opcoes: ["carne", "frango", "ovo", "queijo"] },
    { en: "Cheese", pt: "queijo", emoji: "🧀", opcoes: ["manteiga", "pão", "queijo", "iogurte"] },
    { en: "Glass", pt: "copo", emoji: "🥛", opcoes: ["prato", "colher", "garfo", "copo"] },
    { en: "Key", pt: "chave", emoji: "🔑", opcoes: ["cadeado", "porta", "janela", "chave"] },
    { en: "Scissors", pt: "tesoura", emoji: "✂️", opcoes: ["faca", "régua", "tesoura", "lápis"] },
    { en: "Clock", pt: "relógio", emoji: "⏰", opcoes: ["calendário", "tempo", "minuto", "relógio"] },
    { en: "Phone", pt: "telefone", emoji: "📱", opcoes: ["computador", "tablet", "televisão", "telefone"] },
    { en: "Computer", pt: "computador", emoji: "💻", opcoes: ["mouse", "teclado", "impressora", "computador"] },
    { en: "Glasses", pt: "óculos", emoji: "👓", opcoes: ["chapéu", "luva", "cachecol", "óculos"] },
    { en: "Hat", pt: "chapéu", emoji: "🎩", opcoes: ["boné", "gorro", "capacete", "chapéu"] },
    { en: "Shirt", pt: "camisa", emoji: "👕", opcoes: ["calça", "vestido", "saia", "camisa"] },
    { en: "Pants", pt: "calça", emoji: "👖", opcoes: ["short", "meia", "calça", "sapato"] },
    { en: "Shoe", pt: "sapato", emoji: "👞", opcoes: ["bota", "sandália", "chinelo", "sapato"] },
    { en: "Pen", pt: "caneta", emoji: "🖊️", opcoes: ["lápis", "giz", "caneta", "marcador"] },
    { en: "Pencil", pt: "lápis", emoji: "✏️", opcoes: ["caneta", "borracha", "apontador", "lápis"] },
    { en: "Paint", pt: "tinta", emoji: "🎨", opcoes: ["pincel", "tela", "tinta", "quadro"] },
    { en: "Money", pt: "dinheiro", emoji: "💰", opcoes: ["cartão", "cofre", "moeda", "dinheiro"] },
    { en: "Gift", pt: "presente", emoji: "🎁", opcoes: ["sacola", "fita", "cartão", "presente"] },
    { en: "Ring", pt: "anel", emoji: "💍", opcoes: ["colar", "pulseira", "brinco", "anel"] },
    { en: "Ball", pt: "bola", emoji: "⚽", opcoes: ["raquete", "rede", "gol", "bola"] },
    { en: "Flag", pt: "bandeira", emoji: "🚩", opcoes: ["país", "mapa", "hino", "bandeira"] },
    { en: "Crown", pt: "coroa", emoji: "👑", opcoes: ["cetro", "trono", "rainha", "coroa"] }
];

// Função utilitária para misturar um array (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Handler da função Serverless do Vercel
module.exports = (req, res) => {
    // Define os limites de questões por dificuldade
    const limites = {
        facil: 15,
        normal: 20,
        dificil: 30
    };

    // Extrai o parâmetro de dificuldade da URL (query string)
    const dificuldade = req.query.dificuldade || 'facil';
    const limite = limites[dificuldade] || limites.facil;

    // 1. Mistura todas as questões disponíveis
    let questoesMisturadas = [...todasAsQuestoes];
    shuffleArray(questoesMisturadas);

    // 2. Seleciona o número exato de questões para a dificuldade
    const questoesDoJogo = questoesMisturadas.slice(0, limite).map(q => {
        // 3. Mistura as opções de resposta para cada questão
        let opcoesMisturadas = [...q.opcoes];
        shuffleArray(opcoesMisturadas);
        
        return {
            emoji: q.emoji,
            en: q.en,
            pt: q.pt, // Resposta correta em PT
            opcoes: opcoesMisturadas // Opções em PT (incluindo a correta)
        };
    });

    // Configura o cabeçalho para permitir requisições de qualquer origem (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Retorna as questões em formato JSON
    res.status(200).json({
        dificuldade: dificuldade,
        total: questoesDoJogo.length,
        questoes: questoesDoJogo
    });
};
