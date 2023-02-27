import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
      this.deposit(value)
      console.log("Loan made successfully and added to your balance. :)")
  }


}

// Codigo totalmente baseado nas aulas do bootcamp da DIO e no repósitorio https://github.com/digitalinnovationone/desafio01-ts.git