import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}

// Codigo totalmente baseado nas aulas do bootcamp da DIO e no repósitorio https://github.com/digitalinnovationone/desafio01-ts.git