import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}

// Codigo totalmente baseado nas aulas do bootcamp da DIO e no repósitorio https://github.com/digitalinnovationone/desafio01-ts.git