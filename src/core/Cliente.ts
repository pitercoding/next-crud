export default class Cliente {
    
    constructor(
        public nome: string, 
        public idade: number, 
        public id: string | null = null
    ) {}

    static vazio() {
        return new Cliente('', 0)
    }
}