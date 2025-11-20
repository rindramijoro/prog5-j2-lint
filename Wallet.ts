class Wallet {
    private color: string;
    private size: string;
    private amount: number;
    private isOpen: boolean;
    private isLost: boolean;

    constructor(color: string, size: string) {
        this.color = color;
        this.size = size;
        this.amount = 0;
        this.isOpen = false;
        this.isLost = false;
    }

    open(): void {
        this.isOpen = true;
    }

    close(): void {
        this.isOpen = false;
    }

    addVola(amount: number): string {
        if(!this.isLost){
            return "seems like you lost your wallet so you cannot add money";
        }
        this.open();
        this.amount += amount;
        this.close();
        return `${amount} Ar added to your wallet`;
    }

    getVola(amount: number): string {
        if (!this.isLost) {
         return "seems like you lost your wallet so you cannot get money";
        }
        this.open();
        if (amount > this.amount) {
            return "You cannot retrieve that amount of money because you're broke";
        }
        this.amount -= amount;
        this.close();
        return `${amount} Ar was retrieved from your wallet`;
    }

    checkVola(): string {
        return `You have ${this.amount} Ar in your wallet`;
    }
}

export default Wallet;
