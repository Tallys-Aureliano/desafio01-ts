import { CdiAccont } from './class/CdiAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccont: PeopleAccount = new PeopleAccount(1,"tallys",123)
const companyAccount: CompanyAccount = new CompanyAccount("Dio",2)
const cdiAccont: CdiAccont = new CdiAccont("Aureliano",3)

peopleAccont.deposit(50)
peopleAccont.withdraw(25)
peopleAccont.withdraw(25)
peopleAccont.getBalance()
peopleAccont.getName()
peopleAccont.setInvalidAccount()
console.log()

companyAccount.deposit(200)
companyAccount.getLoan(400)
companyAccount.withdraw(500)
companyAccount.getBalance()
companyAccount.getName()
companyAccount.setInvalidAccount()
console.log()

cdiAccont.deposit(300)
cdiAccont.setInvestment(300)
cdiAccont.withdraw(2)
cdiAccont.getBalance()
cdiAccont.getName()
cdiAccont.setInvalidAccount()

// Codigo totalmente baseado nas aulas do bootcamp da DIO e no repósitorio https://github.com/digitalinnovationone/desafio01-ts.git