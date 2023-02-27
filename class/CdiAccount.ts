import { DioAccount } from "./DioAccount";

export class CdiAccont extends DioAccount {

    constructor(name:string, numberAccont:number) {
        super(name,numberAccont)
    }

    setInvestment = (value:number) => {
        this.deposit(value + 10)
    }
}