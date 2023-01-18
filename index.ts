class User{
    private name: string;
    private message: string;
    constructor(name: string, message: string){
        this.name = name;
        this.message = message;
    }
    public getName(): string{
        return this.name;
    }
    public getMessage(): string{
        return this.message;
    }
    public setName(name: string): void{
        this.name = name;
    }
    public setMessage(message: string): void{
        this.message = message;
    }
    
}
