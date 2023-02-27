export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true



  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    this.accountValidation()
    this.balance += value
  }

  withdraw = (value: number): void => {
    this.accountValidation()
    if (this.getBalanceController(value)) {
      this.balance -= value;
      console.log("Withdrawal Done successfully, your balance is now", this.balance)
    } else {
      console.log("Withdrawal unavailable, you do not have enough balance for such a withdrawal!")
    }
  }

  getBalance = (): void => {
    this.accountValidation()
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    return false;
  }

  accountValidation = () => {
    if (this.validateStatus()) {
      console.log("Conta verificada!")
    } else {
      throw new Error('Conta inválida')
    }
  }

  setInvalidAccount = (): void => {
    this.status = false
  }

  getBalanceController = (value: number): boolean => {
    if (this.balance >= value) {
      return true;
    } else {
      return false;
    }
  }
}

// Codigo totalmente baseado nas aulas do bootcamp da DIO e no repósitorio https://github.com/digitalinnovationone/desafio01-ts.git